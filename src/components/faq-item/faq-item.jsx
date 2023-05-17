import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqItem = ({
    title,
    description
}) => {
    return (
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
            {
                description.map(
                    (item) => <><li>{item}</li><br /></> 
                )
            }
            </ul>
        </AccordionDetails>
      </Accordion>
    )
}

export default FaqItem