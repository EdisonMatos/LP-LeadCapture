import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../content/content";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TrustedByMore from "../sections/TrustedByMore";

const images = [
  {
    src: content.texts.trustedBy.images.img1.img.trustedByImg1,
    alt: content.texts.trustedBy.images.img1.alt,
  },
  {
    src: content.texts.trustedBy.images.img2.img.trustedByImg2,
    alt: content.texts.trustedBy.images.img2.alt,
  },
  {
    src: content.texts.trustedBy.images.img3.img.trustedByImg3,
    alt: content.texts.trustedBy.images.img3.alt,
  },
];

export default function TrustedBy() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Seguradoras que trabalhamos");
    setModalContent(
      <div>
        <TrustedByMore />
      </div>
    );
    setVisible(true);
  };

  return (
    <SectionArea className="">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.trustedBy.title}
        sectionHeaderSubtitle={content.texts.trustedBy.subtitle}
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
        <MotionDivDownToUp className="">
          {/* <Paragraphs className="text-center">
            Para ver todas seguradoras que trabalhamos,{" "}
            <span
              className="transition cursor-pointer text-tertiary hover:underline"
              onClick={onClick}
            >
              clique aqui
            </span>
          </Paragraphs> */}
        </MotionDivDownToUp>
      </SectionWrapper>
      {/* <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog> */}
    </SectionArea>
  );
}
