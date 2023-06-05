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
        items={[
          'Dirigete a la sección "¿Dónde está mi bus?" del menú.',
          "En el campo de texto introduce el número de parada que deseas buscar.",
          'Pulsa en el botón "Buscar".',
        ]}
      />
      <FaqItem
        title={"¿De dónde extráeis la información?"}
        text={
          "Toda la información es extraída de la API publicada por la empresa municipal de transportes EMT.\n Podéis encontrar toda la documentación en el siguiente enlace: https://mobilitylabs.emtmadrid.es/"
        }
        items={[]}
      />
      <FaqItem
        title={"¿Accesibilidad?"}
        text={
          'Puedes configurar la aplicación a tus necesidades, llevando a cabo los siguientes pasos:'
        }
        items={[
          "Pulsa el icono del menú.",
          "Clica en \"Accesibilidad\".",
          "Activa las opciones que mejor se adapten a ti."
        ]}
      />
      <FaqItem
        title={"¿Cómo contactar con nosotros?"}
        text={
          'Para poder contactar con el equipo de soporte, dirigete a menu => Contacto, encontrarás un botón con el texto "Contactar", al pulsarlo se abrirá tu cliente de correo con la dirección de soporte precargada.'
        }
        items={[]}
      />
    </>
  );
};

export default Faqs;
