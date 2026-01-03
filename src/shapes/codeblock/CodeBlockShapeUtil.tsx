import { BaseBoxShapeUtil, Geometry2d, Rectangle2d } from "tldraw";
import { CodeBlockShapeProps, TLCodeBlockShape } from "./TLCodeBlockShape";
import { CodeBlock } from "./CodeBlock";
import { CodeBlockLanguageStyle } from "./CodeBlockStyles";

export class CodeBlockShapeUtil extends BaseBoxShapeUtil<TLCodeBlockShape> {
  static override type = "codeblock" as const;
  static override props = CodeBlockShapeProps;

  canEdit = () => true;
  canScroll = () => true;
  hideRotateHandle = () => true;
  onRotate = (shape: TLCodeBlockShape) => shape;

  getDefaultProps(): TLCodeBlockShape["props"] {
    return {
      w: 512 + 32,
      h: 512 + 32,
      codeLanguage: CodeBlockLanguageStyle.defaultValue,
      code: "",
    };
  }

  getGeometry(shape: TLCodeBlockShape): Geometry2d {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  component(shape: TLCodeBlockShape) {
    return (
      <CodeBlock
        shape={shape}
        bounds={this.editor.getShapeGeometry(shape).bounds}
      />
    );
  }

  indicator(shape: TLCodeBlockShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }
}
