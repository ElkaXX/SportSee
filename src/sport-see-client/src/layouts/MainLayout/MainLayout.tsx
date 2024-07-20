import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__page">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
