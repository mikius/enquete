import React, { useState, useEffect } from "react";
import { useInterval } from "../useInterval";

const pad = num => (num < 10 ? "0" + num : num);

const getHumanTime = time => {
  const seconds = parseInt(time, 10) / 1000;
  return `${pad(parseInt(seconds / 60, 10))}:${pad(
    parseInt(seconds % 60, 10)
  )}`;
};

const chronoStyle = {
  fontSize: 40,
  fontVariantNumeric: "tabular-nums",
  display: "inline-block",
  padding: "5px 10px",
  margin: 10,
  border: "1px solid silver",
  textAlign: "center",
  borderRadius: 2
};

export const Chrono = ({ started, delay = 1000, timeout, onFinish }) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  const time = timeout - (new Date().getTime() - started.getTime());
  if (time < 0) {
    onFinish();
    return <div>--:--</div>;
  }
  const humanTime = getHumanTime(time);
  return <div style={chronoStyle}>{humanTime}</div>;
};
