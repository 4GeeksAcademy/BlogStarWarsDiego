//Made locally with VSC and copied to Repo by Diego Vega

import React from "react";
import PropTypes from "prop-types";

export const Title = ({text}) => {
return (

    <h1 className = "display-6" style={{color:"#1114a0"}}><strong>{text}</strong></h1>
)
};

Title.propTypes = {
    text: PropTypes.string,
};