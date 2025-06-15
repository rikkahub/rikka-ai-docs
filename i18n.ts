import { createGoogleGenerativeAI, GoogleGenerativeAIProviderOptions } from "@ai-sdk/google";
import { generateText } from "ai";
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, dirname, relative, extname } from "path";

const google = createGoogleGenerativeAI();
const model = google('gemini-2.5-flash-preview-05-20');

// 支持的语言配置
const SUPPORTED_LANGUAGES = {
    'zh': '中文',
    'ja': '日语',
    'ko': '韩语',
    'es': '西班牙语',
    'fr': '法语',
    'de': '德语',
    'ru': '俄语',
    'pt': '葡萄牙语',
    'it': '意大利语',
    'ar': '阿拉伯语'
};

// 需要跳过的文件和目录
const SKIP_PATTERNS = [
    '.vitepress',
    'node_modules',
    '.git',
    'public',
    'components',
    'assets'
];

// 语言目录列表（需要排除的已翻译目录）
const LANGUAGE_DIRS = Object.keys(SUPPORTED_LANGUAGES);

async function translate(content: string, targetLanguage: string, sourceLanguage: string = 'en'): Promise<string> {
    const targetLanguageName = SUPPORTED_LANGUAGES[targetLanguage as keyof typeof SUPPORTED_LANGUAGES] || targetLanguage;
    const sourceLanguageName = sourceLanguage === 'en' ? '英语' : SUPPORTED_LANGUAGES[sourceLanguage as keyof typeof SUPPORTED_LANGUAGES] || sourceLanguage;
    
    const result = await generateText({
        model,
        system: `你是一个翻译专家，用户会提供一段VitePress的markdown文档内容，你需要将文档内容从${sourceLanguageName}翻译成${targetLanguageName}语言。

翻译要求：
- 直接返回翻译后的内容，不要添加任何其他内容，也不要用代码块包裹
- 保持VitePress的所有格式，包括frontmatter、链接、代码块等
- 翻译要确保内容通顺，符合${targetLanguageName}的语法和习惯
- 保持技术术语的准确性
- 不要翻译代码块中的代码内容
- 保持链接路径不变，只翻译链接文本，如果链接指向其他文档，请添加路径前缀，例如：/zh/docs/assistants/basic.md
- 保持图片路径和alt文本的格式
- 如果源内容已经是${targetLanguageName}，请直接返回原内容`,
        prompt: content,
        providerOptions: {
            google: {
                thinkingConfig: {
                  thinkingBudget: 0,
                },
              } satisfies GoogleGenerativeAIProviderOptions,
        }
    });
    return result.text;
}

function shouldSkipPath(path: string, excludeLanguageDirs: boolean = true): boolean {
    const pathParts = path.split('/');
    
    // 检查基本跳过模式
    const hasSkipPattern = SKIP_PATTERNS.some(pattern => 
        pathParts.some(part => part === pattern || part.startsWith(pattern))
    );
    
    if (hasSkipPattern) {
        return true;
    }
    
    // 如果需要排除语言目录，检查是否包含语言目录
    if (excludeLanguageDirs) {
        const hasLanguageDir = LANGUAGE_DIRS.some(langCode => 
            pathParts.includes(langCode)
        );
        if (hasLanguageDir) {
            return true;
        }
    }
    
    return false;
}

function getAllMarkdownFiles(dir: string, baseDir: string = dir, excludeLanguageDirs: boolean = true): string[] {
    const files: string[] = [];
    
    if (!existsSync(dir)) {
        return files;
    }
    
    const items = readdirSync(dir);
    
    for (const item of items) {
        const fullPath = join(dir, item);
        const relativePath = relative(baseDir, fullPath);
        
        if (shouldSkipPath(relativePath, excludeLanguageDirs)) {
            continue;
        }
        
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...getAllMarkdownFiles(fullPath, baseDir, excludeLanguageDirs));
        } else if (stat.isFile() && extname(item) === '.md') {
            files.push(fullPath);
        }
    }
    
    return files;
}

function createTargetPath(sourcePath: string, sourceDir: string, targetDir: string): string {
    const relativePath = relative(sourceDir, sourcePath);
    return join(targetDir, relativePath);
}

function ensureDirectoryExists(filePath: string): void {
    const dir = dirname(filePath);
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }
}

function detectSourceLanguage(sourcePath: string, sourceDir: string): string {
    const relativePath = relative(sourceDir, sourcePath);
    const pathParts = relativePath.split('/');
    
    // 检查路径中是否包含语言代码
    for (const part of pathParts) {
        if (LANGUAGE_DIRS.includes(part)) {
            return part;
        }
    }
    
    // 默认为英语
    return 'en';
}

async function translateFile(sourcePath: string, targetPath: string, targetLanguage: string, sourceLanguage: string = 'en'): Promise<void> {
    try {
        console.log(`翻译文件: ${sourcePath} -> ${targetPath} (${sourceLanguage} -> ${targetLanguage})`);
        
        const content = readFileSync(sourcePath, 'utf-8');
        
        // 如果文件内容为空或只有空白字符，直接复制
        if (!content.trim()) {
            ensureDirectoryExists(targetPath);
            writeFileSync(targetPath, content);
            return;
        }
        
        // 如果源语言和目标语言相同，直接复制
        if (sourceLanguage === targetLanguage) {
            console.log(`⏭️  源语言和目标语言相同，直接复制: ${relative(process.cwd(), targetPath)}`);
            ensureDirectoryExists(targetPath);
            writeFileSync(targetPath, content);
            return;
        }
        
        const translatedContent = await translate(content, targetLanguage, sourceLanguage);
        
        ensureDirectoryExists(targetPath);
        writeFileSync(targetPath, translatedContent, 'utf-8');
        
        console.log(`✅ 翻译完成: ${relative(process.cwd(), targetPath)}`);
        
        // 添加延迟避免API限制
        await new Promise(resolve => setTimeout(resolve, 1000));
        
    } catch (error) {
        console.error(`❌ 翻译失败 ${sourcePath}:`, error);
        throw error;
    }
}

async function translateDocuments(sourceDir: string, targetLanguage: string, sourceLanguage: string = 'en', overwrite: boolean = false): Promise<void> {
    const targetLanguageName = SUPPORTED_LANGUAGES[targetLanguage as keyof typeof SUPPORTED_LANGUAGES] || targetLanguage;
    const sourceLanguageName = sourceLanguage === 'en' ? '英语' : SUPPORTED_LANGUAGES[sourceLanguage as keyof typeof SUPPORTED_LANGUAGES] || sourceLanguage;
    
    console.log(`🚀 开始翻译文档: ${sourceLanguageName} -> ${targetLanguageName}`);
    console.log(`源目录: ${sourceDir}`);
    console.log(`覆盖模式: ${overwrite ? '启用' : '禁用'}`);
    
    const targetDir = join('docs', targetLanguage);
    console.log(`目标目录: ${targetDir}`);
    
    // 获取所有markdown文件，排除已翻译的语言目录
    const markdownFiles = getAllMarkdownFiles(sourceDir, sourceDir, true);
    
    if (markdownFiles.length === 0) {
        console.log('❌ 没有找到需要翻译的markdown文件');
        return;
    }
    
    console.log(`📝 找到 ${markdownFiles.length} 个文件需要翻译`);
    
    let successCount = 0;
    let failCount = 0;
    let skipCount = 0;
    let overwriteCount = 0;
    
    for (const sourceFile of markdownFiles) {
        try {
            const targetFile = createTargetPath(sourceFile, sourceDir, targetDir);
            
            // 检查目标文件是否已存在
            if (existsSync(targetFile)) {
                if (!overwrite) {
                    console.log(`⏭️  跳过已存在的文件: ${relative(process.cwd(), targetFile)}`);
                    skipCount++;
                    continue;
                } else {
                    console.log(`🔄 覆盖已存在的文件: ${relative(process.cwd(), targetFile)}`);
                    overwriteCount++;
                }
            }
            
            // 检测源文件的语言
            const detectedSourceLanguage = detectSourceLanguage(sourceFile, sourceDir);
            
            await translateFile(sourceFile, targetFile, targetLanguage, detectedSourceLanguage);
            successCount++;
            
        } catch (error) {
            failCount++;
            console.error(`处理文件失败: ${sourceFile}`, error);
        }
    }
    
    console.log(`\n🎉 翻译完成！`);
    console.log(`✅ 成功: ${successCount} 个文件`);
    if (overwriteCount > 0) {
        console.log(`🔄 覆盖: ${overwriteCount} 个文件`);
    }
    console.log(`⏭️  跳过: ${skipCount} 个文件`);
    console.log(`❌ 失败: ${failCount} 个文件`);
}

// 主函数
async function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log(`
📖 VitePress 文档翻译工具

用法:
  bun run i18n.ts <目标语言代码> [选项] [源目录] [源语言代码]

选项:
  --overwrite, -o    覆盖已存在的翻译文件

支持的语言:
${Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => `  ${code} - ${name}`).join('\n')}

示例:
  bun run i18n.ts zh                    # 翻译到中文 (默认: 英语->中文, 源目录: docs)
  bun run i18n.ts zh --overwrite        # 翻译到中文并覆盖已存在的文件
  bun run i18n.ts ja docs               # 翻译docs目录到日语 (英语->日语)
  bun run i18n.ts ko docs zh            # 翻译docs目录到韩语 (中文->韩语)
  bun run i18n.ts zh -o docs            # 覆盖模式翻译docs目录到中文

注意:
- 脚本会自动排除已翻译的语言目录，避免重复翻译
- 默认源语言为英语(en)
- 源目录默认为 docs
- 默认不覆盖已存在的文件，使用 --overwrite 或 -o 选项启用覆盖模式
        `);
        process.exit(1);
    }
    
    // 解析参数
    let targetLanguage = '';
    let sourceDir = 'docs';
    let sourceLanguage = 'en';
    let overwrite = false;
    
    // 过滤出选项和非选项参数
    const options: string[] = [];
    const nonOptions: string[] = [];
    
    for (const arg of args) {
        if (arg.startsWith('-')) {
            options.push(arg);
        } else {
            nonOptions.push(arg);
        }
    }
    
    // 处理选项
    for (const option of options) {
        if (option === '--overwrite' || option === '-o') {
            overwrite = true;
        } else {
            console.error(`❌ 未知选项: ${option}`);
            process.exit(1);
        }
    }
    
    // 处理非选项参数
    if (nonOptions.length === 0) {
        console.error('❌ 缺少目标语言代码');
        process.exit(1);
    }
    
    targetLanguage = nonOptions[0];
    if (nonOptions.length > 1) {
        sourceDir = nonOptions[1];
    }
    if (nonOptions.length > 2) {
        sourceLanguage = nonOptions[2];
    }
    
    if (!SUPPORTED_LANGUAGES[targetLanguage as keyof typeof SUPPORTED_LANGUAGES]) {
        console.error(`❌ 不支持的目标语言代码: ${targetLanguage}`);
        console.log(`支持的语言: ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`);
        process.exit(1);
    }
    
    if (sourceLanguage !== 'en' && !SUPPORTED_LANGUAGES[sourceLanguage as keyof typeof SUPPORTED_LANGUAGES]) {
        console.error(`❌ 不支持的源语言代码: ${sourceLanguage}`);
        console.log(`支持的语言: en, ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`);
        process.exit(1);
    }
    
    if (!existsSync(sourceDir)) {
        console.error(`❌ 源目录不存在: ${sourceDir}`);
        process.exit(1);
    }
    
    try {
        await translateDocuments(sourceDir, targetLanguage, sourceLanguage, overwrite);
    } catch (error) {
        console.error('❌ 翻译过程中发生错误:', error);
        process.exit(1);
    }
}

// 如果直接运行此脚本则执行主函数
if (import.meta.main) {
    main().catch(console.error);
}

