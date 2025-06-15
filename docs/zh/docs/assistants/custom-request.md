# 自定义请求

您可以自定义发送到 LLM 提供商的 HTTP 请求头和请求体。

## 自定义请求头

[HTTP 请求头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) 是在客户端和服务器之间传递的附加信息，用于描述请求或响应的内容、格式、状态等。

例如，`Authorization` 请求头用于验证请求，`Content-Type` 请求头用于指定请求体的内容类型。

您通常不需要自定义请求头，因为大多数 LLM 提供商只使用请求头进行身份验证，RikkaHub 已经为您处理了身份验证。但某些 LLM 提供商可能需要额外的请求头来启用一些实验性功能，例如 Anthropic。

自定义 HTTP 请求头包括两部分：**Key** 和 **Value**。Key 是请求头名称，Value 是具体的值。

## 自定义请求体

[HTTP 请求体](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages#request_body) 是发送到服务器的数据。

这是一个向 OpenAI API 发送请求的请求体示例：

```json
{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ],
  "temperature": 0.7
}
```

HTTP 请求体通常是一个 JSON 对象，它是一个 Key-Value 对的映射，并允许嵌套对象。

自定义 HTTP 请求体包括两部分：**Key** 和 **Value**。Key 是 JSON 对象的 Key，Value 是具体的值，它可以是字符串、数字、布尔值、数组或对象，或嵌套的 JSON 对象。

例如：

- Key: `model`, Value: `gpt-4o-mini`
- Key: `messages`, Value: `[{"role": "user", "content": "Hello, how are you?"}]`
- Key: `generationConfig`, Value: `{"thinkingConfig": {"thinkingBudget": 1024}}`

此外，同一个 Key 可以使用多次，如果路径不冲突，Value 将被**合并**。

例如：

- Key: `generationConfig`, Value: `{"thinkingConfig": {"thinkingBudget": 1024}}`
- Key: `generationConfig`, Value: `{"topP": 0.95}`

将被合并为：

```json
{
  "generationConfig": {
    "thinkingConfig": {"thinkingBudget": 1024},
    "topP": 0.95
  }
}
```