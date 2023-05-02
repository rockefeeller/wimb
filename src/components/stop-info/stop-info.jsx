import { useState } from "react";
import LineList from "../line-list/line-list";

const StopInfo = ({ stopData }) => {
  return stopData.map((stop) => <LineList arrives={stop["Arrive"]} />);
};

export default StopInfo;
