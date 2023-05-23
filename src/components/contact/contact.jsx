import { Button, styled } from "@mui/material";
import Title from "../title/title";

const Contact = () => {
  const ColorButton = styled(Button)({
    backgroundColor: "#8CC2EC",
    float: "right",
    marginTop: "8px",
    width: "30%",
    float: "center",
  });

  const LinkCustom = styled("a")({
    textDecoration: 'none'
  })
  return (
    <>
    
      <Title text={"Contacto"} />
      <ColorButton variant="contained">
        <LinkCustom href="mailto:alejandro.gallardo@cesjuanpablosegundo.es">Contactar</LinkCustom>
      </ColorButton>
    </>
  );
};

export default Contact;
