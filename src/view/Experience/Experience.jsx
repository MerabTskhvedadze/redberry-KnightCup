import { useState } from "react";
import { InputsTitle, LeftContent, PageTitle, Stepper } from "../../components";

import classes from "./Experience.module.css";

import experienceImg from "../../assets/images/experienceMain.png";
import { Buttons } from "./Buttons";
import { Dropdown } from "./Dropdown";

export function Experience() {
  const [selected, setSelected] = useState("Level of knowledge *");
  const [selectedRmt, setSelectedRmt] = useState('Choose person *')

  const options = ["Beginner", "Intermediate", "Professional"];

  return (
    <div className={classes.mainDiv}>
      <LeftContent imgScr={experienceImg}>
        <p>
          “Many have become chess masters; no one has become the master of
          chess.”
        </p>
        <p>- Siegbert Tarrasch</p>
      </LeftContent>
      <div className={classes.rightDiv}>
        <PageTitle>First step is done, continue to finish onboarding</PageTitle>
        <Stepper succsess={true} />
        <InputsTitle
          title={"Chess experience"}
          subTitle={"This is basic informaton fields"}
        />
        <div className={classes.form}>
          <div className={classes.dropdowns}>
            <Dropdown options={options} selected={selected} setSelected={setSelected} />
            <Dropdown mode={'remote'} options={options} selected={selectedRmt} setSelected={setSelectedRmt}/>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
