import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Title from "../title/title";

const Accessibility = () => {
  const [state, setState] = React.useState({
    userHasHandicap: localStorage.getItem('userHasHandicap')
  });

  const handleChange = (event) => {
    setState({
      userHasHandicap: event.target.checked,
    });
    localStorage.setItem("userHasHandicap", event.target.checked);
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
    </>
  );
};

export default Accessibility;
