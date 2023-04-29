import ColorButtons from "./feeature/color-buttons/ColorButtons";
import { css } from "@emotion/react";

const App = () => {
  return (
    <div css={root}>
      <ColorButtons />
    </div>
  );
};
export default App;

const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1080px;
`;
