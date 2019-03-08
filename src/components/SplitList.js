import React from "react";

const SplitList = props => (
  <li
    onClick={() => props.targetSplit(props.split)}
    className={props.selectedSplit === props.split ? "selected" : "unselected"}
  >
    <p>{`${props.split}`} ms</p>
  </li>
);

export default SplitList;
