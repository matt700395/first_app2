import React from "react";
import { useState } from "react";

function Clockstate4(props) {
    const [time, setTime] = useState("No Time");

    const handelClick = () => {

        setTime(new Date().toLocaleTimeString())
    };


    return (
        <div>
            <span> íėŽėę° : {time}</span>
            <button onClick={handelClick}>Update</button>
        </div>
    );
}

export default Clockstate4;

