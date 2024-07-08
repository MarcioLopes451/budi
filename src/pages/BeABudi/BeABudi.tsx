import MainButton from "../../components/MainButton/MainButton";
import { budioptions } from "../../data/data";
import { locationOptions } from "../../data/data";

export default function BeABudi() {
  return (
    <section className="w-full">
      {/* Intro */}
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px]">
        <div className="flex justify-center items-center flex-col gap-5 xl:px-[150px]">
          <p className="text-white font-Recoleta text-5xl">
            <span className="text-Rojo">you’re a </span>good person
          </p>
          <p className="text-white">
            You’ll just taken the first step to doing something incredibly kind.
            Sharing your experience with someone who’s struggling will be
            priceless. Fill in the form below to get started.
          </p>
          <p className="text-white font-bold">
            We’ll email you when we have a match.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-SeaShell pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col gap-5 text-center">
          <label className="text-Rojo font-Recoleta text-3xl">
            firstly, what’s your name?
          </label>
          <input
            type="text"
            className="w-full rounded-xl bg-Thistle py-2 border-black border"
          />
          <label className="text-Rojo font-Recoleta text-3xl">
            what experience do you have that could help someone?
          </label>
          <p>Select up to 3</p>
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
                <input type="checkbox" value={option} />
                <p className="text-xs">{option}</p>
              </div>
            ))}
          </div>
          <label className="text-Rojo font-Recoleta text-3xl">
            not on there?
          </label>
          <p>let us know, it could still be really helpful to someone</p>
          <input
            type="text"
            className="w-full rounded-xl bg-Thistle py-2 border-black border"
          />
        </div>
      </div>

      {/* Location form */}
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col gap-5 text-center">
          <label className="text-Rojo font-Recoleta text-3xl">
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
          <div className=" hidden lg:grid grid-cols-3 gap-4 p-4 w-full xl:px-[150px]">
            {locationOptions.map((option, index) => (
              <div
                key={index}
                className="flex justify-start items-center gap-2"
              >
                <input type="checkbox" value={option} />
                <p className="text-xs">{option}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Form */}
      <div className="bg-SeaShell pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col gap-5 text-center">
          <label className="text-Rojo font-Recoleta text-3xl">
            what’s your email?
          </label>
          <p>We’ll contact you when we find the perfect budi for you</p>
          <input
            type="text"
            className="w-full rounded-xl bg-Thistle py-2 border-black border"
          />
          <label>
            {" "}
            <input type="checkbox" name="checkbox" id="checkbox" />
            Happy to hear from our sister company Our Remedy a female focused
            wellness brand?
          </label>
          <MainButton
            text="be a budi!"
            bgColor="bg-Rojo"
            link="/budi/formsubmitted"
          />
        </div>
      </div>
    </section>
  );
}
