import React, {useState} from "react";
import Light from "./lights";

//create your first component
const Home = () => {
	const [lightUp, setLightUp] = useState (0);
	const lights = ["danger", "warning", "success"];

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
		</div>      
	);
     
			}

export default Home;


