# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SurgeConfigs repository containing network proxy configuration files for Surge proxy software. The repository manages domain rules, proxy lists, and Surge modules for network traffic routing.

## Directory Structure

- **Rules/**: Domain-based routing rules (.list files)
  - `proxy.list`: Domains requiring proxy routing
  - `cn.list`: China mainland domains for direct connection
  - `Advertising.list`: Ad blocking rules
  - `us_only.list`, `jp_only.list`, `cn_media.list`: Region-specific rules
  - `apple.list`, `bilibili.list`, `NetEase.list`: Service-specific rules
  - `gfw.list`: GFW bypass rules
  - `reject.list`, `intercept.list`: Blocking rules

- **Proxies/**: Proxy server lists
  - `agentneo.list`: AgentNEO proxy configuration
  - `chaoxi.list`: Chaoxi proxy configuration

- **Modules/**: Surge modules (JavaScript)
  - `qcode.js`: Currently empty module file

## File Format Conventions

All `.list` files follow Surge rule format:
- `DOMAIN-SUFFIX,example.com`: Match domain and all subdomains
- `DOMAIN,exact.example.com`: Exact domain match
- `DOMAIN-KEYWORD,keyword`: Match domains containing keyword
- Comments use `#` at line start or `//` inline

## Common Operations

When editing rule files:
- Follow existing format patterns in each file
- Add comments for custom additions using `//` 
- Group related domains together
- Maintain alphabetical order within groups when possible

When working with git:
- Recent commits show updates to specific lists (us_only.list, openai-related domains)
- Branch: master (also main branch for PRs)

## Key Files to Understand

- `README.md`: Contains file list overview
- Each `.list` file has specific purpose for traffic routing
- Proxy lists contain server configurations
- Module files are JavaScript for advanced Surge functionality