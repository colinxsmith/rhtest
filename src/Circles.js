import React from "react";
import * as d3 from "d3";
export const Circles = ({ data, diameter }) => {
  const clicker = (ii, back = 0) => {
    console.log("Index is " + ii);
    const pp = d3.select("svg#svg").selectAll("circle").nodes()[ii];
    const orig = ii % 2 === 0 ? "cyan" : "lightgreen";
    if (back === 1) d3.select(pp).attr("fill", "red");
    else d3.select(pp).attr("fill", orig);
    console.log(d3.select(pp).attr("fill"));
  }
  const svg = React.useRef();
  React.useEffect(() => {
    d3.select(svg.current)
      .selectAll("circle")
      .data(data)
      .enter()
      .append("g")
      .on("mouseover", (k,i) => clicker(i,1))
      .on("mouseleave", (k,i) => clicker(i))
      .attr("transform", `translate(${diameter / 2})`)
      .append("circle")
      .attr("cx", (i) => i * diameter)
      .attr("cy", diameter)
      .attr("r", (i) => i % 2 === 0 ? diameter / 2 : diameter / 3)
      .attr("fill", (i) => i % 2 === 1 ? "cyan" : "lightgreen");
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