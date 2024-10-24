import HeroImg1 from "../../assets/imgs/hero/heroImg1.webp";
import HeroImg2 from "../../assets/imgs/hero/heroImg2.webp";
import HeroImg3 from "../../assets/imgs/hero/heroImg3.webp";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import content from "../../content/content";
import Button from "../interactives/Button";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function HeroSection() {
  return (
    <div className="font-mainFont" id="home">
      <div className="w-full">
        <div className="flex items-center">
          <div className="w-full justify-evenly pb-[40px] tablet1:pb-[64px] desktop1:pb-[60px]">
            <div className="h-[105px] phone2:h-[132px] tablet1:h-[145px] desktop3:h-[160px]" />
            <div className=" flex h-auto flex-col w-[90%] max-w-[1215px] items-center pt-[20px] gap-[30px] desktop3:gap-20 desktop1:flex-row-reverse mx-auto">
              <div className="w-full desktop1:w-[50%] flex flex-col items-center tablet1:items-center tablet1:w-[80%] tablet2:w-[60%]">
                <MotionDivDownToUp className="">
                  <div className="">
                    <ImagesGallery3Slides
                      slide1={HeroImg1}
                      slide2={HeroImg2}
                      slide3={HeroImg3}
                    />

                    {/* <img src={HeroImg1}></img> */}
                  </div>
                </MotionDivDownToUp>
              </div>
              <div className="w-full desktop1:w-[50%] flex flex-col">
                <MotionDivLeftToRight>
                  <div className="text-black desktop1:w-[100%] font-bold leading-[44px] tablet1:leading-[60px] text-center desktop1:leading-[82px] desktop1:text-left text-title5 phone3:text-title6 tablet1:text-title7 desktop1:text-[60px] desktop2:text-[80px]">
                    <h1 className="pb-[16px]">{content.texts.hero.title}</h1>
                  </div>
                </MotionDivLeftToRight>
                <MotionDivLeftToRight>
                  <div className="text-center desktop1:text-left w-full font-secondFont text-title1">
                    <p className="text-quaternary pb-[54px]">
                      {content.texts.hero.subtitle}
                    </p>
                  </div>
                </MotionDivLeftToRight>
                <div className="w-full phone2:w-full tablet2:w-auto">
                  <MotionDivLeftToRight>
                    <div className="flex justify-center w-full desktop1:justify-start">
                      <a
                        href={whatsappContactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          label={content.texts.hero.ctaButtonText}
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
                      </a>
                    </div>
                  </MotionDivLeftToRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
