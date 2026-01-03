import { StyleProp } from "tldraw";
import { T } from "@tldraw/validate";

/**
 * Style property for code block language selection.
 * Determines which programming language syntax highlighting to apply.
 */
export const CodeBlockLanguageStyle = StyleProp.defineEnum(
  "codeblock:language",
  {
    defaultValue: "javascript",
    values: ["javascript", "typescript", "python"] as const,
  }
);

/**
 * Type representing the code block language style options.
 */
export type TLCodeBlockLanguageStyle = T.TypeOf<typeof CodeBlockLanguageStyle>;

/**
 * Style property for code block theme selection.
 * Determines which color theme to apply to the code editor.
 */
export const CodeBlockThemeStyle = StyleProp.defineEnum("codeblock:theme", {
  defaultValue: "vitesse-dark",
  values: ["vitesse-light", "vitesse-dark"] as const,
});

/**
 * Type representing the code block theme style options.
 */
export type TLCodeBlockThemeStyle = T.TypeOf<typeof CodeBlockThemeStyle>;
