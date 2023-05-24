import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import MenuComponent from "./components/menu/menu";
import { Context as ResponsiveContext } from 'react-responsive'
import AccessibilityContextProvider from "./context/AccessibilityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResponsiveContext.Provider value={{width: 500}}>
    <AccessibilityContextProvider>
    <BrowserRouter>
    <React.StrictMode>
    <MenuComponent />
    <br></br>
      <Container fixed>
        <App />
      </Container>
    </React.StrictMode>
  </BrowserRouter>
  </AccessibilityContextProvider>
  </ResponsiveContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
