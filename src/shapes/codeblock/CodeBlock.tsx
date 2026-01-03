import { Editor } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import { HTMLContainer, useEditor, useValue } from "tldraw";
import { type editor } from "monaco-editor";
import { TLCodeBlockShape } from "./TLCodeBlockShape";

export function CodeBlock({
  shape,
  bounds,
}: {
  shape: TLCodeBlockShape;
  bounds: { w: number; h: number };
}) {
  const editor = useEditor();
  const isEditing = useValue(
    "isEditing",
    () => editor.getEditingShapeId() === shape.id,
    [editor, shape.id]
  );

  const handleEditorDidMount = useAutoFocus(isEditing);

  return (
    <HTMLContainer
      style={{
        pointerEvents: isEditing ? "all" : "none",
        width: bounds.w,
        height: bounds.h,
      }}
    >
      <Editor
        theme="vs-dark"
        value={shape.props.code}
        language={shape.props.codeLanguage}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
        className="size-full"
        onMount={handleEditorDidMount}
      />
    </HTMLContainer>
  );
}

function useAutoFocus(isEditing: boolean) {
  const editorRef = useRef<editor.IStandaloneCodeEditor>(null);

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    if (isEditing) {
      editor.focus();
    }
  };

  useEffect(() => {
    if (isEditing && editorRef.current) {
      editorRef.current.focus();
    }
  }, [isEditing]);

  return handleEditorDidMount;
}
