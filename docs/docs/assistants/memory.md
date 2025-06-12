# Memory Settings

Memory allows LLMs to actively record important information from conversations, especially user preferences, enabling LLMs to better understand users. Memory is long-term, meaning that even after the conversation ends, the memory still exists, and you can view and edit it.

## Enable Memory

Just enable the memory feature, and chat with the assistant. The LLM will
automatically record the important information from conversations.

::: tip
Make sure the model you are using supports `Function Calling` feature, and you have 
turned on the `Tools` ability in the Providers settings.
:::

## Modify Memory

Besides LLM actively updating its memory, you can also manually edit the memory. For example, you can add a new memory: "The user prefers to communicate in a cute tone," so that the LLM will know your preferences.

## How it works?

It's based on `Function Calling` and `System Prompt`, make sure the model you are using supports these features.

Some reasoning models may not support customize the system prompt, so it can't work with memory.