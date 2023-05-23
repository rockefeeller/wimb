import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useEffect, useContext } from "react";
import Title from "../title/title";
import { AccessibilityContext } from "../../context/AccessibilityContext";

const Accessibility = () => {

  const accesibilityContext = useContext(AccessibilityContext)

  const [state, setState] = React.useState({
    userHasHandicap: accesibilityContext.userHasHandicap,
    userHasVisualHandicap: accesibilityContext.userHasVisualHandicap,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: Boolean(event.target.checked),
    });
    switch(event.target.name){
      case "userHasHandicap":
        accesibilityContext.setUserHasHandicap(Boolean(event.target.checked))
        break;
      case "userHasVisualHandicap":
        accesibilityContext.setUserHasVisualHandicap(Boolean(event.target.checked))
        break;
    }
    console.log(accesibilityContext.userHasVisualHandicap)
  };

  return (
    <>
      <Title text={"Accesibilidad"} />
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.userHasHandicap}
                name="userHasHandicap"
                onChange={handleChange}
              />
            }
            label="¿Tienes alguna discapacidad motriz?"
          />
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.userHasVisualHandicap}
                name="userHasVisualHandicap"
                onChange={handleChange}
              />
            }
            label="¿Tienes alguna discapacidad visual?"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default Accessibility;
