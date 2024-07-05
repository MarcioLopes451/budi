import { useState, useEffect } from "react";
import MainButton from "../MainButton/MainButton";

export default function Illness() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {width >= 768 ? (
        <div className="flex justify-center items-center gap-x-[50px] gap-y-8 flex-row w-full flex-wrap mt-5">
          <MainButton
            text="ENDOMETRIOSIS"
            bgColor="bg-Rojo md:bg-Pink"
            link="/"
          />
          <MainButton
            text="HYSTERECTOMY"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />
          <MainButton text="PCOS" bgColor="bg-Rojo md:bg-Pink" link="" />
          <MainButton
            text="EARLY MENOPAUSE"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />
          <MainButton
            text="CANCER DIAGNOSIS"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />

          <MainButton text="INFERTILITY" bgColor="bg-Rojo md:bg-Pink" link="" />
          <MainButton text="PMDD" bgColor="bg-Rojo md:bg-Pink" link="" />
          <MainButton
            text="POST NATAL DEPRESSION"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />
          <MainButton
            text="EGG FREEZING"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-5 md:flex-row md:items-center md:justify-center w-full flex-wrap md:gap-x-40">
          <MainButton
            text="ENDOMETRIOSIS"
            bgColor="bg-Rojo md:bg-Pink"
            link="/"
          />
          <MainButton
            text="HYSTERECTOMY"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />
          <MainButton text="PCOS" bgColor="bg-Rojo md:bg-Pink" link="" />
          <MainButton
            text="EARLY MENOPAUSE"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />
          <MainButton
            text="CANCER DIAGNOSIS"
            bgColor="bg-Rojo md:bg-Pink"
            link=""
          />
        </div>
      )}
    </div>
  );
}
