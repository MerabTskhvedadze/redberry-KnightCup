import React from "react";
import { useLocation } from "react-router-dom";

import { LeftContent, Stepper, Title } from "../../components";
import { Inputs } from "./Inputs";

import classes from "./Information.module.css";
import informatinImg from "../../assets/images/personalInfoImg.png";

export function Information() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className={classes.mainDiv}>
      <LeftContent>
        <img className={classes.img1} src={informatinImg} alt="chess" />
        <p className={classes.firstParag}>
          “When you see a good move, look for a better one.”
        </p>
        <p className={classes.secondParag}>-Emanuel Lasker</p>
      </LeftContent>
      <div className={classes.rightDiv}>
        <Title>Start creating your account</Title>
        <Stepper currentPage={currentPage} succsess={false} />
        {/****** here should go input header and inputs ******/}
      </div>
    </div>
  );
}
