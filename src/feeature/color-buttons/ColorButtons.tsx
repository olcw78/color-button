import { css } from "@emotion/react";
import { useState } from "react";
import ColorButton from "./component/ColorButton";

const ColorButtons = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleButton = () => setIsClicked((prev) => !prev);

  return (
    <div css={root}>
      <ColorButton
        type="button"
        onClick={toggleButton}
        isClicked={isClicked}
        disabled={isChecked}
      >
        <span>
          {isClicked
            ? "Change to medium violet red"
            : "Change to midnight blue"}
        </span>
      </ColorButton>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
};
export default ColorButtons;

const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1080px;
`;
