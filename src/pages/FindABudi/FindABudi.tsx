import { useState } from "react";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import MainButton from "../../components/MainButton/MainButton";
import { budioptions, locationOptions } from "../../data/data";
import CustomCheckbox2 from "../../components/CustomCheckbox/CustomCheckbox2";

export default function FindABudi() {
  const [checkedBudi, setCheckedBudi] = useState<boolean[]>(
    new Array(budioptions.length).fill(false)
  );
  const [checkedLocation, setCheckedLocation] = useState<boolean[]>(
    new Array(locationOptions.length).fill(false)
  );

  const handleCheckboxBudiChange = (index: number) => {
    const updatedCheckedState = [...checkedBudi];
    updatedCheckedState[index] = !updatedCheckedState[index];
    setCheckedBudi(updatedCheckedState);
  };
  const handleCheckboxLocationChange = (index: number) => {
    const updatedCheckedState = [...checkedLocation];
    updatedCheckedState[index] = !updatedCheckedState[index];
    setCheckedLocation(updatedCheckedState);
  };

  return (
    <section className="w-full">
      {/* Intro */}
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:py-20">
        <div className="flex justify-center items-center flex-col gap-5 xl:px-[150px]">
          <p className="text-white font-Recoleta text-5xl lg:text-6xl">
            <span className="text-Rojo">let’s find</span> you a budi
          </p>
          <p className="text-white xl:mt-5">
            Health issues are tough, no one should face them alone. Answer a few
            questions and we will get to work finding you a budi.
          </p>
          <p className="text-white font-bold">
            We’ll email you when we have a match.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-SeaShell pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px] xl:py-20">
        <div className="flex justify-center items-center flex-col gap-5 text-center">
          <label className="text-Rojo font-Recoleta text-3xl xl:text-[44px]">
            firstly, what’s your name?
          </label>

          <input
            type="text"
            className="w-full rounded-[20px] bg-Thistle py-2 border-black border xl:h-[70px]"
          />
          <label className="text-Rojo font-Recoleta text-3xl xl:text-[44px] xl:mt-10">
            what would you love to chat to a budi about?
          </label>
          <p>Select up to 3</p>
          {/* mobile & tablet select input */}
          <select
            id="budi"
            className="w-full rounded-xl bg-Thistle py-2 border-black border lg:hidden"
          >
            {budioptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* desktop checkbox input */}
          <div className="hidden lg:grid grid-cols-3 gap-4 p-4 w-full xl:px-[150px]">
            {budioptions.map((option, index) => (
              <div
                key={index}
                className="flex justify-start items-center gap-2"
              >
                <CustomCheckbox
                  bgColor="bg-Thistle"
                  checkmarkColor="text-white"
                  checked={checkedBudi[index]}
                  onChange={() => handleCheckboxBudiChange(index)}
                  id={`custom-checkbox-${index}`}
                />
                <p className="text-sm xl:text-[16px]">{option}</p>
              </div>
            ))}
          </div>
          <label className="text-Rojo font-Recoleta text-3xl xl:text-[44px] xl:mt-10">
            not on there?
          </label>
          <p>let us know and we’ll do out best to find you a budi</p>
          <input
            type="text"
            className="w-full rounded-[20px] bg-Thistle py-2 border-black border xl:h-[70px]"
          />
        </div>
      </div>

      {/* Location form */}
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col gap-5 text-center">
          <label className="text-Rojo font-Recoleta text-3xl xl:text-[44px] xl:mt-10">
            where are you based?
          </label>
          <p className="text-white">
            <span className="font-bold">This is optional, </span>
            but if you get on with your budi it would be lovely to be able to
            meet for a coffee!
          </p>
          <select
            id="locations"
            className="w-full rounded-xl bg-Thistle py-2 border-black border lg:hidden"
          >
            {locationOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="hidden lg:grid grid-cols-3 gap-3 p-4 w-full xl:px-[150px]">
            {locationOptions.map((option, index) => (
              <div
                key={index}
                className="flex justify-start items-center gap-2"
              >
                <CustomCheckbox
                  bgColor="bg-white"
                  checkmarkColor="text-Thistle"
                  checked={checkedLocation[index]}
                  onChange={() => handleCheckboxLocationChange(index)}
                  id={`custom-checkbox-location-${index}`}
                />
                <p className="text-sm xl:text-[16px]">{option}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Form */}
      <div className="bg-SeaShell pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col gap-5 text-center">
          <label className="text-Rojo font-Recoleta text-3xl xl:text-[44px] xl:mt-10">
            what’s your email?
          </label>
          <p>We’ll contact you when we find the perfect budi for you</p>
          <input
            type="text"
            className="w-full rounded-[20px] bg-Thistle py-2 border-black border xl:h-[70px]"
          />
          <div className="flex justify-start items-center gap-2">
            {" "}
            <CustomCheckbox2 bgColor="bg-Thistle" checkmarkColor="text-white" />
            Happy to hear from our sister company Our Remedy a female focused
            wellness brand?
          </div>
          <MainButton
            text="find my budi!"
            bgColor="bg-Rojo"
            link="/budi/formsubmitted"
          />
        </div>
      </div>
    </section>
  );
}
