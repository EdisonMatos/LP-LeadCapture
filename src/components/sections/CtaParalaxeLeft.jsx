import content from "../../content/content";
import SectionContent from "../sectionElements/SectionContent";
import MotionDivUpToDown from "../animation/MotionDivUpToDown";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function CtaParalaxeLeft() {
  return (
    <div
      className="bg-left bg-cover desktop1:bg-fixed desktop1:bg-left"
      style={{
        backgroundImage: `url(${content.texts.cta.backgroundImg})`,
      }}
      id="contact"
    >
      <div className="flex justify-center w-full bg-opacity-10 bg-primary">
        <div className="flex justify-center w-full bg-black bg-opacity-30">
          <SectionContent>
            <div className="flex justify-center w-full  font-mainFont py-[40px] tablet1:py-[64px] desktop1:py-[96px]">
              <div className="w-full max-w-[1215px] flex flex-row items-end justify-center desktop2:justify-start">
                <div className=" flex flex-col w-full desktop1:w-[90%] justify-evenly items-center desktop1:items-start gap-[32px]">
                  <h1 className="w-full leading-[58px] text-secondary desktop1:w-[60%] text-center desktop1:text-left text-title4 font-poppins desktop1:text-title5 desktop2:text-title6 flex justify-center">
                    <MotionDivUpToDown className="w-[90%] desktop1:w-full [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                      {content.texts.cta.title}
                    </MotionDivUpToDown>
                  </h1>
                  <MotionDivDownToUp className="flex justify-center">
                    <div className="w-[80%] phone2:w-full tablet1:w-full">
                      <Button
                        label={content.texts.cta.ctaButtonText}
                        buttonLink={whatsappContactLink}
                        className="invert"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-whatsapp"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                          </svg>
                        }
                      />
                    </div>
                  </MotionDivDownToUp>
                </div>
                <div className="hidden min-h-[197px] max-h-[229.39px] phone2:min-h-[229.40px] phone2:max-h-[261px] phone3:min-h-[262px] phone3:max-h-[334px] tablet1:min-h-[235px] tablet1:max-h-[292px] tablet2:min-h-[292px] tablet2:max-h-[335px] desktop1:min-h-[335px] desktop3:max-h-[335px] w-[90%] max-w-40 w-[100%] max-w-none phone3:max-w-60 tablet1:w-[45%]"></div>
              </div>
            </div>
          </SectionContent>
        </div>
      </div>
    </div>
  );
}
