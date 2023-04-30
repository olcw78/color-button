import { createContext, FC, PropsWithChildren, useContext } from "react";

interface ContextState {}

const context = createContext<ContextState | null>(null);

const useSundaesOnDemandCtx = () => {
  const ctx = useContext(context);

  if (!ctx)
    throw new Error("useSundaesOnDemandCtx must be used within a Sundaes");

  return ctx;
};

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = {};
  return <context.Provider value={value}>{children}</context.Provider>;
};

export { ContextProvider, useSundaesOnDemandCtx };
