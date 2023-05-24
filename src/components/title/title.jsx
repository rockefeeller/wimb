import { styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccessibilityContext } from "../../context/AccessibilityContext";

const Title = ({ text }) => {

  const accesibilityContext = useContext(AccessibilityContext)

    const CustomH2 = styled("h2")({
        color: accesibilityContext.userHasVisualHandicap ?  accesibilityContext.titleColor : "#577eeb",
        textAlign: 'center'
    })

  return <CustomH2>{text}</CustomH2>;
};

export default Title;
