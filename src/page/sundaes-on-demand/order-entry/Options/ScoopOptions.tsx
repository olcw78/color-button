import type { FC } from "react";
import type { ScoopsModel } from "../../../../model/ScoopsModel";

interface ScoopOptionsProps extends ScoopsModel {
  //
}

const ScoopOptions: FC<ScoopOptionsProps> = ({ name, imagePath }) => (
  <img src={imagePath} alt={`${name} scoop`} />
);

export default ScoopOptions;
