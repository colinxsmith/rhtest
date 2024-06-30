
import React from "react";

import "./styles.css";
import { Circles } from "./Circles";
import { SVGCircles } from "./SVGCircles";

export default function App() {
  const data = Array(8)
    .fill(0)
    .map((_v, i) => i);
  const [diameter] = React.useState(50);

  return (
    <div className="App">
      <Circles data={data} diameter={diameter} fill="#F06E65" />
      <SVGCircles data={data} diameter={diameter} fill="#70332F" />
    </div>
  );
}