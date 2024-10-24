import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import ServicesModal from "./ServicesModal";
import FeatureCard from "../cards/FeatureCard";
import services from "../../content/services";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";

export default function Services() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Nossos Serviços"
        sectionHeaderSubtitle="Explore a variedade de tratamentos e procedimentos que oferecemos"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] desktop1:flex-row">
          <FeatureCard
            img={services.main.card1.img.img}
            title={services.main.card1.title}
            description={services.main.card1.description}
            buttonLabel={services.main.card1.buttonLabel}
            buttonLink={services.main.card1.buttonLink}
            className="hover:drop-shadow-xl"
          />
          <FeatureCard
            img={services.main.card2.img.img}
            title={services.main.card2.title}
            description={services.main.card2.description}
            buttonLabel={services.main.card2.buttonLabel}
            buttonLink={services.main.card2.buttonLink}
            className="hover:drop-shadow-xl"
          />
          <MotionDivDownToUp className="bg-white p-[36px] hover:drop-shadow-xl rounded-2xl desktop1:w-[30%] flex flex-col tablet1:flex-row gap-[36px] desktop1:flex-col w-full h-full">
            <div className="">
              <h1 className=" font-mainFont font-semibold text-[26px] phone2:text-[32px]  tablet1:text-title3 desktop2:text-[32px] leading-[36px] mb-[16px]">
                <MotionDivDownToUp>
                  {services.main.card6.title}
                </MotionDivDownToUp>
              </h1>
              <p className=" font-secondFont text-paragraph4 mb-[36px] text-quaternary">
                <MotionDivDownToUp>
                  {services.main.card6.description}
                </MotionDivDownToUp>
              </p>
              <MotionDivDownToUp>
                <ServicesModal />
              </MotionDivDownToUp>
            </div>
          </MotionDivDownToUp>
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
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
