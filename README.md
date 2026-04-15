# Obsidian Typora Highlighter

[English](#english) | [简体中文](#chinese)

<a name="english"></a>
## English

A clean, aesthetic code highlighting plugin for Obsidian that mimics Typora's "Github" theme styling.

### Features
- Light grey background (`#f6f8fa`) and subtle border for code blocks.
- Customized syntax highlighting colors for both Live Preview and Reading Mode.
- Aesthetic padding and typography adjustments for a premium feel.

### Installation Methods

Since this plugin is currently in manual distribution, follow these steps to install it on your device:

#### 1. Build the Plugin (If you have the source)
If you are using the source code, run the following commands in the project directory:
```bash
npm install
npm run build
```
This will generate `main.js`.

#### 2. Manual Installation (Windows, Linux, macOS)

1.  **Locate your Obsidian Vault**: Open your vault folder.
2.  **Find the Plugins directory**: Navigate to `.obsidian/plugins/`.
3.  **Create a subfolder**: Create a new folder named `obsidian-typora-highlighter`.
4.  **Copy the necessary files**: Move the following 3 files into that folder:
    - `main.js`
    - `manifest.json`
    - `styles.css`
5.  **Enable the plugin**: Settings > Community Plugins > Refresh > Toggle on.

---

<a name="chinese"></a>
## 简体中文

这也是一个专为 Obsidian 设计的简洁、美观的代码高亮插件，完美还原了 Typora 的 "Github" 主题风格。

### 功能特性
- **经典配色**：浅灰色背景 (`#f6f8fa`) 配以细腻的边框，极致还原 Typora 质感。
- **全模式适配**：同时支持 实时预览 (Live Preview) 和 阅读模式 (Reading Mode)。
- **审美打磨**：对代码块的内边距、字体等细节进行了深度优化。

### 安装方式

目前该插件支持手动安装，请根据您的操作系统参考以下步骤：

#### 1. 构建插件（如果您拥有源码）
在项目目录下执行以下命令：
```bash
npm install
npm run build
```
这将生成 `main.js` 文件。

#### 2. 手动安装 (Windows, Linux, macOS)

1.  **找到 Obsidian 库**：在文件管理器中打开您的 Obsidian 库文件夹。
2.  **进入插件目录**：进入 `.obsidian/plugins/` 文件夹。
3.  **新建文件夹**：新建一个名为 `obsidian-typora-highlighter` 的子文件夹。
4.  **复制文件**：将以下 3 个文件放入该文件夹：
    - `main.js`
    - `manifest.json`
    - `styles.css`
5.  **启用插件**：
    - 打开 Obsidian。
    - 进入 **设置** > **第三方插件**。
    - 点击“刷新”按钮。
    - 找到 **Typora Highlighter** 并开启开关。

## Development / 开发
To modify the styles, edit `styles.css` and rebuild using `npm run build`.
修改样式请编辑 `styles.css` 后运行 `npm run build`。

## License / 许可
MIT
