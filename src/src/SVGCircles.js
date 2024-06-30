export const SVGCircles = ({ data, diameter, fill }) => {
    const toDisc = (i) => (
      <circle r={diameter / 2} cx={i * diameter} cy={diameter} fill={fill} />
    );
  return (
      <div>
        <h3>SVG Circles</h3>
        <svg id="svg" width="100%" height="300">
          <g transform={`translate(${diameter / 2})`}> 
            {data.map(toDisc)}
          </g>
        </svg>
      </div>
    );
  };
  