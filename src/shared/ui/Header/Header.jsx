import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header">
      <div className="header__nav">
        <div>Movies</div>
        <div>Series</div>
        <div>Documentaries</div>
      </div>
      <div className="header__user">
        <img
          className="search"
          src="/src/assets/icons/search.svg"
          alt="search"
        />
        <img className="bell" src="/src/assets/icons/bell.svg" alt="bell" />
        <img src="/src/assets/user/user-image.png" alt="user" />
        <p className="name">Tetiana</p>
      </div>
    </section>
  );
};
