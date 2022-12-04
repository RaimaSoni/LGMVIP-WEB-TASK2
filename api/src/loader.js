import React, {Fragment} from "react";
import loader from "./loader.gif";
const Loader = () => (
    <Fragment>
        <img
        src={loader}
        alt="Loading.."
        style={{width: "600px" , margin:"auto", 
        display: "grid" , padding:"10px"}}/>
    </Fragment>
);

export default Loader;