import { useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/router";
import type { NextRouter } from "next/router";
import { MenuInfo } from "rc-menu/lib/interface";
import MenuItems from "src/layout/SideBar/menuItems";

const { Sider } = Layout;

const Sidebar = (): JSX.Element => {
  const { pathname, push }: NextRouter = useRouter();
  const [current, setCurrent] = useState<string>(pathname.slice(1));

  const onClick: MenuProps["onClick"] = ({ key }: MenuInfo) => {
    setCurrent(key);
    push(`/${key}`);
  };

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        className="layout-menu"
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        items={MenuItems}
        selectedKeys={[current]}
        onClick={onClick}
      />
    </Sider>
  );
};

export default Sidebar;
