import React from "react";

function Member(props) {
  return (
    <div>
      <h1>Member's Name : {props.name}</h1>
      <h3>Member's Age : {props.age}</h3>
      <h5>Member's Secret Identity : {props.secretIdentity}</h5>
    </div>
  );
}

export default Member;
