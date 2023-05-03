import { ToppingsModel } from "../../../../model/ToppingsModel";
import { FC } from "react";

interface ToppingsOptionsProps extends ToppingsModel {
  //
}

const ToppingsOptions: FC<ToppingsOptionsProps> = ({ name, imagePath }) => (
  <img src={imagePath} alt={`${name} topping`} />
);
export default ToppingsOptions;
