import {
  Button,
  CircularProgress,
  FormControl,
  TextField,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getStopInfo, getTimeArrival, login } from "../../utils/apiCalls";
import { Advisor } from "../advisor/advisor";
import StopInfo from "../stop-info/stop-info";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import Title from "../title/title";

const StopSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stopNumber, setStopNumber] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [timeArrive, setTimeArrival] = useState(null);
  const [showStopDataComp, setshowStopDataComp] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [userHasHandicap, setUserHasHandicap] = useState(
    Boolean(localStorage.getItem("userHasHandicap"))
  );

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const fetchLogin = async () => {
    const { accessToken } = await login();
    setAccessToken(accessToken);
  };

  const handleOnClick = async () => {
    const data = await getTimeArrival(stopNumber, accessToken);
    setTimeArrival(data);
    setshowStopDataComp(true);
  };

  const handleSpeechOnClick = async () => {
    if (!isRecording) {
      setIsRecording(true);
      SpeechRecognition.startListening();
    } else {
      setIsRecording(false);
      SpeechRecognition.stopListening();
      setStopNumber(transcript);
      resetTranscript();
    }
  };

  useEffect(() => {
    setUserHasHandicap(Boolean(localStorage.getItem('userHasHandicap')))
  },[userHasHandicap])
  

  useEffect(() => {
    try {
      fetchLogin();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [!isLoading]);

  const ColorButton = styled(Button)({
    backgroundColor: "#8CC2EC",
    float: "right",
    marginTop: "8px",
    width: "30%",
  });

  return (
    <>
      <Title text={"Where is my bus?"} />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <FormControl>
            <TextField
              id="stopNumber"
              label="Número de parada"
              variant="outlined"
              value={stopNumber}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              onChange={(evt) => setStopNumber(evt.target.value)}
            ></TextField>
            {userHasHandicap ? (
              <Button onClick={handleSpeechOnClick} style={{ float: "right" }}>
                <span>
                  <MicIcon />
                </span>
              </Button>
            ) : (
              ""
            )}
          </FormControl>
          <ColorButton variant="contained" onClick={handleOnClick}>
            Buscar
          </ColorButton>
          {showStopDataComp && !isRecording ? (
            <StopInfo stopData={timeArrive} />
          ) : isRecording ? (
            <CircularProgress />
          ) : (
            <Advisor />
          )}
        </>
      )}
    </>
  );
};

export default StopSearch;
