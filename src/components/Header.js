import React from "react";
import "./Header.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          ></img>
        </a>
      </div>
      <div className="header--menu">Início</div>
      <div className="header--menu">Séries</div>
      <div className="header--menu">Filmes</div>
      <div className="header--menu">Bombando</div>
      <div className="header--menu">Minha Lista</div>
      <SearchIcon className="search--icon" />
      <div className="infantil">Infantil</div>
      <div className="header--user">
        <NotificationsIcon
          className="notification--icon"
          style={{ fontSize: 28 }}
        />
        <a href="/">
          <img
            src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
            alt="usuario"
          ></img>
        </a>
        <ArrowDropDownIcon className="arrow" />
      </div>
    </header>
  );
};
