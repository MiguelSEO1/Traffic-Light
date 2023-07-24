import React, { useState, useEffect } from "react";
import Lights from "./lights";

//include images into your bundle
import carretera from "../../img/carretera.jpg";

//create your first component
const Home = () => {
  const [lucesSemaforo, setLucesSemaforo] = useState(0);
  const [coloresSemaforo, setColoresSemaforo] = useState([
    "danger",
    "warning",
    "success",
  ]);
  const [addLuz, setAddLuz] = useState(false);
  const [running, setRunning] = useState(false);
  const withBackground = {
    backgroundImage: `URL(${carretera})`,
  };

  const automatico = () => {
    setLucesSemaforo((index) => (index + 1) % coloresSemaforo.length);
  };

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(automatico, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [running]);

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
              />
            );
          })}
        </div>
        <div className="row d-flex align-items-center text-center row ">
          <div className="col">
            <button
              className="btn btn-warning "
              onClick={() => {
                setLucesSemaforo((lucesSemaforo + 1) % coloresSemaforo.length);
              }}
            >
              Cambiar
            </button>
          </div>
          <div className="col">
            <button
              className={running ? "btn btn-secondary " : "btn btn-danger "}
              onClick={() => {
                setRunning(!running);
              }}
            >
              {running ? "STOP" : "Automatic"}
            </button>
          </div>
          <div className="col">
            <button
              className={`${addLuz ? `btn btn-success ` : `btn btn-info  `}`}
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

