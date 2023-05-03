import { css } from "@emotion/react";
import SundaesOnDemand from "./page/sundaes-on-demand/SundaesOnDemand";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div css={root}>
      {/*<ColorButtons />*/}
      <SundaesOnDemand />
    </div>
  </QueryClientProvider>
);
export default App;

const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: teal;
`;
