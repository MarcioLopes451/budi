import { useState, useEffect } from "react";
import MainButton from "../MainButton/MainButton";

export default function ShareStory() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [story, setStory] = useState<string>("");
  const [cols, setCols] = useState<number>(50);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCols(30);
      } else {
        setCols(80);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px]">
      <div className="flex justify-center items-center flex-col gap-5">
        <p className="text-Rojo font-Recoleta text-5xl">share your story</p>
        <p className="text-white">
          If you would like to share your story to help others see ‘what it’s
          like’ you can fill in the form below.
          <br />
          <br />
          You can share anonymously or include your name, if you would like.{" "}
          <br />
          <br />
          All we ask is that you are open, honest and supportive to others who
          might be going through the same thing
        </p>
      </div>
      <form className="flex justify-start items-center flex-col mt-10 md:px-[50px] lg:items-start">
        <label className="text-Rojo font-Recoleta text-2xl">name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl bg-white py-2 border-black border lg:w-[70%] xl:w-[55%]"
        />
        <br />
        <br />
        <label className="text-Rojo font-Recoleta text-2xl">email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-white py-2 border-black border lg:w-[70%] xl:w-[55%]"
        />
        <br />
        <br />
        <label className="text-Rojo font-Recoleta text-2xl">your story</label>
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className="border-black border h-[341px] mt-5 rounded-xl bg-white p-3 w-full lg:w-[70%] xl:w-[55%]"
          cols={cols}
          name="message"
        ></textarea>

        <br />
        <br />
        <div className="flex justify-center items-center">
          <MainButton text="send" bgColor="bg-Rojo" link="" />
        </div>
      </form>
    </div>
  );
}
