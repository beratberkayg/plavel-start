import React, { useState } from "react";
import Card from "@/components/ui/Card";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Card title={t("Starter Kit")}>{t("Welcome to Dashcode")}</Card>
    </div>
  );
};

export default Dashboard;
