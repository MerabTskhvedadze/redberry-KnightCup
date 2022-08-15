import React, { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import validator from "validator";

import {
  LeftContent,
  Stepper,
  PageTitle,
  InputsTitle,
  Input,
} from "../../components";
import { Buttons } from "./Buttons";
import { DateInput } from "./DateInput";
import { ErrorModal } from "./ErrorModal";

import classes from "./Information.module.css";
import informatinImg from "../../assets/images/personalInfoImg.png";

export function Information() {
  const [error, setError] = useState(false);

  const [userInputs, setUserInputs] = useLocalStorage("userInformation", {
    userName: "",
    email: "",
    phoneNum: "",
    dateInput: "",
  });

  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [numIsTouched, setPhoneIsTouched] = useState(false);
  const [dateInputIsTouched, setDateInputIsTouched] = useState(false);

  const nameBlur = () => setNameIsTouched(true);
  const emailBlur = () => setEmailIsTouched(true);
  const numBlur = () => setPhoneIsTouched(true);
  const dateInputBlur = () => setDateInputIsTouched(true);

  const nameIsValid = userInputs.userName.length >= 3;
  const emailIsValid =
    validator.isEmail(userInputs.email) &&
    userInputs.email.includes("@redberry.ge");
  const numIsValid =
    validator.isNumeric(userInputs.phoneNum) &&
    userInputs.phoneNum.length === 9;

  let dateInputIsValid = false;
  if (userInputs.dateInput === null || userInputs.dateInput === "") {
    dateInputIsValid = false;
  } else {
    dateInputIsValid = true;
  }

  const nameHasError = !nameIsValid && nameIsTouched;
  const emailHasError = !emailIsValid && emailIsTouched;
  const numHasError = !numIsValid && numIsTouched;
  const dateInputHasError = !dateInputIsValid && dateInputIsTouched;

  const nameHandler = (e) =>
    setUserInputs({ ...userInputs, userName: e.target.value });
  const emailHandler = (e) =>
    setUserInputs({ ...userInputs, email: e.target.value });
  const phoneNumHandler = (e) =>
    setUserInputs({ ...userInputs, phoneNum: e.target.value });
  const dateHandler = (e) => setUserInputs({ ...userInputs, dateInput: e });

  const formSucceed =
    nameIsValid && emailIsValid && numIsValid && dateInputIsValid;

  const checkValidation = () => {
    if (!nameIsValid) {
      setError({
        header: "Invalid name",
        message: "Please enter valid name",
      });
    } else if (!emailIsValid) {
      setError({
        header: "Invalid email",
        message: "Please enter valid email address",
      });
    } else if (!numIsValid) {
      setError({
        header: "Invalid number",
        message: "Please enter valid phone number",
      });
    } else if (!dateInputIsValid) {
      setError({
        header: "Invalid date",
        message: "Please enter valid date of birth",
      });
    }
  };

  const turnOffError = () => setError(null);

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
        <Stepper succsess={formSucceed} />
        {error && (
          <ErrorModal
            turnOffFunc={turnOffError}
            header={error.header}
            message={error.message}
          />
        )}
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
            onBlur={nameBlur}
            inputIsValid={!nameHasError}
            succsess={nameIsValid}
          />
          <Input
            type="text"
            placeholder="Email address *"
            value={userInputs.email}
            onChange={emailHandler}
            onBlur={emailBlur}
            inputIsValid={!emailHasError}
            succsess={emailIsValid}
          />
          <Input
            type="number"
            placeholder="Phone number *"
            value={userInputs.phoneNum}
            onChange={phoneNumHandler}
            onBlur={numBlur}
            inputIsValid={!numHasError}
            succsess={numIsValid}
          />
          <DateInput
            placeholderText="Date of birth *"
            selected={Date.parse(userInputs.dateInput)}
            onChange={dateHandler}
            onBlur={dateInputBlur}
            inputIsValid={!dateInputHasError}
            succsess={dateInputIsValid}
          />
        </div>
        <Buttons onValidCheck={checkValidation} succsess={formSucceed} />
      </div>
    </div>
  );
}
