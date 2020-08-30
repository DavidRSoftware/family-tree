import React, { useState } from "react";
import Level from "./Level";
import Container from "react-bootstrap/Container";

const Tree = () => {
  const memberArray = [
    [
      {
        id: 0,
        name: "Me",
      },
    ],
  ];
  const [memberList, updateMemberList] = useState(memberArray);
  const [memberCount, updateMemberCount] = useState(1);
  const [levelCount, updateLevelCount] = useState(1);
  return (
    <Container>
      <Level
        memberList={memberList}
        memberCount={memberCount}
        levelCount={levelCount}
        updateMemberList={updateMemberList}
        updateMemberCount={updateMemberCount}
        updateLevelCount={updateLevelCount}
      ></Level>
    </Container>
  );
};

export default Tree;
