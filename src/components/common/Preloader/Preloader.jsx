import Loader from "../../../assets/images/Loader.svg";
import React from "react";

const Preloader = () => {
    return(
        <div>
            <img alt={"Loading.."} src={Loader}/>
        </div>
    )
}

export default Preloader