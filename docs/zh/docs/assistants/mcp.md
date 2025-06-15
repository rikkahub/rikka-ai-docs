# MCP

[MCP](https://modelcontextprotocol.io) 是一个开放协议，它规范了应用程序如何向 LLM 提供上下文。可以将 MCP 想象成 AI 应用程序的 USB-C 端口。正如 USB-C 提供了一种标准化的方式来连接您的设备到各种外设和配件，MCP 提供了一种标准化的方式来连接 AI 模型到不同的数据源和工具。

## 设置

RikkaHub 支持连接到**远程 MCP 服务器**（SSE 和 StreamableHttp）。

您可以在互联网上找到远程 MCP 服务器并复制连接字符串。

然后进入 MCP 设置页面，创建一个新的 MCP 连接并输入 MCP 服务器名称和连接字符串。

之后，RikkaHub 将尝试连接到 MCP 服务器并获取可用的工具。您可以切换您想要使用的工具。

## 为助手启用

每个助手都可以有自己的 MCP 服务器列表，您可以为每个助手切换 MCP 服务器。
