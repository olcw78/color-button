import type { FC } from "react";
import type { Scoop } from "../../../../model/Scoop";

interface ScoopOptionsProps extends Scoop {
  //
}

const ScoopOptions: FC<ScoopOptionsProps> = ({ name, imagePath }) => (
  <img
    src={`http://localhost:3000/${imagePath}`}
    alt={`${name} scoop`}
    style={{ width: "100%", height: "100%" }}
  />
);

export default ScoopOptions;
