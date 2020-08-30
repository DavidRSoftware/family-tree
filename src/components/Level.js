import React from "react";
import Member from "./Member";
import Row from "react-bootstrap/Row";

const Level = ({
  memberList,
  memberCount,
  levelCount,
  updateMemberList,
  updateMemberCount,
  updateLevelCount,
}) => {
  const getLevels = () => {
    return memberList.map((level, index) => {
      return <Row key={index}>{getMembers(level)}</Row>;
    });
  };
  const getMembers = (level) => {
    return level.map((member, index) => {
      return (
        <Member
          name={member.name}
          id={member.id}
          onClick={addMember}
          key={index}
        ></Member>
      );
    });
  };

  const addMember = (type, id) => {
    // console.log(memberCount);
    let tempList;
    if (memberCount + 1 === Math.pow(2, levelCount)) {
      tempList = [[{ id: memberCount, name: type }], ...memberList];
      updateLevelCount(levelCount + 1);
    }
else{
    tempList = [...memberList];
    tempList[0].push({ id: memberCount, name: type });
}
    updateMemberList(tempList);
    updateMemberCount(memberCount + 1);
    // console.log(tempList);
  };

  return <>{getLevels()}</>;
};

export default Level;
