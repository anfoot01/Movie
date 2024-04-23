import { LogoIcon } from "../../icons/Logo/LogoIcon";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <LogoIcon />
      <nav className="sidebar__nav">
        <div className="sidebar__nav__link">
          <img src="/src/assets/icons/film.svg" alt="film" />
           Home</div>
        <div className="sidebar__nav__link">
          <img src="/src/assets/icons/heart.svg" alt="heart" />
          Favourites</div>
        <div className="sidebar__nav__link">
          <img src="/src/assets/icons/trending-up.svg" alt="trending" />
          Trending</div>
        <div className="sidebar__nav__link">
        <img src="/src/assets/icons/calendar.svg" alt="calendar" />
          Coming soon</div>
      </nav>
      <div className="sidebar__news">
        <div className="sidebar__nav__link">
          <img src="/src/assets/icons/users.svg" alt="" />
          Community</div>
        <div className="sidebar__nav__link">
        <img src="/src/assets/icons/message-circle.svg" alt="" />
          Social</div>
      </div>
      <div className="sidebar__settings">
        <div className="sidebar__nav__link">
        <img src="/src/assets/icons/sliders.svg" alt="" />
        Settings</div>
        <div className="sidebar__nav__link">
        <img src="/src/assets/icons/log-out.svg" alt="" />
          Logout</div>
      </div>
    </div>
  );
};
