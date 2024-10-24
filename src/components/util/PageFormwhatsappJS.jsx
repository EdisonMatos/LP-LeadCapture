import BgImageBlank from "../../assets/imgs/hero/bgBlank.jpg";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";

function EmailEnviado() {
  return (
    <div
      className=" flex items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BgImageBlank})`,
      }}
    >
      <SectionArea>
        <SectionWrapper>
          <div className="flex w-full">
            <p className="text-paragraph5 text-red-600 bg-white">
              Email enviado, aguarde uma solicitação de contato
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default EmailEnviado;
