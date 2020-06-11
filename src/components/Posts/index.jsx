import React from "react";

const Posts = (props) => {
  return <div>{props.match.params.key}</div>;
};

export default Posts;
