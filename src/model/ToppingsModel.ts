import { OptionModel } from "./OptionModel";

export interface ToppingsModel extends OptionModel {
  name: Capitalize<"cherries" | "M&Ms" | "Hot fudge">;
}
