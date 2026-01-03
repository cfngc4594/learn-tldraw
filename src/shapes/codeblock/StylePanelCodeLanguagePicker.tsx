import {
  DefaultStylePanel,
  DefaultStylePanelContent,
  useEditor,
  useRelevantStyles,
} from "tldraw";
import { CodeBlockLanguageStyle } from "./CodeBlockStyles";

/**
 * Style panel component for selecting code block language.
 * Displays a dropdown with JavaScript, TypeScript, and Python options.
 */
export function StylePanelCodeLanguagePicker() {
  const editor = useEditor();
  const styles = useRelevantStyles();
  if (!styles) return null;

  const language = styles.get(CodeBlockLanguageStyle);

  return (
    <DefaultStylePanel>
      <DefaultStylePanelContent />
      {language !== undefined && (
        <div>
          <select
            style={{ width: "100%", padding: 4 }}
            value={language.type === "mixed" ? "" : language.value}
            onChange={(e) => {
              editor.markHistoryStoppingPoint();
              const value = CodeBlockLanguageStyle.validate(
                e.currentTarget.value
              );
              editor.setStyleForSelectedShapes(CodeBlockLanguageStyle, value);
            }}
          >
            {language.type === "mixed" ? <option value="">Mixed</option> : null}
            <option value="javascript">javascript</option>
            <option value="typescript">typescript</option>
            <option value="python">python</option>
          </select>
        </div>
      )}
    </DefaultStylePanel>
  );
}
