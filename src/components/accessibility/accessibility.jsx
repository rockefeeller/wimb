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
  const accesibilityContext = useContext(AccessibilityContext);

  const [state, setState] = React.useState({
    userHasHandicap: accesibilityContext.userHasHandicap,
    userHasVisualHandicap: accesibilityContext.userHasVisualHandicap,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: Boolean(event.target.checked),
    });
    switch (event.target.name) {
      case "userHasHandicap":
        accesibilityContext.setUserHasHandicap(Boolean(event.target.checked));
        localStorage.setItem("userHasHandicap", Boolean(event.target.checked));
        break;
      case "userHasVisualHandicap":
        accesibilityContext.setUserHasVisualHandicap(
          Boolean(event.target.checked)
        );
        localStorage.setItem(
          "userHasVisualHandicap",
          Boolean(event.target.checked)
        );
        break;
    }
  };

  return (
    <>
      <Title text={"Accesibilidad"} />
      <h4
        style={{
          color: accesibilityContext.userHasVisualHandicap
            ? accesibilityContext.titleColor
            : "#577eeb",
          float: 'left',
          display: 'flex',
          position: 'absolute'
        }}
      >
        Física o motora
      </h4>
      <br />
      <br />
      <section style={{display: 'flex', flexDirection: 'row'}}>
      <FormControl >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.userHasHandicap}
                name="userHasHandicap"
                onChange={handleChange}
              />
            }
            label="Búsqueda por voz"
          />
        </FormGroup>
      </FormControl>
      </section>
      <h4
        style={{
          color: accesibilityContext.userHasVisualHandicap
            ? accesibilityContext.titleColor
            : "#577eeb",
          float: 'left',
          display: 'flex',
          position: 'absolute'
        }}
      >
        Visual
      </h4>
      <br />
      <br />
      <section style={{display: 'flex', flexDirection: 'column'}}>
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
            label="Colores"
          />
        </FormGroup>
      </FormControl>
      <section style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
      {accesibilityContext.userHasVisualHandicap && (
        <>
          <label for="colorPicker">Seleccione el color</label>
          <input
            name="colorPicker"
            type="color"
            value={accesibilityContext.titleColor}
            onChange={(event) => {
              accesibilityContext.setTitleColor(event.target.value);
              localStorage.setItem(
                "titleColor",
                accesibilityContext.titleColor
              );
            }}
          />
        </>
      )}
      </section>
      </section>
    </>
  );
};

export default Accessibility;
