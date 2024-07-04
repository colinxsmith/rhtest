import React from "react"
import * as d3 from "d3";
export const SVGCircles = ({ data, diameter, fill ,clicker}) => {
    const changer=(ii)=>{
      console.log("Index is "+ii);
      const pp=d3.select("svg#svg1").selectAll("circle").nodes()[ii];
      d3.select(pp).attr("fill","red");
      console.log(d3.select(pp).attr("fill"));
    }
    const toDisc = (i) => (
      <circle ind={i} r={i%2===1?diameter / 2:diameter/3} cx={i * diameter} cy={diameter} fill={i%2===0?"cyan":"lightgreen"} onClick={()=>changer(i)} />
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
  