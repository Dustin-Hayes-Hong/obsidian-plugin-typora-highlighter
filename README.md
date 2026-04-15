# Obsidian Typora Highlighter

A clean, aesthetic code highlighting plugin for Obsidian that mimics Typora's "Github" theme styling.

## Features
- Light grey background (`#f6f8fa`) and subtle border for code blocks.
- Customized syntax highlighting colors for both Live Preview and Reading Mode.
- Aesthetic padding and typography adjustments for a premium feel.

## Installation Methods

Since this plugin is currently in manual distribution, follow these steps to install it on your device:

### 1. Build the Plugin (If you have the source)
If you are using the source code, run the following commands in the project directory:
```bash
npm install
npm run build
```
This will generate `main.js`.

### 2. Manual Installation (Windows, Linux, macOS)

1.  **Locate your Obsidian Vault**: Open your vault folder.
2.  **Find the Plugins directory**: Navigate to `.obsidian/plugins/`.
    - *Note: On Windows/macOS, `.obsidian` might be hidden. Enable "Show hidden files" in your file explorer.*
3.  **Create a subfolder**: Create a new folder named `obsidian-typora-highlighter`.
4.  **Copy the necessary files**: Move the following 3 files into that folder:
    - `main.js`
    - `manifest.json`
    - `styles.css`
5.  **Enable the plugin**:
    - Open Obsidian.
    - Go to **Settings** > **Community Plugins**.
    - Click the "Refresh" button.
    - Find **Typora Highlighter** and toggle it **On**.

#### Platform Specific Path Examples:
- **Windows**: `C:\Users\YourName\Documents\YourVault\.obsidian\plugins\`
- **Linux**: `/home/YourName/Documents/YourVault/.obsidian/plugins/`
- **macOS**: `/Users/YourName/Documents/YourVault/.obsidian/plugins/`

## Development
To modify the styles, edit `styles.css` and rebuild using `npm run build`.

## License
MIT
