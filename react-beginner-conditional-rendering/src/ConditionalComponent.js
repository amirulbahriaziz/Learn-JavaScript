import React, { Component } from "react";

function ConditionalComponent(props) {
  if (props.isLoading === true) {
    return <div>Loading Boh</div>;
  } else {
    return <div>Okay Dah Siap Load</div>;
  }
}

export default ConditionalComponent;
