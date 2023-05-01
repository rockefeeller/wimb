import {
  Button,
  CircularProgress,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTimeArrival, login } from "../../utils/apiCalls";
import StopInfo from "../stop-info/stop-info";

const StopSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stopNumber, setStopNumber] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [stopData, setStopData] = useState(null);

  const fetchLogin = async () => {
    const { accessToken } = await login();
    setAccessToken(accessToken);
  };

  const handleOnClick = async () => {
    const data = await getTimeArrival(2020, accessToken);
    setStopData(data["Arrive"]);
  };

  useEffect(() => {
    fetchLogin();
  }, isLoading);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <FormControl>
            <TextField
              id="stopNumber"
              label="Stop number"
              variant="outlined"
              inputProps={{
                inputMode: "numeric",
                patter: "[0-9]*",
              }}
            />
            <Button variant="contained" onClick={handleOnClick}>
              Search
            </Button>
          </FormControl>
          <StopInfo stopData={stopData} />
        </>
      )}
    </>
  );
};

export default StopSearch;
