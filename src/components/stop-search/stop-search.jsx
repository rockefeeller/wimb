import {
  Button,
  CircularProgress,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTimeArrival, login } from "../../utils/apiCalls";
import { Advisor } from "../advisor/advisor";
import StopInfo from "../stop-info/stop-info";

const StopSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stopNumber, setStopNumber] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [stopData, setStopData] = useState(null);
  const [showStopDataComp, setshowStopDataComp] = useState(false);

  const fetchLogin = async () => {
    const { accessToken } = await login();
    setAccessToken(accessToken);
  };

  const handleOnClick = async () => {
    const data = await getTimeArrival(stopNumber, accessToken);
    setStopData(data);
    setshowStopDataComp(true);
  };

  useEffect(() => {
    try {
      fetchLogin();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [!isLoading]);

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
                pattern: "[0-9]*",
              }}
              onChange={(evt) => setStopNumber(evt.target.value)}
            />
            <Button variant="contained" onClick={handleOnClick}>
              Search
            </Button>
          </FormControl>
          {showStopDataComp ? <StopInfo stopData={stopData} /> : <Advisor />}
        </>
      )}
    </>
  );
};

export default StopSearch;
