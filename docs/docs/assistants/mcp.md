# MCP

[MCP](https://modelcontextprotocol.io) is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

## Setup

RikkaHub supports connecting to **remote MCP server** (SSE and StreamableHttp).

You can find remote MCP servers at internet and copy the connection string.

And go to the MCP settings page, create a new MCP connection and input the MCP server name and connection string.

After that, RikkaHub will try to connect to the MCP server and get the available tools. You can toggle the tools that you want to use.

## Enable for Assistant

Each assistant can have its own MCP server list, you can toggle the MCP server for each assistant.

