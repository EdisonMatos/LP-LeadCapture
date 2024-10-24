import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import imgAppFeatures1 from "../../assets/imgs/features/appFeatures1.png";

export default function AppFeatures1() {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center pt-[40px] tablet1:pt-[64px] desktop1:pt-[96px]"
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] flex justify-center desktop1:w-[415px] desktop2:w-[485px] ">
          <img
            src={imgAppFeatures1}
            alt="Lojas online"
            className="transition hover:scale-110"
          />
        </MotionDivDownToUp>

        <div className="desktop1:w-[450px] desktop2:w-[570px] text-center desktop1:text-left">
          <MotionDivDownToUp className="mb-[54px]">
            <SectionTitles className="mb-[18px] desktop1:mb-[8px] text-[48px] leading-none desktop1:w-[80%]">
              Compre em qualquer site
            </SectionTitles>
            <Paragraphs className="font-semibold text-[19px] opacity-65">
              Você não precisa mais deixar de comprar no estabelecimento que
              você mais gosta
            </Paragraphs>
          </MotionDivDownToUp>
          <MotionDivDownToUp className="mb-[40px]">
            <Paragraphs className="mb-[8px] font-bold text-[#000000] text-[21px]">
              Liberdade
            </Paragraphs>
            <Paragraphs className="text-[16px] opacity-65">
              Agora sua localização não interfere mais nas suas compras
            </Paragraphs>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="mb-[8px] font-bold text-[#000000] text-[21px]">
              Praticidade
            </Paragraphs>
            <Paragraphs className="text-[16px] opacity-65">
              Tudo pensado para que o processo seja totalmente fácil
            </Paragraphs>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </div>
  );
}
