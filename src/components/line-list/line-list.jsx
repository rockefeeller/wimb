import { Grid } from "@mui/material";
import ArriveItem from "../arrive-item/arrive-item";

const LineList = ({ arrives }) => {
  return (
      <Grid container spacing={1}>
        {arrives.map((arrive, index) => 
          <Grid item xs={10}>
            <ArriveItem arrive={arrive} />
          </Grid>
        )}
      </Grid>
  );
};

export default LineList;
