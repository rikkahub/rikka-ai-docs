# Basic Assistant Settings

## Assistant Name

Customize the name of the assistant.

## Chat Model

Choose the chat model for the assistant. If not set, the global default chat model will be used.

## Temperature

Set the temperature for the assistant.

Temperature is a parameter that controls the randomness of the Large Language Model (LLM) output.
Lower temperature values make the output more focused and deterministic, while higher values make it more creative and varied.

0.0 is the most deterministic, use 0.3~-0.7 for most cases.

::: tip
Some AI models require a specific recommended temperature to run, especially some reasoning models.

Please refer to the official instructions for that model for details.
:::

## Top P

Set the top-p sampling (nucleus sampling) for the assistant.

Top P is a parameter that controls the diversity of the LLM output by selecting from the smallest possible set of words whose cumulative probability exceeds P. 

Lower values (e.g. 0.5) make the output more focused, while higher values (e.g. 0.9) allow more diversity.

Usually you should keep it at `1.0`, or don't change it with temperature at the same time.

## Context Message Size

Control the maximum number of messages that will be sent to the LLM.
For example, if you set it to `10`, the LLM will only receive the last 10 messages.


## Thinking Budget

Control the maximum number of tokens that the LLM can use for reasoning.

* 0 means reasoning is disabled.
* blank means the model will decide the budget automatically.
* other numbers means the maximum number of tokens that the LLM can use for reasoning.

::: warning
The feature is only available for Google Gemini provider due to different providers have different thinking budget API design.

You can customize the thinking budget via `Custom Request` feature if you want to customize the thinking budget with other providers.
:::
