"use client";

import { className } from "@/components/styles/layout";
import Sidebar from "@/components/sidebar";
import TopNav from "@/components/topNav";
import List from "./components/list";

const Dashboard = () => {
  return (
    <div className={className.mainWrapper}>
      <Sidebar />
      <main>
        <TopNav title="users" path={[{ label: "users", link: "/admin" }]} />
        <List />
      </main>
    </div>
  );
};

export default Dashboard;
