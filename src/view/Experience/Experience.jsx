import { useState, useEffect } from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { InputsTitle, LeftContent, PageTitle, Stepper } from "../../components";
import { ErrorModal } from "./ErrorModal";
import classes from "./Experience.module.css";

import experienceImg from "../../assets/images/experienceMain.png";
import { Buttons } from "./Buttons";
import { Dropdown } from "./Dropdown";
import { useNavigate } from "react-router-dom";

export function Experience() {
  const [userExperience, setUserExperience] = useLocalStorage(
    "userExperience",
    {
      knowledgeLevel: "Level of knowledge *",
      character: "Choose your character *",
      havePractice: "",
    }
  );

  const [inputError, setInputError] = useState(null);

  const options = ["Beginner", "Intermediate", "Professional"];
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://chess-tournament-api.devtest.ge/api/grandmasters`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    getData();
  }, []);

  const userInformation = useReadLocalStorage("userInformation");
  const userExperienceData = useReadLocalStorage("userExperience");
  const userData = [
    { userInformation: userInformation },
    { userExperience: userExperienceData },
  ];
  const sendData = () => {
    fetch(
      "https://login-register-http-default-rtdb.firebaseio.com/register.json",
      {
        method: "POST",
        body: JSON.stringify({
          User: userData,
          Headers: {
            "Content-type": "aplication/json",
          },
        }),
      }
    );
  };

  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    if (userExperience.knowledgeLevel === "Level of knowledge *") {
      setInputError({
        header: "Invalid input",
        message: "do not leave inputs empty",
      });
    } else if (userExperience.character === "Choose your character *") {
      setInputError({
        header: "Invalid input",
        message: "do not leave inputs empty",
      });
    } else if (userExperience.havePractice === "") {
      setInputError({
        header: "Invalid input",
        message: "do not leave inputs empty",
      });
    } else {
      sendData();
      navigate("/completed");
    }
  };

  const formSucceed =
    userExperience.knowledgeLevel !== "Level of knowledge *" &&
    userExperience.character !== "Choose your character *" &&
    userExperience.havePractice !== "";

  const turnOffError = () => setInputError(null);

  return (
    <div className={classes.mainDiv}>
      <LeftContent imgScr={experienceImg}>
        <p className={classes.firstP}>
          “Many have become chess masters; <br /> no one has become the master
          of chess.”
        </p>
        <p className={classes.secondP}>- Siegbert Tarrasch</p>
      </LeftContent>
      <div className={classes.rightDiv}>
        <PageTitle>First step is done, continue to finish onboarding</PageTitle>
        <Stepper succsess={true} />
        {inputError && (
          <ErrorModal
            turnOffFunc={turnOffError}
            header={inputError.header}
            message={inputError.message}
          />
        )}
        <InputsTitle
          title={"Chess experience"}
          subTitle={"This is basic informaton fields"}
        />
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.dropdowns}>
            <Dropdown
              options={options}
              selected={userExperience.knowledgeLevel}
              setSelected={setUserExperience}
              prevState={userExperience}
            />
            <Dropdown
              mode={"remote"}
              error={error}
              remoteData={data && data}
              selected={userExperience.character}
              setSelected={setUserExperience}
              prevState={userExperience}
            />
          </div>
          <p className={classes.radioHeader}>
            Have you participated in the Redberry Championship? *
          </p>
          <div className={classes.radioBtn}>
            <div>
              <input
                type="radio"
                name="Championship"
                value="true"
                onChange={(e) =>
                  setUserExperience({
                    ...userExperience,
                    havePractice: e.target.value,
                  })
                }
                checked={userExperience.havePractice === "true"}
              />
              <label>Yes</label>
            </div>
            <div>
              <input
                type="radio"
                name="Championship"
                value="false"
                onChange={(e) =>
                  setUserExperience({
                    ...userExperience,
                    havePractice: e.target.value,
                  })
                }
                checked={userExperience.havePractice === "false"}
              />
              <label>No</label>
            </div>
          </div>
          <Buttons succsess={formSucceed} />
        </form>
      </div>
    </div>
  );
}
