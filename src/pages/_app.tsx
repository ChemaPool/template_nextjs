import { ConfigProvider, FloatButton } from "antd";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "react-query";
import NextNProgress from "nextjs-progressbar";
import { queryClient } from "@/utils/QueryClient";
import GlobalLayout from "@/layout";
import "../styles/scss/main.scss";
import { AppPropsWithLayout } from "types/nextCustomPage";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <SessionProvider session={pageProps?.session}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider>
          <NextNProgress />
          {Component.getLayout ? (
            Component.getLayout(<Component {...pageProps} />)
          ) : (
            <GlobalLayout Component={Component} {...pageProps} />
          )}
          <FloatButton.BackTop />
        </ConfigProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default App;
