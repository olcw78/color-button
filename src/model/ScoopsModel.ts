import { OptionModel } from "./OptionModel";

export interface ScoopsModel extends OptionModel {
  name: Capitalize<"chocolate" | "vanilla">;
}
