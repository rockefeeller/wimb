import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqItem = ({ title, text, description }) => {
  return (
    <Accordion style={{textAlign: 'justify'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ color: "#577eeb" }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{text}</Typography>
        <ul>
          {description.map((item) => (
            <>
              <li>{item}</li>
              <br />
            </>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqItem;
