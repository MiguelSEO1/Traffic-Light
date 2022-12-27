import React, {useState} from "react";


//create your first component
const Light = ({light, index, color, click}) => {
	
    return (

		<div className={`light alert ${light == index ? "bg" : "alert"}-${color}`} onClick={() => {click(index)}}/>
		
	);
};

export default Light;