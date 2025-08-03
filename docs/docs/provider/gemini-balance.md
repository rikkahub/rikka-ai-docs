# Gemini Balance

[Gemini Balance](https://github.com/snailyp/gemini-balance) is an application built with Python FastAPI, designed to provide proxy and load balancing functions for the Google Gemini API. It allows you to manage multiple Gemini API Keys and implement key rotation, authentication, model filtering, and status monitoring through simple configuration. Additionally, the project integrates image generation and multiple image hosting upload functions, and supports proxying in the OpenAI API format.

## Setup in RikkaHub

After deploying Gemini Balance, go to the RikkaHub AI provider page, create a new provider, select Gemini as the type, and fill in `http://your server host/v1beta` for the Base URL.

`/v1beta` is the Gemini native format endpoint.

