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

export default function About() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Sobre mim");
    setModalContent(
      <p>
        Creci: 11798/PE<br></br> Ensino Superior: Administração - Facape
        <br></br>
        <br></br> Olá, me chamo Rita Almeida, sou corretora de imóveis há mais
        de 10 anos e sou formada em Administração há 30. Decidi entrar no ramo
        quando um colega me fez um elogio: "Rita, você é tão comunicativa,
        deveria ser corretora de imóveis." Eu ainda fiquei receosa: "Ah, isso
        não é para mim," mas decidi arriscar. Fiz o curso quando minha filha
        ainda era pequena e não me arrependo da decisão que tomei.<br></br>
        <br></br> Com a minha formação em Administração, percebi rapidamente que
        muitas das habilidades adquiridas durante o curso eram essenciais no
        mercado imobiliário. A capacidade de negociar, organizar finanças e
        entender os fundamentos econômicos são apenas algumas das competências
        que me ajudaram a destacar-me na profissão.<br></br>
        <br></br> Nos primeiros anos, equilibrar a vida pessoal com a
        profissional foi um desafio, especialmente sendo mãe de uma criança
        pequena. Contudo, sempre busquei manter um alto padrão de ética e
        dedicação, o que me permitiu construir uma reputação sólida e uma base
        de clientes fiéis.<br></br>
        <br></br> Ao longo dos anos, vi muitas mudanças no setor imobiliário. A
        tecnologia transformou a maneira como interagimos com clientes e como os
        imóveis são apresentados e comercializados. Adaptar-me a essas mudanças
        foi essencial, e sempre procurei estar atualizada, seja através de
        cursos de formação continuada ou participando de seminários e workshops.
        <br></br>
        <br></br> Hoje, posso dizer que minha carreira é uma grande paixão. Cada
        dia traz um novo desafio e a oportunidade de ajudar alguém a encontrar o
        lugar ideal para chamar de lar. Continuo empregando as habilidades de
        administração no meu dia a dia, gerenciando não apenas propriedades, mas
        também sonhos e expectativas.
      </p>
    );
    setVisible(true);
  };

  return (
    <SectionArea id="about" className="">
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] ">
          <div
            style={{
              backgroundImage: `url(${content.texts.about.imagem.img})`,
            }}
            className="desktop1:bg-center bg-no-repeat bg-cover h-[450px] tablet1:h-[800px] desktop1:h-[550px] rounded-2xl"
          />
        </MotionDivDownToUp>

        <div className="desktop1:w-[450px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
              {content.texts.about.title}
            </SectionTitles>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="">
              {content.texts.about.paragraph}
            </Paragraphs>
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
                buttonLink={content.texts.infos.facebookProfile}
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

          {/* Início Botão de saiba mais abrindo modal */}

          {/* <MotionDivDownToUp>
            <Button
              label="Leia mais"
              onClick={onClick}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              }
            />
          </MotionDivDownToUp> */}

          {/* Fim Botão de saiba mais abrindo modal */}
        </div>
      </SectionWrapper>
      <Dialog
        className=" font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
