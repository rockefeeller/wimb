import { styled } from "@mui/material";

const Title = ({ text }) => {

    const CustomH2 = styled("h2")({
        color: "#577eeb"
    })

  return <CustomH2>{text}</CustomH2>;
};

export default Title;
