import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function FeatureImgOnBgCardButton(props) {
  const {
    bgImg,
    title,
    description,
    buttonLabel,
    buttonLink,
    onClick,
    buttonColor,
    animation,
  } = props;

  FeatureImgOnBgCardButton.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
    animation: PropTypes.bool,
  };

  const Animation = animation ? MotionDivDownToUp : "div";

  return (
    <Animation className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]  tablet1:w-[47%] desktop1:w-[23%]">
      <div
        className="w-full h-[560px] rounded-2xl flex flex-col justify-end bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-end w-full h-full bg-black bg-opacity-10 rounded-2xl">
          <Animation className="w-full h-auto bg-white rounded-2xl p-[20px] mx-[10px] mb-[10px] flex flex-col">
            <h1 className="font-mainFont font-medium text-[18px] desktop1:text-paragraph5 desktop2:text-[20px] mb-[10px]">
              {title}
            </h1>
            <p className="font-secondFont text-paragraph3 desktop1:text-paragraph4 text-quaternary mb-[28px]">
              {description}
            </p>
            <div>
              <Animation>
                <Button
                  label={buttonLabel}
                  buttonLink={buttonLink}
                  color={buttonColor}
                  className="text-white"
                  size="small"
                  onClick={onClick}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </Animation>
            </div>
          </Animation>
        </div>
      </div>
    </Animation>
  );
}
