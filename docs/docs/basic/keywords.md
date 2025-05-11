# AI Common Terms Explained (Beginner-Friendly)

## Basic Concepts

### LLM (Large Language Model)
Large Language Models are AI systems trained on massive amounts of text data, capable of understanding and generating human language.

**Simple Explanation:** Imagine a super "language brain" that has read vast amounts of articles, books, and conversations from the internet. Because of this, it can understand what you say and provide reasonable responses. Common LLMs include the GPT series, Claude, Llama, Qwen, Gemini, DeepSeek, and many others.

**Everyday Example:** When you ask ChatGPT "How to make braised pork belly?", it can give you a complete recipe and steps based on the cooking knowledge it has learned.

### API (Application Programming Interface)
An Application Programming Interface is the bridge for communication between software systems. Through an LLM API, applications can send requests to the AI and get responses.

**Simple Explanation:** Think of an API as a waiter in a restaurant. It's responsible for taking your (application's) order (request) to the kitchen (AI server) and bringing the finished dish (AI response) back to you.

**Everyday Example:** When you use an AI function in a WeChat mini-program, the mini-program sends your question to a remote AI server via an API and then displays the returned result.

### API Key
An API Key is the unique identification and key to access AI services, used to verify the legitimacy of requests and record usage.

**Simple Explanation:** This is equivalent to your membership card number. The service provider knows who is using the service through it and charges accordingly.

**Everyday Example:** Just like using your gym membership card, every time you swipe to enter, the system records your usage. An API Key is similar; every time your application calls an AI service, it uses this key to verify identity.

### Token
In AI models, text is broken down into small units called "tokens" for processing.

**Simple Explanation:** Think of tokens as the "building blocks" of text. AI doesn't process text as whole sentences but breaks it down into smaller units. In English, a token is roughly 4 characters or 3/4 of a word; in Chinese, one character is usually one token.

**Everyday Examples:**
- The English sentence "I love artificial intelligence" might be divided into tokens like ["I", "love", "art", "ificial", "intel", "ligence"]
- The Chinese sentence "我爱人工智能" will be divided into tokens like ["我", "爱", "人", "工", "智", "能"]

### Prompt
A prompt is the input text sent to the AI that guides it to generate a specific response.

**Simple Explanation:** This is what you say to the AI. How it responds largely depends on how you ask. Just like asking a question to a person, a good question is more likely to get a good answer.

**Everyday Examples:**
- Vague prompt: "Tell me about history" (AI might not know which period of history to talk about)
- Specific prompt: "Please explain the main achievements of the Tang Dynasty in China in simple language to a 10-year-old" (AI can give a more targeted response)

Prompts are divided into:
- **System Prompt:** Equivalent to giving the AI a "role setting", such as "You are a patient elementary school teacher"
- **User Prompt:** The actual question or instruction sent by the user

### Context Window
The context window refers to the maximum amount of text the AI can process at once, including input and output.

**Simple Explanation:** Imagine the AI's "short-term memory" capacity. A larger context window means the AI can "remember" a longer conversation history and handle more complex problems.

**Everyday Example:** If the context window is 8K tokens (about 6000 English words), you can ask the AI to analyze a medium-length article; if it's 32K tokens, it can process a novel chapter or a long report.

## Advanced Concepts

### Temperature
Temperature controls the randomness and creativity of the AI's responses.

**Simple Explanation:** Think of it as the AI's "risk-taking index":
- **Low temperature (close to 0)**: The AI becomes rigorous and conservative, with more certain and repetitive responses.
- **High temperature (close to 1 or higher)**: The AI becomes more creative, generating diverse and sometimes unexpected responses.

**Everyday Examples:**
- Low temperature is suitable for: math problems, factual queries, code generation
- High temperature is suitable for: creative writing, story creation, brainstorming

### Top-p (Nucleus Sampling)
Controls the range of vocabulary the AI considers when generating text.

**Simple Explanation:** Imagine that when the AI is choosing the next word, it doesn't randomly pick from all possible words, but only from the most probable subset of words. The p-value determines the size of this "subset".

**Everyday Example:** If top-p is set to 0.9, when generating text, the AI will only consider word options whose probabilities add up to 90%, ignoring less likely words.

:::warning Note
top-p and temperature are two parameters that control the randomness of AI generation. Usually, only temperature is modified.
:::

### Embedding

Embedding is the process of converting text into numerical vectors that capture the meaning of the text.

**Simple Explanation:** Converting text into "digital coordinates" that the AI can understand. Words with similar meanings are located close to each other in this coordinate system.

**Everyday Example:** In this digital coordinate system, "happy" and "joyful" will be very close, while "happy" and "sad" will be far apart. This allows the AI to understand the semantic relationships of text.

### Fine-tuning

Fine-tuning is further training an AI model on a specific dataset to make it more suitable for a particular task or domain.

**Simple Explanation:** Equivalent to giving a general AI "specialized training". For example, a medical institution can fine-tune a general AI with medical data to make it better at answering medical questions.

**Everyday Example:** Imagine an English teacher (base model) who receives specialized training in chemistry (fine-tuning). Now, not only do they understand English, but they are also particularly good at explaining chemistry concepts in English.

### RAG (Retrieval Augmented Generation)

Before the AI generates a response, it first retrieves relevant information from a knowledge base to improve the accuracy of the answer.

**Simple Explanation:** Imagine the AI has a "reference bookshelf". Before answering a question, it consults relevant materials instead of just relying on "memory".

**Everyday Example:** When you ask "Who won the 2023 World Cup?", a standard AI might answer incorrectly (as its training data might be cut off before 2023), while an AI using RAG technology will first query the latest database and then provide the correct answer.

### Function Call

Allows the AI to output data in a structured format and trigger specific actions.

**Simple Explanation:** Lets the AI not only answer questions but also help you complete specific tasks, such as sending emails, checking the weather, or booking tickets.

**Everyday Example:** When you tell an AI assistant "Remind me of the meeting at 9 AM tomorrow", it doesn't just reply "Okay", but actually creates a calendar reminder.

### MCP (Model Context Protocol)

MCP is an open protocol that standardizes the way applications provide context to large language models. You can think of MCP as the USB-C interface for AI applications.
Just as USB-C provides a standardized way for devices to connect various peripherals and accessories, MCP provides a standardized way for AI models to connect different data sources and tools.

**Simple Explanation:** Imagine a large model is like a smart "brain" that can process various content types like text, images, audio, and video. MCP is like its limbs. The large model can achieve various capabilities through different MCPs, such as accessing map information, to better complete tasks.

## Usage Related

### Rate Limit

Limits on usage frequency imposed by API providers, usually expressed as "requests per minute" or "requests per day".

**Simple Explanation:** Similar to speed limits on a highway, it prevents a single user from occupying too many resources.

**Everyday Example:** An AI service might stipulate that free users can send a maximum of 5 requests per minute. If exceeded, they need to wait or upgrade to a paid plan.

### Billing

The method of charging for AI services, usually based on usage.

**Simple Explanation:** Similar to mobile plan billing, it might be charged based on usage (data traffic).

**Everyday Example:** OpenAI might charge based on the number of tokens processed, for example, $0.01 per thousand input tokens and $0.03 per thousand output tokens.

### Request

The data packet sent to the AI service, containing the question, parameters, and authentication information.

**Simple Explanation:** Equivalent to the "letter" you send to the AI, containing your question and some necessary information.

**Everyday Example:** When you type a question in ChatGPT, the backend constructs a request containing your question, conversation history, and API key, and sends it to the OpenAI server.

### Response

The data returned by the AI, containing the generated answer and metadata.

**Simple Explanation:** The AI's "reply" to your request, containing the answer and some technical information.

**Everyday Example:** After you ask ChatGPT a question, what it returns includes not only the answer you see but also backend information like the number of tokens used that you don't see.

### Streaming

Content generated by the AI is returned in real-time instead of waiting for all content to be generated before returning it at once.

**Simple Explanation:** Similar to video streaming, you can watch while waiting for subsequent content to load, without having to wait for the entire video to download.

**Everyday Example:** In ChatGPT, you will see the AI's response appear character by character, instead of waiting a long time and then suddenly seeing the complete response. This is the effect of streaming.

### Model

Refers to a specific version of an AI language model, such as GPT-4, Claude-3.5, DeepSeek-V3.1, etc.

**Simple Explanation:** Like different brands and models of cars, each AI model has its own characteristics and performance level.

You can visit [LMArena](https://lmarena.ai/) or [LiveBench](https://livebench.ai/) to view performance rankings of different models.

Although model performance is important, it is more important to choose the model that best suits your needs. Because different models have different architectures and parameter counts, their costs, output speed, model capabilities, and instruction following abilities are all different.

