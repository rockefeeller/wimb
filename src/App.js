import logo from "./logo.svg";
import "./App.css";
import StopSearch from "./components/stop-search/stop-search";
import { Container } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Link, Route, Router, Routes } from "react-router-dom";
import MenuComponent from "./components/menu/menu";
import ArriveItem from "./components/arrive-item/arrive-item";
import Help from "./components/help/help";
import Home from "./components/home/home";

function App() {
  

  return (
    <div className="App" style={{alignContent: 'center'}}>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopSearch" element={<StopSearch />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
