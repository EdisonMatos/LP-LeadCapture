import LpContent from "../../../content/LpContent";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={LpContent.whyUs.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={LpContent.whyUs.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={LpContent.whyUs.cards.card1.icon}
              title={LpContent.whyUs.cards.card1.title}
              description={LpContent.whyUs.cards.card1.description}
            />
            <FeatureCardLP
              icon={LpContent.whyUs.cards.card2.icon}
              title={LpContent.whyUs.cards.card2.title}
              description={LpContent.whyUs.cards.card2.description}
            />
            <FeatureCardLP
              icon={LpContent.whyUs.cards.card3.icon}
              title={LpContent.whyUs.cards.card3.title}
              description={LpContent.whyUs.cards.card3.description}
            />
            <FeatureCardLP
              icon={LpContent.whyUs.cards.card4.icon}
              title={LpContent.whyUs.cards.card4.title}
              description={LpContent.whyUs.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
