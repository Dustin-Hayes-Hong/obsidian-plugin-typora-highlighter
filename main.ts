import { Plugin } from "obsidian";

export default class TyporaHighlighterPlugin extends Plugin {
	async onload() {
		console.log("Loading Typora-like Code Highlighting Plugin");
	}

	onunload() {
		console.log("Unloading Typora-like Code Highlighting Plugin");
	}
}
