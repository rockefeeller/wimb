import ArriveItem from "../arrive-item/arrive-item";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FaqItem from "../faq-item/faq-item";

const Faqs = () => {
  return (
    <>
    <br />
    <FaqItem
      title={"How can i search a bus info?"}
      description={[
        "Go to \"Where is my bus\" section on the menu.",
        "Introduce in the input the stop number which do you want to search."
      ]}
    />
    <FaqItem 
      title={"Contact with us"}
      description={[
        "Send an email to the following email address.",
        "alejandro.gallardo@gmail.com"
      ]}
    />
    <FaqItem 
      title={"Do you have any handicap?"}
      description={[
        "You can config the app to allow you to search a stop using your own voice.",
        "Go to \"Config\" on the menu.",
        "Check the switch if you have some handicap."
      ]}
    />
    </>
  );
};

export default Faqs;
