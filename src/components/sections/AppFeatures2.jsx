import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import imgAppFeatures2 from "../../assets/imgs/features/appFeatures2.png";

export default function AppFeatures1() {
  return (
    <div className="w-full flex flex-col items-center pt-[20px] pb-[64px] tablet1:pt-[32px] tablet1:pb-[96px] desktop1:py-[48px]">
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] flex justify-center desktop1:w-[415px] desktop2:w-[485px] ">
          <img
            src={imgAppFeatures2}
            alt="Lojas online"
            className="transition hover:scale-110"
          />
        </MotionDivDownToUp>

        <div className="desktop1:w-[450px] desktop2:w-[570px] text-center desktop1:text-left">
          <MotionDivDownToUp className="mb-[54px]">
            <SectionTitles className="mb-[18px] desktop1:mb-[8px] text-[48px] leading-none desktop1:w-[80%]">
              Receba onde for melhor pra você
            </SectionTitles>
            <Paragraphs className="font-semibold text-[19px] opacity-65">
              Nós cuidamos do recebimento e você aproveita a sua compra
            </Paragraphs>
          </MotionDivDownToUp>
          <MotionDivDownToUp className="mb-[40px]">
            <Paragraphs className="mb-[8px] font-bold text-[#000000] text-[21px]">
              Segurança
            </Paragraphs>
            <Paragraphs className="text-[16px] opacity-65">
              A segurança da sua compra é a nossa prioridade
            </Paragraphs>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="mb-[8px] font-bold text-[#000000] text-[21px]">
              Suporte
            </Paragraphs>
            <Paragraphs className="text-[16px] opacity-65">
              Nosso time está sempre pronto a te auxiliar em qualquer dúvida
            </Paragraphs>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </div>
  );
}
