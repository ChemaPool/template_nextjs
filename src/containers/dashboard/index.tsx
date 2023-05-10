import { UseTranslationResponse, useTranslation } from "react-i18next";
import { IDashboardContainer } from "@/interfaces/dashboard";

const DashboardContainer = ({ useName }: IDashboardContainer) => {
  const { t }: UseTranslationResponse<"translation", undefined> = useTranslation();

  return <div>{t("dashboard.greeting", { name: useName })}</div>;
};

export default DashboardContainer;
