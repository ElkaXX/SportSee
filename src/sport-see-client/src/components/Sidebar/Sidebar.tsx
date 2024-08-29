import activityIcon from "../../assets/icon-activity.svg";
import barbellIcon from "../../assets/icon-barbell.svg";
import bikeIcon from "../../assets/icon-bike.svg";
import swimIcon from "../../assets/icon-swim.svg";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__navigation">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <img
              src={activityIcon}
              alt="activity icon"
              className="sidebar__icon"
            />
          </li>
          <li className="sidebar__item">
            <img className="sidebar__icon" src={swimIcon} alt="swim icon" />
          </li>
          <li className="sidebar__item">
            <img className="sidebar__icon" src={bikeIcon} alt="bike icon" />
          </li>
          <li className="sidebar__item">
            <img
              src={barbellIcon}
              alt="barbell icon"
              className="sidebar__icon"
            />
          </li>
        </ul>
      </nav>

      {<div className="sidebar__copy">Copiryght, SportSee 2020</div>}
    </aside>
  );
};

export default Sidebar;
