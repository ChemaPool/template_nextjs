import { ConfigProvider, FloatButton } from "antd";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "react-query";
import NextNProgress from "nextjs-progressbar";
import { Locale } from "antd/es/locale";
import { useEffect, useState, useContext } from "react";
import esES from "antd/locale/es_ES";
import enUS from "antd/locale/en_US";
import { queryClient } from "@/utils/QueryClient";
import GlobalLayout from "@/layout";
import "../styles/scss/main.scss";
import "../lang/i18n";
import { AppPropsWithLayout } from "types/nextCustomPage";
import { LANGS } from "@/constants/common";
import { GlobalSettings, SettingsProvider } from "@/context/globalSettings";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { langState } = useContext(GlobalSettings);
  const [language, setLanguage] = useState<Locale>();

  useEffect(() => {
    const selectedLanguage = langState === LANGS.ES ? esES : enUS;
    setLanguage(selectedLanguage);
  }, [langState]);

  return (
    <SessionProvider session={pageProps?.session}>
      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <ConfigProvider locale={language}>
            <NextNProgress />
            {Component.getLayout ? (
              Component.getLayout(<Component {...pageProps} />)
            ) : (
              <GlobalLayout Component={Component} {...pageProps} />
            )}
            <FloatButton.BackTop />
          </ConfigProvider>
        </SettingsProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default App;
