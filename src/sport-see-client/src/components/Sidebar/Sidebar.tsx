// src/components/Sidebar.tsx
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <a href="#activity"><i className="icon-activity"></i></a>
        <a href="#swim"><i className="icon-swim"></i></a>
        <a href="#bike"><i className="icon-bike"></i></a>
        <a href="#run"><i className="icon-barbell"></i></a>
      </nav>
    </aside>
  );
};

export default Sidebar;
