import MainButton from "../../components/MainButton/MainButton";
import OurRemedyImg from "../../images/Logo_dark purple_website.png";

export default function Home() {
  return (
    <>
      {" "}
      {/* Home first Section */}
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-Rojo font-Recoleta text-5xl">
            connecting people who’ve been through{" "}
            <span className="text-white">similar health experiences </span>
          </p>
          <MainButton text="find a budi" bgColor="bg-Jet" />
          <MainButton text="be a budi" bgColor="bg-Jet" />
        </div>
      </div>
      {/* Home second Section */}
      <div className="bg-SeaShell text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-Thistle font-Recoleta text-5xl">
            <span className="text-Rojo">together </span>
            we are stronger
          </p>
          <MainButton text="ENDOMETRIOSIS" bgColor="bg-Rojo" />
          <MainButton text="HYSTERECTOMY" bgColor="bg-Rojo" />
          <MainButton text="PCOS" bgColor="bg-Rojo" />
          <MainButton text="EARLY MENOPAUSE" bgColor="bg-Rojo" />
          <MainButton text="CANCER DIAGNOSIS" bgColor="bg-Rojo" />
          <p>
            Connecting people who have been through similar health experiences
            so those feeling alone and confused can find a friend.{" "}
            <span className="font-bold">
              Together we can find the strength and support to shine.{" "}
            </span>
          </p>
        </div>
      </div>
      {/*Home third Section */}
      <div className="bg-Thistle text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-Rojo font-Recoleta text-5xl"> our vision</p>
          <p>
            Many people leave hospitals and doctors’ offices feeling confused
            and isolated, often resorting to impersonal online searches for
            answers. <br /> <br />
            At budi, we aspire to fill the void between{" "}
            <span className="font-bold">
              {" "}
              medical professionals and between medical professionals and
              bewildered patients.
            </span>{" "}
            <br /> <br />
            Our platform connects people with shared health journeys, creating a
            supportive community where they can find solace, guidance, and
            genuine empathy. <br /> <br />
            We envision a world where{" "}
            <span className="font-bold">
              {" "}
              no one faces health challenges alone.
            </span>
          </p>
          <MainButton text="find a budi" bgColor="bg-Jet" />
          <MainButton text="be a budi" bgColor="bg-Jet" />
        </div>
      </div>
      {/*Home newsletter Section */}
      <div className="bg-SeaShell text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-Thistle font-Recoleta text-5xl">
            our amazing <span className="text-Rojo">sponsors</span>
          </p>
          <p>
            This platform is <span className="font-bold"> totally free</span>{" "}
            for you to use. Our amazing sponsors help keep this going. From time
            to time we share with you amazing offers, women’s health events
            their hosting or hormone hacks they’ve discovered. Sign up to join
            our community to be the first to know.
          </p>
          <img src={OurRemedyImg} className="w-[150px]" />
          <input
            type="text"
            className="w-full rounded-xl bg-Thistle py-2 border-black border"
          />
          <label>
            {" "}
            <input type="checkbox" name="checkbox" id="checkbox" />
            I’m happy to hear from budi (we won’t share your data with anyone
            else)
          </label>
          <MainButton text="join now" bgColor="bg-Rojo" />
        </div>
      </div>
    </>
  );
}
