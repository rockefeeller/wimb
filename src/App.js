import logo from './logo.svg';
import './App.css';
import StopSearch from './components/stop-search/stop-search';
import { Container } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";



function App() {
  const [drawerState, setDraweState] = useState({
    left: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDraweState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Where is my bus?', 'Line incidences', 'Help'].map((text, index) => (
          <ListItem key={text} disablePadding>
            {text === 'Where is my bus?' ? 
            (
              <ListItemButton>
                <DirectionsBusIcon/><ListItemText primary={text} />
            </ListItemButton>
            ):
            (
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="App">
      {['left'].map((anchor) => (
        <>
        <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
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
      <Container fixed>
        <StopSearch/>
      </Container>
    </div>
  );
}

export default App;
