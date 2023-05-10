import { Layout, Avatar, Dropdown, Space, Modal } from "antd";
import { useSession } from "next-auth/react";
import { DownOutlined, ExclamationCircleFilled, UserOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MenuItems from "src/layout/CustomHeader/menuItems";
import { GlobalSettings } from "@/context/globalSettings";

const { Header } = Layout;
const { confirm } = Modal;

const showConfirmLogout = () => {
  confirm({
    title: "Cerrar Sesión",
    okText: "Si, salir",
    cancelText: "No, permanecer",
    icon: <ExclamationCircleFilled />,
    // content: "Some descriptions",
    onOk() {
      signOut();
      // signOut({ callbackUrl: "/api/logout-google" });
    },
  });
};

const CustomHeader = (): JSX.Element => {
  const { data } = useSession();
  const { i18n, t } = useTranslation();
  const { langState, setLangState } = useContext(GlobalSettings);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { data: dataProvider } = useQuery("session-providers", () =>
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/session-providers`)
  );

  useEffect(() => {
    i18n.changeLanguage(langState);
  }, [i18n, langState]);

  return (
    <>
      <Header className="header-container">
        <div className="logo" />
        <div className="header-actions">
          <Dropdown
            menu={{
              items: MenuItems({
                isDarkMode,
                provider: dataProvider?.data?.[`${data?.provider}`]?.name,
                onCloseSession: showConfirmLogout,
                setIsDarkMode,
                setLangState,
                t,
              }),
            }}
            trigger={["click"]}
          >
            <a onClick={(event) => event.preventDefault()}>
              <Space>
                <Avatar shape="circle" src={data?.user?.image ?? <UserOutlined />} />
                <div className="header-actions-user-menu">
                  <div className="header-actions-user-menu-name title-h4">{data?.user?.name}</div>
                </div>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default CustomHeader;
