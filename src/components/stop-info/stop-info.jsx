import { useState } from "react";
import ArriveList from "../arrive-list/arrive-list";
import { Alert } from "@mui/material";

const StopInfo = ({ stopData, stopNumber }) => {
  return stopData[0]["Arrive"].length === 0 ? (
    <Alert severity="warning">
      No existe la parada {stopNumber}.
    </Alert>
  ) : (
    stopData.map((stop) => <ArriveList arrives={stop["Arrive"]} />)
  );
};

export default StopInfo;
