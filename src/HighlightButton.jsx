import { useState } from "react";

export const HighlightButton = ({ employee }) => {
  const [isBorder, setIsBorder] = useState(false);
  var a = true;

  const handlerClick = () => {
    // if (a === true) {
    //   a = false;
    //   setIsBorder(true);
    // } else {
    //   a = true;
    //   setIsBorder(false);
    // }//false!== true ---true
    //true !===true false
    setIsBorder(isBorder !== true);
  };

  return (
    <>
      {employee.map(({ name, workExperience }) => (
        <li
          style={{
            border: workExperience > 5 && isBorder ? "1px solid black" : ""
          }}
        >
          {name}, {workExperience}
        </li>
      ))}
      <button onClick={handlerClick}> more than 5 years workExperience</button>
    </>
  );
};
