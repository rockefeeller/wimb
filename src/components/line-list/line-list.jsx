import { Grid } from "@mui/material";
import ArriveItem from "../arrive-item/arrive-item";

const LineList = ({ arrives }) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {arrives.map((arrive, index) => {
          {console.log(index)}
          <Grid xs={2} sm={4} md={4} key={index}>
            <ArriveItem arrive={arrive} />
          </Grid>;
        })}
      </Grid>
    </>
  );
};

export default LineList;
