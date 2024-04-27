import { Link } from "react-router-dom"
import { LogoIcon } from "../../icons/Logo/LogoIcon"
import React, { useState } from 'react'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <LogoIcon />
      <nav className="sidebar__nav">
        <div className="link">
       
          <img src="/src/assets/icons/film.svg" alt="film" />
          <Link className="text-dec-none" to='/home'>
           Home
           </Link></div>
           
        <div className="link">
          <img src="/src/assets/icons/heart-white.svg" alt="heart" />
          <Link className="text-dec-none" to='/favourites'>
          Favourites
           </Link>
           
          </div>
        <div className="link">
          <img src="/src/assets/icons/trending-up.svg" alt="trending" />
          <Link className="text-dec-none" to='/trending'>
          Trending
           </Link>
           </div>
        <div className="link">
        <img src="/src/assets/icons/calendar.svg" alt="calendar" />
          Coming soon</div>
      </nav>
      <nav className="sidebar__news">
        <div className="link">
          <img src="/src/assets/icons/users.svg" alt="" />
          Community</div>
        <div className="link">
        <img src="/src/assets/icons/message-circle.svg" alt="" />
          Social</div>
      </nav>
      <nav className="sidebar__settings">
        <div className="link">
        <img src="/src/assets/icons/sliders.svg" alt="" />
        Settings</div>
        <div className="link">
        <img src="/src/assets/icons/log-out.svg" alt="" />
          Logout</div>
      </nav>
    </div>
  );
};
