# Custom Request

You can customize the HTTP request headers and body to send to the LLM provider.

## Custom Headers

[HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) is additional information passed between the client and the server, used to describe the content, format, status, etc. of the request or response.

For example, the `Authorization` header is used to authenticate the request, the `Content-Type` header is used to specify the content type of the request body.

You usually don't need to customize the headers, because most LLM providers only use headers for authentication, RikkaHub already handles the authentication for you. But some LLM providers may require additional headers to enable some experimental features, such as Anthropic.

Custom http header includes two parts: **Key** and **Value**. Key is the header name and value is the specific value.

## Custom Body

[HTTP Body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages#request_body) is the data sent to the server.

This is an example body of a request to the OpenAI API:

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

The http body is usually a JSON object, it's a map of key-value pairs and allows nested objects.

Custom http body includes two parts: **Key** and **Value**. Key is the key of the JSON object and value is the specific value, it can be a string, number, boolean, array, or object, or a nested JSON object.

For example:

- key: `model`, value: `gpt-4o-mini`
- key: `messages`, value: `[{"role": "user", "content": "Hello, how are you?"}]`
- key: `generationConfig`, value: `{"thinkingConfig": {"thinkingBudget": 1024}}`

Also, the same key can be used multiple times, and the value will be **merged** if the path is not conflict.

For example:

- key: `generationConfig`, value: `{"thinkingConfig": {"thinkingBudget": 1024}}`
- key: `generationConfig`, value: `{"topP": 0.95}`

Will be merged to:

```json
{
  "generationConfig": {
    "thinkingConfig": {"thinkingBudget": 1024},
    "topP": 0.95
  }
}
```