import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CarouselDivs from "../interactives/CarouselDivsV1";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";

export default function TesteCarouselDivsV1() {
  return (
    <SectionArea id="" className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.carouselv1.title}
        sectionHeaderSubtitle={content.texts.carouselv1.subtitle}
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp className="flex justify-center w-full">
          <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
            <CarouselDivs>
              <div className="bg-red-900">
                <div>
                  <h1>Div1</h1>
                </div>
              </div>
              <div className="bg-green-900">
                <div>
                  <h1>Div2</h1>
                </div>
              </div>
              <div className="bg-yellow-900">
                <div>
                  <h1>Div3</h1>
                </div>
              </div>
            </CarouselDivs>
          </div>
        </MotionDivDownToUp>
        <MotionDivDownToUp></MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
