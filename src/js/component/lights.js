import React from "react";

const Lights = ({
  index,
  lucesSemaforo,
  element,
  setLucesSemaforo,
  setOff,
  setRunnig
}) => {
  return (
    <div
      className={`luzSemaforo ${
        lucesSemaforo === index ? `bg-${element}` : " "
      }`}
      onClick={() => {
        setRunnig(false);
        setOff(false);
        setLucesSemaforo(index);
      }}
    ></div>
  );
};

export default Lights;
