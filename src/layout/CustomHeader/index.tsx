import { Layout, Avatar, Dropdown, Space, Modal } from "antd";
import { useSession } from "next-auth/react";
import { DownOutlined, ExclamationCircleFilled, UserOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useState } from "react";
import MenuItems from "src/layout/CustomHeader/menuItems";

const { Header } = Layout;
const { confirm } = Modal;

const showConfirmLogout = () => {
  confirm({
    title: "Cerrar Sesión",
    okText: "Si, salir",
    cancelText: "No, permanecer",
    icon: <ExclamationCircleFilled />,
    content: "Some descriptions",
    onOk() {
      signOut({ callbackUrl: "/api/logout-google" });
    },
  });
};

const CustomHeader = (): JSX.Element => {
  const { data } = useSession();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { data: dataProvider } = useQuery("session-providers", () =>
    axios.get("http://localhost:3000/api/session-providers")
  );

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
