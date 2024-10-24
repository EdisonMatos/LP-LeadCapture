import LpContent from "../../../content/LpContent";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function FeaturesLP({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={LpContent.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={LpContent.features.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={LpContent.features.cards.card1.icon}
              title={LpContent.features.cards.card1.title}
              description={LpContent.features.cards.card1.description}
            />
            <FeatureCardLP
              icon={LpContent.features.cards.card2.icon}
              title={LpContent.features.cards.card2.title}
              description={LpContent.features.cards.card2.description}
            />
            <FeatureCardLP
              icon={LpContent.features.cards.card3.icon}
              title={LpContent.features.cards.card3.title}
              description={LpContent.features.cards.card3.description}
            />
            <FeatureCardLP
              icon={LpContent.features.cards.card4.icon}
              title={LpContent.features.cards.card4.title}
              description={LpContent.features.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
