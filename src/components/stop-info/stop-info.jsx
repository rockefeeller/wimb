import { useState } from "react";
import ArriveList from "../arrive-list/arrive-list";

const StopInfo = ({ stopData }) => {
  return stopData.map((stop) => <ArriveList arrives={stop["Arrive"]} />);
};

export default StopInfo;
