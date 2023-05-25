import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  styled,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import LabelIcon from '@mui/icons-material/Label';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Title from "../title/title";
import { AccessibilityContext } from "../../context/AccessibilityContext";
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const MenuComponent = () => {
  const [drawerState, setDraweState] = useState({
    left: false,
  });

  const accesibilityContext = useContext(AccessibilityContext)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDraweState({ ...drawerState, [anchor]: open });
  };

  const LinkStyled = styled(Link)({
    textDecoration: "none",
    color: "#577eeb",
  });

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Title text={"Menu"} />
      <hr />
      <List style={{color: accesibilityContext.userHasVisualHandicap ?  accesibilityContext.titleColor : "#577eeb"}}>
        {["Home", "¿Dónde está mi bus?","Accesibilidad","FAQS","Contacto"].map((text, index) => (
          <ListItem key={text} disablePadding>
            {text === "¿Dónde está mi bus?" ? (
              <ListItemButton>
                <DirectionsBusIcon />
                <LinkStyled to="/stopSearch">
                  <ListItemText primary={text} />
                </LinkStyled>
              </ListItemButton>
            ) : text === "Home" ? (
              <ListItemButton>
                <HomeIcon />
                <LinkStyled to="/">
                  <ListItemText primary={text} />
                </LinkStyled>
              </ListItemButton>
            ) : text === "Accesibilidad" ? (
              <ListItemButton>
                <AccessibilityIcon />
                <LinkStyled to="/Accesibilidad">
                  <ListItemText primary={text} />
                </LinkStyled>
              </ListItemButton>
            ) :  text === "Help" ? (
              <ListItemButton>
                <HelpIcon />
                <LinkStyled to={text}>
                  <ListItemText primary={text} />
                </LinkStyled>
              </ListItemButton>
            ) : text === "Contacto" ? (
              <ListItemButton>
                <ContactMailIcon />
                <LinkStyled to={text}>
                  <ListItemText primary={text} />
                </LinkStyled>
              </ListItemButton>
            ) : (
              <ListItemButton>
                <LabelIcon />
                <LinkStyled to={text}>
                  <ListItemText primary={text} />
                </LinkStyled>
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="App">
      {["left"].map((anchor) => (
        <>
          <Button
            style={{ position: "relative", float: "left" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={drawerState[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </>
      ))}
    </div>
  );
};

export default MenuComponent;
