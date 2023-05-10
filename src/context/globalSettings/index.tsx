import { Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";
import { useCookieState } from "ahooks";
import { COOKIE_LANG, LANGS } from "@/constants/common";

export type LanguageState = {
  langState: LANGS;
  setLangState: Dispatch<SetStateAction<LANGS>>;
};

const contextDefaultValues: LanguageState = {
  langState: LANGS.ES,
  setLangState: () => null,
};

export const GlobalSettings = createContext<LanguageState>(contextDefaultValues);

export const SettingsProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useCookieState(COOKIE_LANG);

  const [langState, setLangState] = useState((lang as LANGS) || contextDefaultValues.langState);

  useEffect(() => {
    setLang(langState);
  }, [langState, setLang]);

  return (
    <GlobalSettings.Provider
      value={{
        langState,
        setLangState,
      }}
    >
      {children}
    </GlobalSettings.Provider>
  );
};
