import { css } from "@emotion/react";
import SundaesOnDemand from "./feeature/sundaes-on-demand/SundaesOnDemand";

const App = () => (
  <div css={root}>
    {/*<ColorButtons />*/}
    <SundaesOnDemand />
  </div>
);
export default App;

const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1080px;
  background-color: teal;
  color: ivory;
`;
