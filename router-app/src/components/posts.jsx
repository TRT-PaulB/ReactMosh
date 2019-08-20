import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  // destructuring from props.match

  const result = queryString.parse(location.search);
  console.log("result", result);

  // could destructure immediately
  // const { sortBy } = queryString.parse(location.search);

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;

// location - contains the query string data
