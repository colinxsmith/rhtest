import React from "react"
import * as d3 from "d3";
export const SVGCircles = ({ data, diameter }) => {
  React.useEffect(() => {
    setTimeout(() => {
      update();
    }, 0);
  });
  const update = () => {
    d3.select("svg#svg1").selectAll("circle")
    //.data(data) This just sets following d as data[i]
    .each((d, i) => {
      console.log(i);
      const pp = d3.select("svg#svg1").selectAll("circle").nodes()[i];
   //   d3.select(pp).select('title').text(`Title thing index: ${i}`)
      d3.select(pp).transition()
        .duration(1000)
        .attrTween('cy', (d) => t => diameter * t)
    });
  }
  const changer = (ii, orig, high = "black", back = 0) => {
    console.log("Index is " + ii);
    const pp = d3.select("svg#svg1").selectAll("circle").nodes()[ii];
    if (back === 1) d3.select(pp).attr("fill", high);
    else d3.select(pp).attr("fill", orig);
    console.log(d3.select(pp).attr("fill"));
  }
  const
    fill = (i) => i % 2 === 0 ? "cyan" : "lightgreen";
  const toDisc = (i) => (
    <circle key={i} r={i % 2 === 1 ? diameter / 2 : diameter / 3}
      cx={i * diameter} cy={diameter}
      fill={fill(i)}
      onPointerOver={() => changer(i, fill(i), "red", 1)}
      onPointerLeave={() => changer(i, fill(i))} >
        <title>{"Title thing index::"+i}</title>
      </circle>
  );
  return (
    <div title="circles demo with SVG">
      <h3>SVG Circles</h3>
      <svg id="svg1" width="100%" height="300">
        <g transform={`translate(${diameter / 2})`}>
          {data.map(toDisc)}
        </g>
      </svg>
    </div>
  );
};
