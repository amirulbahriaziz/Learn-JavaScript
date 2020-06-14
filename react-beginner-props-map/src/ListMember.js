import React from "react";

import Member from "./Member";

import jsonData from "./JsonData";

function ListMember() {
  const members = jsonData.map((member) => {
    return (
      <Member
        name={member.name}
        age={member.age}
        secretIdentity={member.secretIdentity}
      />
    );
  });

  return (
    <div>
      {members}
      <hr />
    </div>
  );
}

export default ListMember;
