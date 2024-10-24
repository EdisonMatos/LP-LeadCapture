import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import LogoDisplayMore from "../sectionElements/LogoDisplayMore";
import content from "../../content/content";

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
  // {
  //   src: content.texts.trustedBy.images.img4.img.trustedByImg4,
  //   alt: content.texts.trustedBy.images.img4.alt,
  // },
  // {
  //   src: content.texts.trustedBy.images.img5.img.trustedByImg5,
  //   alt: content.texts.trustedBy.images.img5.alt,
  // },
  // {
  //   src: content.texts.trustedBy.images.img6.img.trustedByImg6,
  //   alt: content.texts.trustedBy.images.img6.alt,
  // },
  // {
  //   src: content.texts.trustedBy.images.img7.img.trustedByImg7,
  //   alt: content.texts.trustedBy.images.img7.alt,
  // },
  // {
  //   src: content.texts.trustedBy.images.img8.img.trustedByImg8,
  //   alt: content.texts.trustedBy.images.img8.alt,
  // },
  // {
  //   src: content.texts.trustedBy.images.img9.img.trustedByImg9,
  //   alt: content.texts.trustedBy.images.img9.alt,
  // },
  // {
  //   src: content.texts.trustedBy.images.img10.img.trustedByImg10,
  //   alt: content.texts.trustedBy.images.img10.alt,
  // },
  // {
  //   src: content.texts.trustedBy.images.img11.img.trustedByImg11,
  //   alt: content.texts.trustedBy.images.img11.alt,
  // },
];

export default function TrustedByMore() {
  return (
    <SectionArea className="bg-quinary pt-[20px] pb-0 tablet1:pt-[32px] tablet1:pb-0 desktop1:py-[60px] desktop1:pb-0">
      <p className="text-quaternary mb-[26px] tablet1:mb-[40px] desktop1:mb-[40px] text-paragraph4 font-secondFont text-center px-[10%]">
        {content.texts.trustedBy.trustedMore.subtitle}
      </p>
      <SectionWrapper>
        <MotionDivDownToUp className="w-full desktop1:mb-[80px]">
          <LogoDisplayMore images={images} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
