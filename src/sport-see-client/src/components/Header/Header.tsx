import classnames from "classnames";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import routes from "../../routes";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo image" className="header__logo" />

      <nav className="header__navigation">
        <ul className="header__list">
          {routes
            .filter((route) => route.label)
            .map((route) => (
              <li key={route.path} className="header__item">
                <NavLink
                  className={({ isActive }) =>
                    classnames({
                      header__link: true,
                      header__link_active: isActive,
                    })
                  }
                  to={route.path}
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
