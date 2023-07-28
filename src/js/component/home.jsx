import React, { useState, useEffect } from "react";
import Lights from "./lights";

//include images into your bundle
import carretera from "../../img/carretera.jpg";

//create your first component
const Home = () => {
  const [lucesSemaforo, setLucesSemaforo] = useState("");
  const [coloresSemaforo, setColoresSemaforo] = useState([
    "danger",
    "warning",
    "success",
  ]);
  const [addLuz, setAddLuz] = useState(false);
  const [running, setRunning] = useState(false);
  const [off, setOff] = useState(true);
  const [indiceSecuencia, setIndiceSecuencia] = useState(0);

  const withBackground = {
    backgroundImage: `URL(${carretera})`,
  };

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setLucesSemaforo(indiceSecuencia);
        setIndiceSecuencia((index) => (index + 1) % coloresSemaforo.length);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [running, lucesSemaforo, indiceSecuencia]);

  return (
    <section className="withBackground " style={withBackground}>
      <div>
        <div className="paloSemaforo"></div>
        <div className="cajaSemaforo">
          {coloresSemaforo.map((e, i) => {
            return (
              <Lights
                index={i}
                key={i}
                lucesSemaforo={lucesSemaforo}
                element={e}
                setLucesSemaforo={setLucesSemaforo}
                setOff={setOff}
                indiceSecuencia={indiceSecuencia}
              />
            );
          })}
        </div>
        <div className=" panel row d-flex align-items-center text-center g-2 py-2 ">
          <div className=" col-sm-6">
            <button
              className="btn btn-warning btn-block"
              onClick={() => {
                setOff(false);
                setRunning(false);
                setLucesSemaforo(indiceSecuencia);
                setIndiceSecuencia(
                  (index) => (index + 1) % coloresSemaforo.length
                );
              }}
            >
              Cambiar
            </button>
          </div>
          <div className=" col-sm-6">
            <button
              className={
                running
                  ? "btn btn-success btn-block"
                  : "btn btn-danger btn-block"
              }
              onClick={() => {
                setRunning(!running);
                setOff(false);
              }}
            >
              {running ? "STOP" : "Automatic"}
            </button>
          </div>
          <div className=" col-sm-6">
            <button
              className={
                off ? "btn btn-danger btn-block" : "btn btn-primary btn-block"
              }
              onClick={() => {
                setOff(!off);
                setRunning(false);
                if (!off) {
                  // Si se está apagando el semáforo, almacenar el último color antes de apagarlo
                  setIndiceSecuencia(lucesSemaforo);
                  setLucesSemaforo(null); // Apagar el semáforo
                } else {
                  // Si se está encendiendo el semáforo, poner el último color almacenado
                  setLucesSemaforo(indiceSecuencia);
                }
              }}
            >
              {`${off ? " ON" : "OFF"}`}
            </button>
          </div>
          <div className=" col-sm-6">
            <button
              className={`${
                addLuz ? `btn btn-warning btn-block` : `btn btn-info btn-block`
              }`}
              onClick={() => {
                if (coloresSemaforo.includes("info")) {
                  // Si el color "info" está presente, lo eliminamos
                  setColoresSemaforo(
                    coloresSemaforo.filter((color) => color !== "info")
                  );
                  setAddLuz(false);
                } else {
                  // Si el color "info" no está presente, lo añadimos
                  setColoresSemaforo([...coloresSemaforo, "info"]);
                  setAddLuz(true);
                }
              }}
            >
              {`${addLuz ? `Eliminar ` : `Añadir `} `}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

