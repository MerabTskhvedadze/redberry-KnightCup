import React from "react";
import validator from "validator";
import { useLocalStorage } from "usehooks-ts";

import {
  LeftContent,
  Stepper,
  PageTitle,
  InputsTitle,
  Input,
} from "../../components";
import { Buttons } from "./Buttons";

import classes from "./Information.module.css";
import informatinImg from "../../assets/images/personalInfoImg.png";
import { DateInput } from "./DateInput";

export function Information() {
  const [userInputs, setUserInputs] = useLocalStorage("userInformation", {
    userName: "",
    email: "",
    phoneNum: "",
    dateInput: "",
  });

  const nameIsValid = userInputs.userName.length >= 3;
  const emailIsValid =
    validator.isEmail(userInputs.email) &&
    userInputs.email.includes("@redberry.ge");
  const phoneNumIsValid =
    validator.isNumeric(userInputs.phoneNum) && (userInputs.phoneNum).length === 9;
  const dateInputIsValid = userInputs.dateInput.trim() !== '';

  const nameHandler = (e) =>
    setUserInputs({ ...userInputs, userName: e.target.value });
  const emailHandler = (e) =>
    setUserInputs({ ...userInputs, email: e.target.value });
  const phoneNumHandler = (e) =>
    setUserInputs({ ...userInputs, phoneNum: e.target.value });
  const dateHandler = (e) => setUserInputs({ ...userInputs, dateInput: e });

  return (
    <div className={classes.mainDiv}>
      <LeftContent imgScr={informatinImg}>
        <p className={classes.firstParag}>
          “When you see a good move, look for a better one.”
        </p>
        <p className={classes.secondParag}>-Emanuel Lasker</p>
      </LeftContent>
      <div className={classes.rightDiv}>
        <PageTitle>Start creating your account</PageTitle>
        <Stepper succsess={true} />
        <InputsTitle
          title={"Personal information"}
          subTitle={"This is basic informaton fields"}
        />
        <div className={classes.inputs}>
          <Input
            type="text"
            placeholder="Name *"
            value={userInputs.userName}
            onChange={nameHandler}
            succsess={true}
            inputIsValid={false}
          />
          <Input
            type="text"
            placeholder="Email address *"
            value={userInputs.email}
            onChange={emailHandler}
            succsess={true}
            inputIsValid={false}
          />
          <Input
            type="number"
            placeholder="Phone number *"
            value={userInputs.phoneNum}
            onChange={phoneNumHandler}
            succsess={true}
            inputIsValid={false}
          />
          <DateInput
            placeholderText="Date of birth"
            selected={Date.parse(userInputs.dateInput)}
            onChange={dateHandler}
            succsess={true}
            inputIsValid={false}
          />
        </div>
        <Buttons succsess={false} />
      </div>
    </div>
  );
}
