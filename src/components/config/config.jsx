import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

const Config = () => {
  const [state, setState] = React.useState({
    userHasHandicap: Boolean(localStorage.getItem("userHasHandicap")),
  });

  const handleChange = (event) => {
    setState({
      userHasHandicap: event.target.checked,
    });
    localStorage.setItem("userHasHandicap", event.target.checked);
  };

  return (
    <>
      <br />
      <FormControl>
        <FormLabel component="legend">App configuration</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.userHasHandicap}
                name="userHasHandicap"
                onChange={handleChange}
              />
            }
            label="Do you have some motor disability?"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default Config;
