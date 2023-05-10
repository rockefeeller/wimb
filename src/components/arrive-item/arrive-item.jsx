import { Box, Card, CardContent, Typography, duration, keyframes, styled } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
const ArriveItem = ({ arrive }) => {

  const imgStyles = {
      width:'100px', 
      transform: 'scaleX(-1)',
      float: 'left', 
      "@keyframes move": {
        transform: 'translateX(1)'
      }
    }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>
          <DirectionsBusIcon />{arrive.line}
        </Typography>
        <img src={require('../../media_resources/bus.gif')} style={imgStyles} alt="" />
        <Typography>
          <AccessTimeIcon />
          {parseFloat(arrive.estimateArrive / 60).toFixed(0)} min
        </Typography>
        {/* <p style={{float: 'rigth'}}>
          <AddLocationIcon />
          {arrive.destination}
        </p> */}
      </CardContent>
      
    </Card>
  );
};

export default ArriveItem;
