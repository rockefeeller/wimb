import { Box, Card, CardContent, Typography, duration, keyframes, styled } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HailIcon from '@mui/icons-material/Hail';
import { useMediaQuery } from "react-responsive";
const ArriveItem = ({ arrive }) => {

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })

  const calculateMove = (time) => {
    if(time > 10) return 0;

    if(isTabletOrMobile){
      return ((10-time) * 100) / 5;
    }
    else{
      return (10-time) * 100
    }
    
  }

  const move = keyframes`
    to{
      transform: translateX(${calculateMove(parseFloat(arrive.estimateArrive / 60).toFixed(0))+"px"}) scaleX(-1) 
    }
  `

  const BusMove = styled("img")({
    float: 'left',
    width:'125px',
    animation: `${move} 5s forwards`,
  })

  const CardStyled = styled(Card)({
    marginTop: '10px',
    marginBottom: '10px',
  })

  return (
    <CardStyled variant="outlined">
      <CardContent>
        <Typography>
          <DirectionsBusIcon />{arrive.line}
        </Typography>
        <div>
        <BusMove src={require('../../media_resources/bus-unscreen.gif')} style={{transform: 'scaleX(-1)'}} alt="" />
        <p style={{float:'right'}}>{parseFloat(arrive.estimateArrive / 60).toFixed(0)}'<HailIcon /></p>
        </div>
      </CardContent>
      
    </CardStyled>
  );
};

export default ArriveItem;
