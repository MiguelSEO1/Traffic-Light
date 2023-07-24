import React from "react";

const Lights = ({ index, lucesSemaforo, element, setLucesSemaforo }) => {
  return (
    <div
      className={`luzSemaforo ${
        lucesSemaforo === index ? `bg-${element}` : " "
      }`}
      onClick={() => setLucesSemaforo(index)}
    ></div>
  );
};

export default Lights;
