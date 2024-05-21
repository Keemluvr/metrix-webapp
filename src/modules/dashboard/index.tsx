"use client";

import Sidebar from "@/components/sidebar";
import TopNav from "@/components/topNav";
import List from "./components/list";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[80px_1fr]">
      <Sidebar />
      <main>
        <TopNav title="users" path={[{ label: "users", link: "/admin" }]} />
        <List />
      </main>
    </div>
  );
};

export default Dashboard;
