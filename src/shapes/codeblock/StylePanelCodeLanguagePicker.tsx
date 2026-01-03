import {
  DefaultStylePanel,
  DefaultStylePanelContent,
  useEditor,
  useRelevantStyles,
} from "tldraw";
import { CodeBlockLanguageStyle, CodeBlockThemeStyle } from "./CodeBlockStyles";
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
  const theme = styles.get(CodeBlockThemeStyle);

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
          <SelectTrigger className="ml-3 mb-2 w-[124px]">
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
      {theme !== undefined && (
        <Select
          value={theme.type === "mixed" ? "" : theme.value}
          onValueChange={(value) => {
            editor.markHistoryStoppingPoint();
            const validatedValue = CodeBlockThemeStyle.validate(value);
            editor.setStyleForSelectedShapes(CodeBlockThemeStyle, validatedValue);
          }}
        >
          <SelectTrigger className="ml-3 mb-2 w-[124px]">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            {theme.type === "mixed" && <SelectItem value="">Mixed</SelectItem>}
            <SelectItem value="vitesse-light">vitesse-light</SelectItem>
            <SelectItem value="vitesse-dark">vitesse-dark</SelectItem>
          </SelectContent>
        </Select>
      )}
    </DefaultStylePanel>
  );
}
