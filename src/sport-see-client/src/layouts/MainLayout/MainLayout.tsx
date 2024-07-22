import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./MainLayout.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />

      <div className="main-layout__content">
        <Sidebar />
        <main className="main-layout__page">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
