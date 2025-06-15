# 提示设置

## 系统提示

设置助手的系统提示。你可以在互联网上找到很多系统提示指南。

## 消息模板

设置自定义消息发送到 LLM 的模板。默认情况下，消息按原样发送到 LLM，但你可以自定义模板以插入聊天界面中不可见的特殊内容。

模板语法基于 [Pebble](https://pebbletemplates.io/wiki/guide/basic-usage/)。

**默认模板：**

```jinja
{{ message }}
```

* `message` 是一个变量，将被实际的消息内容替换。

**带时间的消息示例：**

```jinja
{{ message }}

{% if role == "user" %}
> 当前时间：{{ time }}
{% endif %}
```

* `time` 是一个变量，将被当前时间替换。
* `role` 是一个变量，将被消息的角色替换。
* 当 `role` 是 `user` 时，当前时间将被插入到消息中。