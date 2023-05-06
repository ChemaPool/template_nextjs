import { Layout } from "antd";
import { AppProps } from "next/app";
import { useIsFetching, useIsMutating } from "react-query";
// import useCookie from "@/hooks/useCookie";
import CustomHeader from "src/layout/CustomHeader";
import Sidebar from "src/layout/SideBar";
import Spinner from "src/layout/Spinner";

const { Content } = Layout;

const GlobalLayout = ({ Component, pageProps }: AppProps): JSX.Element => {
  const isFetching = useIsFetching() > 0;
  const isMutating = useIsMutating() > 0;
  // const [cookie, updateCookie] = useCookie("key1", "value");
  // console.log(cookie);

  return (
    <Layout className="layout-container">
      <Spinner visible={isFetching || isMutating} />
      <CustomHeader />
      <Layout>
        <Sidebar />
        <Layout className="layout-wrapper">
          <Content className="layout-content">
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GlobalLayout;
