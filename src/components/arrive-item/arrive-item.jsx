import { Box, Card, CardContent, Typography, duration, keyframes, styled } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
const ArriveItem = ({ arrive }) => {

  const calculateMove = (time) => {
    if(time > 10) return 0;
    return (10-time) * 100
    /**
     * 10 - time * 100
     */
  }

  const move = keyframes`
    to{
      transform: translateX(${calculateMove(parseFloat(arrive.estimateArrive / 60).toFixed(0))+"px"}) scaleX(-1) 
    }
  `

  const BusMove = styled("img")({
    float: 'left',
    width:'100px',
    animation: `${move} 5s forwards`,
  })

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>
          <DirectionsBusIcon />{arrive.line}
        </Typography>
        <BusMove src={require('../../media_resources/bus-unscreen.gif')} style={{transform: 'scaleX(-1)'}} alt="" />
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
