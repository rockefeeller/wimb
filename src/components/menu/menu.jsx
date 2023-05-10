import { Box, Button, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const MenuComponent = () => {

    const [drawerState, setDraweState] = useState({
    left: false,
  });

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home","Where is my bus?","Help"].map((text, index) => (
          <ListItem key={text} disablePadding>
            {text === "Where is my bus?" ? (
              <ListItemButton>
                  <DirectionsBusIcon />
                  <Link to='/stopSearch'><ListItemText primary={text} /></Link>
              </ListItemButton>
            ) : text === "Home" ? (
              <ListItemButton>
                <Link to="/"><ListItemText primary={text} /></Link>
              </ListItemButton>
            ):
            (
                <ListItemButton>
                <Link to={text}><ListItemText primary={text} /></Link>
              </ListItemButton>
            )
            }
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
