import { NavLink } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <NavLink className="home__link" to={`/dashboard/${12}`}>User 12</NavLink>
      <NavLink className="home__link" to={`/dashboard/${18}`}>User 18</NavLink>
    </div>
  );
};

export default HomePage;
