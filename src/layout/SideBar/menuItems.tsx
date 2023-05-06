import type { MenuProps } from "antd";
import { DashboardOutlined, GlobalOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";

const MenuItems: MenuProps["items"] = [
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: "Tablero",
    // onClick: () => console.log("key 1"),
    // children: new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  },
  {
    key: "users",
    icon: <UserOutlined />,
    label: "Usuarios",

    children: [
      {
        key: "add-user",
        label: "Agregar",
      },
    ],
    // new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  },
  {
    key: "task-list",
    icon: <ProfileOutlined />,
    label: "Lista de tareas",

    // children: [
    //   {
    //     key: "add-user",
    //     label: "Agregar",
    //   },
    // ],
    // new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  },
  {
    key: "pokeapi",
    icon: <GlobalOutlined />,
    label: "PokeApi",

    // children: [
    //   {
    //     key: "add-user",
    //     label: "Agregar",
    //   },
    // ],
    // new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
  },
];

export default MenuItems;
