import MainButton from "../../components/MainButton/MainButton";
import { budioptions } from "../../data/data";
import { locationOptions } from "../../data/data";

export default function FindABudi() {
  return (
    <section className="w-full">
      {/* Intro */}
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px]">
        <div className="flex justify-center items-center flex-col gap-5 xl:px-[150px]">
          <p className="text-white font-Recoleta text-5xl lg:text-6xl">
            <span className="text-Rojo">let’s find</span> you a budi
          </p>
          <p className="text-white">
            Health issues are tough, no one should face them alone. Answer a few
            questions and we will get to work finding you a budi.
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
          <div className="hidden lg:grid grid-cols-3 gap-4 p-4">
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
          <p>let us know and we’ll do out best to find you a budi</p>
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
          <div className=" hidden lg:grid grid-cols-3 gap-4 p-4">
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
            text="find my budi!"
            bgColor="bg-Rojo"
            link="/budi/formsubmitted"
          />
        </div>
      </div>
    </section>
  );
}
