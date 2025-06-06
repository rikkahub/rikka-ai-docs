# 人工智能常用术语解释（小白友好版）

## 基础概念

### LLM (大型语言模型)
大型语言模型是一种基于海量文本数据训练的人工智能系统，能够理解和生成人类语言。

**通俗解释：** 想象一个超级"语言大脑"，它读过互联网上的大量文章、书籍和对话，因此能够理解你说的话并给出合理回应。常见的LLM包括GPT系列、Claude、Llama、Qwen、Gemini、DeepSeek等等。

**日常例子：** 当你问ChatGPT"如何做红烧肉"，它能根据学习过的烹饪知识给你完整的菜谱和步骤。

### API (应用程序接口)
应用程序接口是软件系统之间沟通的桥梁。通过LLM API，应用可以向AI发送请求并获取回答。

**通俗解释：** 把API想象成餐厅里的服务员，它负责把你(应用程序)的点单(请求)传给厨房(AI服务器)，然后把做好的菜(AI回答)送回给你。

**日常例子：** 当你在微信小程序中使用AI功能时，小程序通过API把你的问题发给远程的AI服务器，然后显示返回的结果。

### API Key (API密钥)
API密钥是访问AI服务的唯一身份证和钥匙，用于验证请求的合法性和记录使用情况。

**通俗解释：** 相当于你的会员卡号码，服务提供商通过它知道是谁在使用服务，并据此计费。

**日常例子：** 就像你使用健身房会员卡一样，每次刷卡进入，系统都会记录你的使用情况。API Key也是如此，每次你的应用调用AI服务，都会用这个密钥验证身份。

### Token (令牌)
在AI模型中，文本被分解成称为"token"的小单位进行处理。

**通俗解释：** 把token想象成文本的"积木块"。AI不是按整句话处理文本，而是把文本拆分成更小的单位。在英文中，一个token大约是4个字符或3/4个单词；在中文中，一个汉字通常是一个token。

**日常例子：** 
- 英文句子"I love artificial intelligence"可能被分为["I", "love", "art", "ificial", "intel", "ligence"]这样的token
- 中文句子"我爱人工智能"会被分为["我", "爱", "人", "工", "智", "能"]这样的token

### Prompt (提示词)
提示词是发送给AI的输入文本，引导它生成特定的回答。

**通俗解释：** 相当于你对AI说的话，它如何回答很大程度上取决于你如何提问。就像问人问题一样，问得好就容易得到好答案。

**日常例子：**
- 模糊的提示词：「讲讲历史」(AI可能不知道讲哪段历史)
- 明确的提示词：「请用简单语言向10岁孩子解释中国唐朝的主要成就」(AI能给出更有针对性的回答)

提示词分为：
- **系统提示词**：相当于给AI的"角色设定"，例如"你是一位耐心的小学老师"
- **用户提示词**：就是用户实际发送的问题或指令

### Context Window (上下文窗口)
上下文窗口指AI一次能处理的最大文本量，包括输入和输出。

**通俗解释：** 想象AI的"短期记忆"容量。较大的上下文窗口意味着AI能"记住"更长的对话历史，处理更复杂的问题。

**日常例子：** 如果上下文窗口是8K tokens(约6000英文单词)，你可以让AI分析一篇中等长度的文章；如果是32K tokens，它可以处理一个小说章节或一份长报告。

## 高级概念

### Temperature (温度)
温度控制AI回答的随机性和创造性。

**通俗解释：** 把它想象成AI的"冒险指数"：
- **低温度(接近0)**: AI变得严谨保守，回答更确定、重复性高
- **高温度(接近1或更高)**: AI变得更有创意，产生多样化、有时出人意料的回答

**日常例子：**
- 低温度适合：数学问题、事实查询、代码生成
- 高温度适合：创意写作、故事创作、头脑风暴

### Top-p (核采样)
控制AI生成文本时考虑的词汇范围。

**通俗解释：** 想象AI在选择下一个词时，不是从所有可能的词中随机选择，而是只从最可能的那部分词中选择。p值决定了这个"部分"的大小。

**日常例子：** 如果top-p设为0.9，AI生成文本时只会考虑概率加起来达到90%的词汇选项，忽略那些不太可能的词。

:::warning 注意
top-p和temperature是两个控制AI生成随机性的参数，通常只修改temperature.
:::

### Embedding (嵌入)

嵌入是将文本转换为数字向量的过程，这些向量捕捉文本的含义。

**通俗解释：** 把文字转换成AI能理解的"数字坐标"，意思相近的词在这个坐标系中位置也相近。

**日常例子：** 在这个数字坐标系中，"高兴"和"开心"会非常接近，而"高兴"和"悲伤"会相距很远。这让AI能够理解文本的语义关系。

### Fine-tuning (微调)

微调是在特定数据集上进一步训练AI模型，使其更适合特定任务或领域。

**通俗解释：** 相当于给通用AI上"专业培训课"。比如，一个医疗机构可以用医学资料对通用AI进行微调，使其更擅长回答医学问题。

**日常例子：** 想象一个英语老师(基础模型)接受了专门的化学知识培训(微调)，现在不仅懂英语，还特别擅长用英语讲解化学知识。

### RAG (检索增强生成)

在AI生成回答前，先从知识库中检索相关信息，提高回答的准确性。

**通俗解释：** 想象AI有一个"参考书架"，回答问题前先查阅相关资料，而不仅仅依靠"记忆"。

**日常例子：** 当你问"2023年世界杯冠军是谁"，普通AI可能回答错误(因为训练数据可能截止于2022年)，而使用RAG技术的AI会先查询最新资料库，然后给出正确答案。

### Function Call (函数调用)

允许AI以结构化格式输出数据并触发特定操作。

**通俗解释：** 让AI不只是回答问题，还能帮你完成具体任务，比如发送邮件、查询天气或预订机票。

**日常例子：** 当你对AI助手说"提醒我明天上午9点开会"，它不只是回复"好的"，而是实际创建了一个日历提醒。

### MCP （Model Context Protocol）

MCP 是一个开放协议，用于标准化应用程序向大语言模型提供上下文的方式。可以将 MCP 想象成 AI 应用程序的 USB-C 接口。
就像 USB-C 为设备连接各种外设和配件提供了标准化方式一样，MCP 为 AI 模型连接不同的数据源和工具提供了标准化方式。

**通俗解释：** 想象一个大模型就像一个智能的"大脑"，它可以处理文本、图像、音频和视频等多种内容类型。而MCP就像它的四肢，大模型通过不同
的MCP可以实现各种不同的能力，例如访问地图信息，来更好的完成任务。

## 使用相关

### Rate Limit (速率限制)

API提供商对使用频率的限制，通常以"每分钟请求数"或"每天请求数"表示。

**通俗解释：** 相当于高速公路的限速规定，防止单个用户占用过多资源。

**日常例子：** 某AI服务可能规定免费用户每分钟最多发送5个请求，超过后需要等待或升级付费套餐。

### Billing (计费)

AI服务的收费方式，通常基于使用量。

**通俗解释：** 就像手机套餐的计费方式，可能按照使用量(流量)收费。

**日常例子：** OpenAI可能按处理的token数量收费，比如输入token每千个$0.01，输出token每千个$0.03。

### Request (请求)

向AI服务发送的数据包，包含问题、参数和认证信息。

**通俗解释：** 相当于你发给AI的"信件"，包含你的问题和一些必要信息。

**日常例子：** 当你在ChatGPT中输入问题时，后台会构建一个包含你问题、对话历史和API密钥的请求发送给OpenAI服务器。

### Response (响应)

AI返回的数据，包含生成的回答和元数据。

**通俗解释：** AI对你的请求作出的"回信"，包含答案和一些技术信息。

**日常例子：** 当你问ChatGPT一个问题后，它返回的不仅有你看到的回答，还有后台看不见的使用token数量等信息。

### Streaming (流式传输)

AI生成的内容实时返回，而不是等全部生成完再一次性返回。

**通俗解释：** 类似视频流媒体，你可以边看边等待后续内容加载，而不用等整个视频下载完。

**日常例子：** 在ChatGPT中，你会看到AI的回答是一个字一个字出现的，而不是等待很久突然显示完整回答，这就是流式传输的效果。

### Model (模型)

指特定版本的AI语言模型，如GPT-4、Claude-3.5、DeepSeek-V3.1等。

**通俗解释：** 就像不同品牌和型号的汽车，每种AI模型都有自己的特点和性能水平。

可以前往 [LMArena](https://lmarena.ai/) 或 [LiveBench](https://livebench.ai/) 查看不同模型的性能排行榜。

虽然模型性能很重要，但更重要的是选择最适合你需求的模型。因为不同模型有不同的架构和参数量，因此它们的成本，输出速度，模型能力，指令遵循能力都是不同的。

