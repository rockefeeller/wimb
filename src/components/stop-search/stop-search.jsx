import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  TextField,
  styled,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getTimeArrival, login } from "../../utils/apiCalls";
import StopInfo from "../stop-info/stop-info";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@mui/icons-material/Mic";
import Title from "../title/title";
import { AccessibilityContext } from "../../context/AccessibilityContext";

const StopSearch = () => {

  const accesibilityContext = useContext(AccessibilityContext)

  const [isLoading, setIsLoading] = useState(false);
  const [stopNumber, setStopNumber] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [timeArrive, setTimeArrival] = useState(null);
  const [showStopDataComp, setshowStopDataComp] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

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
    setIsLoading(true)
    const data = await getTimeArrival(stopNumber, accessToken);
    setIsLoading(false)
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
    try {
      fetchLogin();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const ColorButton = styled(Button)({
    backgroundColor: accesibilityContext.userHasVisualHandicap ?  accesibilityContext.titleColor : "#577eeb",
    float: "right",
    marginTop: "8px",
    width: "30%",
  });

  return (
    <>
      <Title text={"¿Dónde está mi bus?"} />
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
            {accesibilityContext.userHasHandicap ? (
              <Button onClick={handleSpeechOnClick} style={{ float: "right" }}>
                <span>
                  <MicIcon style={{color: accesibilityContext.userHasVisualHandicap ?  accesibilityContext.titleColor : "#577eeb"}}/>
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
            <CircularProgress style={{color: accesibilityContext.userHasVisualHandicap ?  accesibilityContext.titleColor : "#577eeb"}}/>
          ) : isLoading  ? (
            <CircularProgress />
          ): (
            <Alert severity="info">Por favor, busque una parada!</Alert>
          )}
        </>
    </>
  );
};

export default StopSearch;
