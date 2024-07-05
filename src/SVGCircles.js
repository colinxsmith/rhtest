import React from "react"
import * as d3 from "d3";
export const SVGCircles = ({ data, diameter }) => {
  const changer = (ii, back = 0) => {
    console.log("Index is " + ii);
    const pp = d3.select("svg#svg1").selectAll("circle").nodes()[ii];
    const orig = ii % 2 === 0 ? "cyan" : "lightgreen";
    if (back === 1) d3.select(pp).attr("fill", "red");
    else d3.select(pp).attr("fill", orig);
    console.log(d3.select(pp).attr("fill"));
  }
  const toDisc = (i) => (
    <circle ind={i} r={i % 2 === 1 ? diameter / 2 : diameter / 3}
      cx={i * diameter} cy={diameter}
      fill={i % 2 === 0 ? "cyan" : "lightgreen"}
      onPointerOver={() => changer(i, 1)}
      onPointerLeave={() => changer(i)} />
  );
  return (
    <div>
      <h3>SVG Circles</h3>
      <svg id="svg1" width="100%" height="300">
        <g transform={`translate(${diameter / 2})`}>
          {data.map(toDisc)}
        </g>
      </svg>
    </div>
  );
};
