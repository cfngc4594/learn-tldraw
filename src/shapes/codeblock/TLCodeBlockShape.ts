import { RecordProps, T, TLBaseShape } from "tldraw";

export type TLCodeBlockShapeProps = {
  w: number;
  h: number;
  codeLanguage: string;
  code: string;
};

export type TLCodeBlockShape = TLBaseShape<"codeblock", TLCodeBlockShapeProps>;

export const CodeBlockShapeProps: RecordProps<TLCodeBlockShape> = {
  w: T.number,
  h: T.number,
  codeLanguage: T.string,
  code: T.string,
};
