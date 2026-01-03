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
