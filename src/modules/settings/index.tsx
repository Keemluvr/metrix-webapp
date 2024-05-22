"use client";

import Sidebar from "@/components/sidebar";
import TopNav from "@/components/topNav";
import Account from "./components/account";
import Security from "./components/security";
import { Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { className as classNameLayout } from "@/components/styles/layout";

const Settings = () => {
  const t = useTranslations("Settings");

  return (
    <div className={classNameLayout.mainWrapper}>
      <Sidebar />
      <main>
        <TopNav title="settings" path={[{ label: "settings", link: "/settings" }]} />

        <div className="bg-white m-5 rounded-lg px-12 py-5">
          <Tabs key="settings" variant="underlined" color="primary" aria-label="Tabs">
            <Tab key="account" title={t("account")}>
              <Account />
            </Tab>
            <Tab key="security" title={t("security")}>
              <Security />
            </Tab>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Settings;
