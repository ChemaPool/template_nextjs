import { AlertFilled, AlertOutlined } from "@ant-design/icons";
import { MenuProps, Row } from "antd";
import { Dispatch, SetStateAction } from "react";
import { TFunction } from "i18next";
import { LANGS } from "@/constants/common";
import { LanguageState } from "@/context/globalSettings";

const MenuItems = ({
  isDarkMode,
  provider,
  onCloseSession,
  setIsDarkMode,
  setLangState,
  t,
}: {
  isDarkMode: boolean;
  provider: string;
  onCloseSession: () => void;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  setLangState: LanguageState["setLangState"];
  t: TFunction<"translation", undefined>;
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
        <span>{t("layout.theme")}</span>
        {isDarkMode ? <AlertFilled /> : <AlertOutlined />}
      </Row>
    ),
    disabled: true,
    onClick: () => setIsDarkMode((prevState) => !prevState),
  },
  {
    key: "2",
    label: t("layout.language"),
    children: [
      {
        key: "2-1",
        label: "ESP",
        onClick: () => setLangState(LANGS.ES),
      },
      {
        key: "2-2",
        label: "ENG",
        onClick: () => setLangState(LANGS.EN),
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: t("layout.logOut"),
    onClick: onCloseSession,
  },
];

export default MenuItems;
