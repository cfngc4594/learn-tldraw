import {
  DefaultStylePanel,
  DefaultStylePanelContent,
  useEditor,
  useRelevantStyles,
} from "tldraw";
import { CodeBlockLanguageStyle } from "./CodeBlockStyles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <Select
          value={language.type === "mixed" ? "" : language.value}
          onValueChange={(value) => {
            editor.markHistoryStoppingPoint();
            const validatedValue = CodeBlockLanguageStyle.validate(value);
            editor.setStyleForSelectedShapes(
              CodeBlockLanguageStyle,
              validatedValue
            );
          }}
        >
          <SelectTrigger className="ml-3 mb-2">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {language.type === "mixed" && (
              <SelectItem value="">Mixed</SelectItem>
            )}
            <SelectItem value="javascript">javascript</SelectItem>
            <SelectItem value="typescript">typescript</SelectItem>
            <SelectItem value="python">python</SelectItem>
          </SelectContent>
        </Select>
      )}
    </DefaultStylePanel>
  );
}
