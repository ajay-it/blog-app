import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../componets/DashSidebar";
import DashProfile from "../componets/DashProfile";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center sm:items-start">
      <div>
        <DashSidebar />
      </div>
      {tab === "profile" && <DashProfile />}
    </div>
  );
}
