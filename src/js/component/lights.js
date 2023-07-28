import React, { useEffect } from "react";

const Lights = ({
  index,
  lucesSemaforo,
  element,
  setLucesSemaforo,
  setOff,
  setRunnig,
  setIndiceSecuencia,
  off

  
}) => {

  
  
  return (
    <div
      className={`luzSemaforo ${
        lucesSemaforo === index ? `bg-${element}` : " "
      }`}
      onClick={() => {
        setRunnig(false);
        if(!off){
          setOff(false)
          setLucesSemaforo(index);
          setIndiceSecuencia(index)
        }
        
        
        
      }}
    ></div>
  );
};

export default Lights;
