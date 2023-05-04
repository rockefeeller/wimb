import { Box, Card, CardContent, Typography } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
const ArriveItem = ({ arrive }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>
          <DirectionsBusIcon />
          {arrive.line}
        </Typography>
        <Typography>
          <AccessTimeIcon />
          {parseFloat(arrive.estimateArrive / 60).toFixed(0)} min
        </Typography>
        <Typography>
          <AddLocationIcon />
          {arrive.destination}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArriveItem;
