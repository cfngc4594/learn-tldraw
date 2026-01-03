import { RecordProps, T, TLBaseShape } from "tldraw";
import { CodeBlockLanguageStyle } from "./CodeBlockStyles";

export type TLCodeBlockShapeProps = {
  w: number;
  h: number;
  codeLanguage: T.TypeOf<typeof CodeBlockLanguageStyle>;
  code: string;
};

export type TLCodeBlockShape = TLBaseShape<"codeblock", TLCodeBlockShapeProps>;

export const CodeBlockShapeProps: RecordProps<TLCodeBlockShape> = {
  w: T.number,
  h: T.number,
  codeLanguage: CodeBlockLanguageStyle,
  code: T.string,
};
