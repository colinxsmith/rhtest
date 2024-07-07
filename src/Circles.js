import React from "react";
import * as d3 from "d3";
export const Circles = ({ data, diameter }) => {
  const clicker = (ii, fill, high = "black", back = 0) => {
    console.log("Index is " + ii);
    const pp = d3.select("svg#svg").selectAll("circle").nodes()[ii];
    if (back === 1) d3.select(pp).attr("fill", high);
    else d3.select(pp).attr("fill", fill);
    console.log(d3.select(pp).attr("fill"));
  }
  const fill = (i) => i % 2 === 1 ? "cyan" : "lightgreen";
  const svg = React.useRef();
  React.useEffect(() => {
    d3.select(svg.current)
      .selectAll("circle")
      .data(data)
      .enter()
      .append("g")
      .on("pointerover", (k, i) => clicker(i, fill(i), "red", 1))
      .on("pointerleave", (k, i) => clicker(i, fill(i)))
      .attr("transform", `translate(${diameter / 2})`)
      .append("circle")
      .attr("cx", (i) => i * diameter)
      //  .attr("cy", diameter)
      .attr("r", (i) => i % 2 === 0 ? diameter / 2 : diameter / 3)
      .attr("fill", (i) => fill(i))
      .transition()
      .duration(1000)
      .attrTween('cy', (i) => t => diameter * t);
  });
  return (
    <div>
      <h3>D3 Circles</h3>
      <svg
        ref={svg}
        id="svg"
        width="100%"
        height="300"
      ></svg>
    </div>
  );
};