import React from "react";

function Heading(props) {
  console.log(props);
  // const message = "Hello World";
  return <h1>{props.text}</h1>;
}

export default Heading;
// export default Heading;
