import { StateNode, TLShape } from "tldraw";
import { Idle } from "./children/Idle";
import { Pointing } from "./children/Pointing";

export abstract class BaseBlockShapeTool extends StateNode {
  static override id = "block";
  static override initial = "idle";
  static override children = () => [Idle, Pointing];

  abstract override shapeType: string;

  onCreate?: (_shape: TLShape | null) => void | null;
}
