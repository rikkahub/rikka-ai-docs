# Prompt Settings

## System Prompt

Set the system prompt for the assistant. You can find a lot of system prompt guides
at internet.

## Message Template

Set up the template for how custom messages are sent to the LLM. By default, messages are sent to the LLM as is, but you can customize the template to insert special content that is not visible in the chat interface.

Template syntax is based on [Pebble](https://pebbletemplates.io/wiki/guide/basic-usage/).

**Default template:**

```jinja
{{ message }}
```

* `message` is a variable that will be replaced with the actual message content.

**Message with time example:**

```jinja
{{ message }}

{% if role == "user" %}
> Current time: {{ time }}
{% endif %}
```

* `time` is a variable that will be replaced with the current time.
* `role` is a variable that will be replaced with the role of the message.
* when `role` is `user`, the current time will be inserted into the message.