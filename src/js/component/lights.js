import React from "react";

const Lights = ({
  index,
  lucesSemaforo,
  element,
  setLucesSemaforo,
  setOff,
}) => {
  return (
    <div
      className={`luzSemaforo ${
        lucesSemaforo === index ? `bg-${element}` : " "
      }`}
      onClick={() => {
        setOff(false);
        setLucesSemaforo(index);
      }}
    ></div>
  );
};

export default Lights;
