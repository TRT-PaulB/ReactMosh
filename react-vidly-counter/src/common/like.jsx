import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// convert likeClassVersion.jsx into a stateless functional component
// 1) create stateless functional component: sfc
// 2) copy and paste content FROM after "render() {" of and before "}"
//                           TO between "const Like = (props) => {"    and "}" (removing return statement)
// 3) remember to supply props as an argument ('this' keyword cannot be used)
const Like = props => {
  const { liked, movie, onLikeOpinion, onClick } = props;

  let iconVal = "heart";
  if (!liked) {
    iconVal += "-broken";
  }

  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={() => onLikeOpinion(movie)}
      icon={iconVal}
    />
  );
};

export default Like;
