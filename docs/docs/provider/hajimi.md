# hajimi

hajimi is a Gemini API proxy built on FastAPI, designed to provide a simple, secure, and configurable way to access Google's Gemini models. It is suitable for deployment on Hugging Face Spaces and supports integration with OpenAI API format tools.

Project address: 
[https://github.com/wyeeeee/hajimi](https://github.com/wyeeeee/hajimi)

## Configuration in RikkaHub

Go to the provider management page, click the "+" button in the upper right corner to create a new AI provider.

- Select `Gemini` as the provider type
- Enter your API Key in the API Key field
- Enter your API address as the Base URL, ending with `/gemini/v1beta`, for example, `https://example.com/gemini/v1beta`

Click save to complete the provider creation.