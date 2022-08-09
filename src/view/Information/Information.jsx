import React from "react";

import {
  LeftContent,
  Stepper,
  PageTitle,
  InputsTitle,
  Input,
} from "../../components";

import classes from "./Information.module.css";
import informatinImg from "../../assets/images/personalInfoImg.png";

export function Information() {
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
        <PageTitle>Start creating your account</PageTitle>
        <Stepper succsess={false} />
        <InputsTitle
          title={"Personal information"}
          subTitle={"This is basic informaton fields"}
        />
        <div className={classes.inputs}>
          <Input placeholder='Name *' />
          <Input placeholder='Email address *' />
          <Input placeholder='Phone number *' />
          <Input placeholder='Date of birth *' />
        </div>
      </div>
    </div>
  );
}
