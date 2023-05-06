import { AlertFilled, AlertOutlined } from "@ant-design/icons";
import { MenuProps, Row } from "antd";
import { Dispatch, SetStateAction } from "react";

const MenuItems = ({
  isDarkMode,
  provider,
  onCloseSession,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  provider: string;
  onCloseSession: () => void;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}): MenuProps["items"] => [
  {
    key: "0",
    label: `Accediste con: ${provider}`,
    disabled: true,
  },
  {
    key: "1",
    label: (
      <Row justify="space-between">
        <span>Tema</span>
        {isDarkMode ? <AlertFilled /> : <AlertOutlined />}
      </Row>
    ),
    onClick: () => setIsDarkMode((prevState) => !prevState),
  },
  {
    key: "2",
    label: "Idioma",
    children: [
      {
        key: "2-1",
        label: "ESP",
      },
      {
        key: "2-2",
        label: "ENG",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: "Cerrar sesión",
    onClick: onCloseSession,
  },
];

export default MenuItems;
