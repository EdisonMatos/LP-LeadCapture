import React, { useEffect, useState } from "react";
import AnimatedCounter from "../util/AnimatedCounter";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import SectionHeader from "../sectionElements/SectionHeader";

export default function Numbers() {
  const [yearsOfService, setYearsOfService] = useState(0);

  useEffect(() => {
    const startDate = new Date("2003-01-01");
    const currentDate = new Date();
    const differenceInYears =
      currentDate.getFullYear() - startDate.getFullYear();

    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      setYearsOfService(differenceInYears - 1);
    } else {
      setYearsOfService(differenceInYears);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-cover py-[40px] tablet1:py-[64px] desktop1:py-[96px]">
      <SectionHeader
        className="text-center"
        miniTitle="RESULTADOS"
        sectionHeaderTitle="Números que expressam competência"
        color="dark"
      />
      <div className="w-[90%] max-w-[1215px] gap-[46px] flex flex-col text-center desktop1:flex-row justify-between items-center text-primary">
        <div className=" flex flex-col items-center w-[90%] desktop1:w-[30%] ">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold ">
            <MotionDivDownToUp>
              <AnimatedCounter endValue={content.texts.numbers.number1} />+
            </MotionDivDownToUp>
          </h1>
          <p className=" font-secondFont text-paragraph4 text-black opacity-75 mt-[12px] desktop1:h-[20px] ">
            <MotionDivDownToUp>
              {content.texts.numbers.number1Description}
            </MotionDivDownToUp>
          </p>
        </div>
        <div className="flex flex-col items-center w-[90%] desktop1:w-[30%]">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold ">
            <MotionDivDownToUp>
              <AnimatedCounter endValue={content.texts.numbers.number2} />
              mil+
            </MotionDivDownToUp>
          </h1>
          <p className="font-secondFont text-paragraph4 text-black opacity-75 mt-[12px] desktop1:h-[20px] ">
            <MotionDivDownToUp>
              {content.texts.numbers.number2Description}
            </MotionDivDownToUp>
          </p>
        </div>
        <div className="flex flex-col items-center w-[90%] desktop1:w-[30%]">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold ">
            <MotionDivDownToUp>
              <AnimatedCounter endValue={content.texts.numbers.number3} />+
            </MotionDivDownToUp>
          </h1>
          <p className="font-secondFont text-paragraph4 text-black opacity-75 mt-[12px] desktop1:h-[20px]">
            <MotionDivDownToUp>
              {content.texts.numbers.number3Description}
            </MotionDivDownToUp>
          </p>
        </div>
      </div>
    </div>
  );
}
