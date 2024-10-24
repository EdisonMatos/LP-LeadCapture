import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function HowItWorksCard({
  number,
  title,
  description,
  animation = true,
}) {
  const Content = (
    <div className="flex flex-col items-center justify-center transition desktop1:items-start font-mainFont desktop1:hover:scale-110 h-auto">
      <div className="bg-primary mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-secondary text-title1 font-semibold">
        {number}
      </div>
      <h1 className="text-[20px] text-lighter font-bold mb-[24px]">{title}</h1>
      <p className="text-[16px] text-lighter opacity-70 text-center desktop1:text-left w-full">
        {description}
      </p>
    </div>
  );

  const ContentStatic = (
    <div className="flex flex-col items-center justify-center tablet1:w-[45%] transition desktop1:items-start font-mainFont desktop1:hover:scale-110 h-auto">
      <div className="bg-primary mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-secondary text-title1 font-semibold">
        {number}
      </div>
      <h1 className="text-[20px] text-lighter font-bold mb-[24px]">{title}</h1>
      <p className="text-[16px] text-lighter opacity-70 text-center desktop1:text-left w-full">
        {description}
      </p>
    </div>
  );

  return animation ? (
    <MotionDivDownToUp className="tablet1:w-[45%]">{Content}</MotionDivDownToUp>
  ) : (
    ContentStatic
  );
}
