import React from "react";
import type { NsGraph } from "@antv/xflow-core";
import { createPath } from "@/components/flow/utils";
import {
  NODE_WIDTH,
  NODE_HEIGHT,
  NODE_PADDING,
  DefaultNodeConfig,
} from "@/components/flow/constants";

export const ManualOperationNode: NsGraph.INodeRender = (props) => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {} } =
    props;
  const {
    stroke = DefaultNodeConfig.stroke,
    label = DefaultNodeConfig.label,
    fill = DefaultNodeConfig.fill,
    fontFill = DefaultNodeConfig.fontFill,
    fontSize = DefaultNodeConfig.fontSize,
  } = data;
  const { width, height } = size;
  const rx = Math.min(Math.tan(Math.PI / 6) * height, width / 2);
  const path = [
    ["M", rx, NODE_PADDING], // top-left
    ["L", width - rx, NODE_PADDING], // top-right
    ["L", width - 2 * NODE_PADDING, height], // bottom-right
    ["L", NODE_PADDING, height], // bottom-left
    ["Z"],
  ];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path d={createPath(path)} fill={fill} stroke={stroke} />
      <text
        x={width / 2}
        y={height / 2}
        fill={fontFill}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize={fontSize}
      >
        {label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};
