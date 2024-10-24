import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import AboutFading from "../sectionElements/AboutFading";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { MoveRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;


export default function About({modal}) {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(content.texts.about.titleModal);
    setModalContent(
      <p className="text-paragraph3">
        {content.texts.about.modal}
        <p className="mb-[20px]">Quer saber mais sobre nós? Clique abaixo 👇</p>
        <div>
          <Button
            aria-label={content.texts.about.ctaButtonAriaLabel}
            label={content.texts.about.ctaButtonText}
            buttonLink={whatsappContactLink}
            animation={false}
            className="hover:scale-105"
            icon={<FaWhatsapp size={24} />}
          />
        </div>
      </p>
    );
    setVisible(true);
  };

  return (
    <SectionArea id="about" className="bg-bgSectionDark">
      <SectionShapeDiv shapeDivArrow={false} shapeColor="text-white" />
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div
            style={{
              backgroundImage: `url(${content.texts.about.imagem.img})`,
            }}
            className="relative bg-center bg-no-repeat bg-cover h-[450px] w-full tablet1:h-[800px] desktop1:h-[467px] rounded-xl"
          >
            <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-30 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img>
          </div>
          {/* <img
            src={content.texts.about.imagem.img}
            alt="Imagem de uma praia de Arraial"
            className=""
          /> */}
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px] ">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color=""
            type="article"
          />
          <MotionDivDownToUp>
            <Paragraphs className="text-white text-opacity-80">
              <AboutFading />
            </Paragraphs>
            {/* Início Botão de saiba mais abrindo modal */}

            {modal && (
              <Button
                className="mt-[48px]"
                label={content.texts.about.buttonModalLabelAbout}
                onClick={onClick}
                removeAnchor={true}
                removeTarget={true}
                animation={true}
                icon={<MoveRight />}
              />
            )}

            {/* Fim Botão de saiba mais abrindo modal */}
          </MotionDivDownToUp>

          {/* Início Botões das redes sociais */}

          {/* <div className=" flex flex-col gap-[16px] w-[100%] tablet1:w-[60%] desktop1:w-[80%] desktop2:w-[60%]">
            <MotionDivDownToUp>
              <Button
                label="Me siga no Instagram"
                className="w-[75%]"
                buttonLink={content.texts.infos.instagramProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Facebook"
                className="w-[75%]"
                buttonLink{content.texts.infos.facebookProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Linkedin"
                className="w-[75%]"
                buttonLink={content.texts.infos.linkedInProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
          </div> */}

          {/* Fim Botões das redes sociais */}
        </div>
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
