import { Grid } from "@mui/material";
import ArriveItem from "../arrive-item/arrive-item";

const LineList = ({ arrives }) => {
  return (
      <Grid spacing={1}>
        {arrives.filter(arrive => parseFloat(arrive.estimateArrive / 60).toFixed(0) < 11).map((arrive, index) => 
          <Grid item xs={10}>
            <ArriveItem arrive={arrive} />
          </Grid>
        )}
      </Grid>
  );
};

export default LineList;
