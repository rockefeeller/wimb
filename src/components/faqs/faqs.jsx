import FaqItem from "../faq-item/faq-item";
import Title from "../title/title";

const Faqs = () => {
  return (
    <>
      <Title text={"FAQS"} />
      <FaqItem
        title={"¿Información de una parada?"}
        text={
          "Para buscar la información sobre la parada que deseas has de seguir los siguientes pasos:"
        }
        description={[
          'Dirigete a la sección "Where is my bus" del menú.',
          "En el campo de texto introduce el número de parada que deseas buscar.",
          'Pulsa en el botón "Buscar".',
        ]}
      />
      <FaqItem
        title={"¿Tienes alguna discapacidad?"}
        text={
          'Si padeces alguna discapacidad motriz puedes indicarlo en la sección del menu llamada "Accesibilidad", ésto te permitirá realizar las búsquedas utilizando el micrófono de tu dispositivo, ya se móvil, tablet u ordenador.'
        }
        description={[]}
      />
      <FaqItem
        title={"¿Cómo contacto con ustedes?"}
        text={
          'Para poder contactar con el equipo de soporte, dirigete a menu->Contacto, encontrarás un botón con el texto "Contactar", al pulsarlo se abrirá tu cliente de correo con la dirección de soporte precargada.'
        }
        description={[]}
      />
    </>
  );
};

export default Faqs;
