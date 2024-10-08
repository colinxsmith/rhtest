
import React from "react";

import "./styles.css";
import { Circles } from "./Circles";
import { SVGCircles } from "./SVGCircles";

export default function App() {
  const data = Array(19)
    .fill(0)
    .map((_v, i) => i);
  const [diameter] = React.useState(50);

  return (
    <div className="App">
      <SVGCircles data={data} diameter={diameter} />
      <Circles data={data} diameter={diameter} />
    </div>
  );
}
