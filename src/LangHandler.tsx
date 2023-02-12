import React, { createContext, useContext, useMemo } from "react";

interface ILangContext {
  isHu: boolean;
}

const LangContext = createContext<ILangContext | null>(null);

export const useLang = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("Lang provider not used");
  }

  return context;
};

export const LangProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const isHu = useMemo(() => {
    return window.location.host.split(".")[0] === "hu";
  }, []);

  return (
    <LangContext.Provider value={{ isHu }}>{children}</LangContext.Provider>
  );
};
