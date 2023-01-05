import React, {useState} from "react";
import Light from "./lights";

//create your first component
const Home = () => {
	const [lightUp, setLightUp] = useState (0);
	const [running, setRunning] = useState(false);
	const lights = ["danger", "warning", "success"];

	const startLights = (index) => {
		if (running === false ) {
		setLightUp(index);
		setTimeout(() => {
		const nextIndex = (index + 1) % lights.length;
		startLights(nextIndex);
		}, 1000);
		}
		}
		
		useEffect(() => {
			let timeoutId = null;
			
			const startLights = (index) => {
			setLightUp(index);
			if (running) {
			const nextIndex = (index + 1) % lights.length;
			timeoutId = setTimeout(() => startLights(nextIndex), 100);
			}
			}
			
			if (running) {
			startLights(0);
			} else {
			clearTimeout(timeoutId);
			}
			
			return () => clearTimeout(timeoutId);
			}, [running]);

			

	return (
		<div className="text-center">
		      <div className="trafficlight">
                  {lights.map((x, i) =>{
		              return <Light key={i} index={i} light={lightUp} color={x} click={setLightUp}/>
	              })}
              </div>
		      <button className="btn btn-primary m-3" onClick={() => {
				lightUp == 2 ? setLightUp(0) : setLightUp(lightUp +1)
			  }}>Traffic Lights</button>
			  <button className={`btn ${running ? "bg-danger" : "bg-success"} m-3` } onClick={() => setRunning(!running)}>{running ? "Stop" : "Start"}
              </button>
		</div>      
	);
     
			}

export default Home;


