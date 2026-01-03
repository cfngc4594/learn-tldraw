import { RecordProps, T, TLBaseShape } from "tldraw";
import {
  CodeBlockLanguageStyle,
  CodeBlockThemeStyle,
} from "./CodeBlockStyles";

export type TLCodeBlockShapeProps = {
  w: number;
  h: number;
  codeLanguage: T.TypeOf<typeof CodeBlockLanguageStyle>;
  codeTheme: T.TypeOf<typeof CodeBlockThemeStyle>;
  code: string;
};

export type TLCodeBlockShape = TLBaseShape<"codeblock", TLCodeBlockShapeProps>;

export const CodeBlockShapeProps: RecordProps<TLCodeBlockShape> = {
  w: T.number,
  h: T.number,
  codeLanguage: CodeBlockLanguageStyle,
  codeTheme: CodeBlockThemeStyle,
  code: T.string,
};
