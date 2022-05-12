import React, { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="meals image" />
      </div>
    </Fragment>
  );
};

export default Header;
