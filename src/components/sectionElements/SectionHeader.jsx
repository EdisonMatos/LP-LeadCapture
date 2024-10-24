import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function SectionHeader({
  sectionHeaderTitle,
  sectionHeaderSubtitle,
  className,
  titleColor,
  subtitleColor,
  miniTitle,
  miniTitleSpace,
  color,
  miniTitleBgColor,
  miniTitleTextColor,
  usage,
  type,
  titleOrientation,
  subtitleOrientation,
  miniTitleOrientation,
  marginBottomOption,
  animation = true,
}) {
  if (color === "dark") {
    miniTitleBgColor = "bg-secondary bg-opacity-5";
    miniTitleTextColor = "text-secondary";
    titleColor = "text-secondary";
    subtitleColor = "text-darker opacity-70";
  } else {
    miniTitleBgColor = "bg-lighter bg-opacity-10";
    miniTitleTextColor = "text-lighter";
    titleColor = "text-lighter";
    subtitleColor = "text-lighter text-opacity-80";
  }

  if (type === "article") {
    usage = "w-full flex flex-col";
    miniTitleSpace = "w-full flex-start text-left";
    titleOrientation = "text-left";
    subtitleOrientation = "text-left";
    marginBottomOption = "mb-[26px] tablet1:mb-[40px] desktop1:mb-[32px]";
  } else {
    usage = "w-[90%] tablet1:w-[80%] desktop1:w-[60%] max-w-[920px]";
    marginBottomOption = "mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]";
  }

  const Content = (
    <div className={`${usage} ${className}`}>
      <div>
        <div className={`${miniTitleSpace}`}>
          <div
            className={`py-[4px] font-semibold px-[12px] text-paragraph2 rounded-2xl inline-block mb-[16px] ${miniTitleOrientation} ${miniTitleBgColor}`}
          >
            <p className={`${miniTitleTextColor} uppercase`}>{miniTitle}</p>
          </div>
        </div>
        <h1
          className={`${titleColor} ${titleOrientation} text-title4 leading-[34px] tablet1:leading-[42px] tablet1:text-title5 font-mainFont font-bold mb-[16px]`}
        >
          {sectionHeaderTitle}
        </h1>
        <p
          className={`text-title1 font-secondFont leading-[26px] ${marginBottomOption} ${subtitleOrientation} ${subtitleColor}`}
        >
          {sectionHeaderSubtitle}
        </p>
      </div>
    </div>
  );

  return animation ? <MotionDivDownToUp className="w-full flex justify-center">{Content}</MotionDivDownToUp> : Content;
}
