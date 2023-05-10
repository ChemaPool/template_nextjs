import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LoginEs, LoginEn } from "@lang/login";
import { DashboardEs, DashboardEn } from "@lang/dashboard";
import { LayoutEs, LayoutEn } from "@lang/layout";

const resources = {
  es: {
    translation: {
      ...LoginEs,
      ...LayoutEs,
      ...DashboardEs,
    },
  },
  en: {
    translation: {
      ...LoginEn,
      ...LayoutEn,
      ...DashboardEn,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  supportLngs: ["es", "en"],
  interpolation: {
    escapeValue: false,
  },
});
