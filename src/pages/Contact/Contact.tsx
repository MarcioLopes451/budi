import { useState, useEffect } from "react";
import MainButton from "../../components/MainButton/MainButton";

export default function Contact() {
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
    <section className="w-full">
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-white font-Recoleta text-5xl">
            <span className="text-Rojo">contact </span> us
          </p>
          <p className="text-white">
            In our members only area you’ll find you can chat to your matches
          </p>
        </div>
      </div>
      <div className="bg-SeaShell text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <form>
            <label className="text-Rojo font-Recoleta text-2xl">name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-Thistle py-2 border-black border"
            />
            <br />
            <br />
            <label className="text-Rojo font-Recoleta text-2xl">email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-Thistle py-2 border-black border"
            />
            <br />
            <br />
            <label className="text-Rojo font-Recoleta text-2xl">
              your story
            </label>
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="border-black border h-[341px] mt-5 rounded-xl bg-Thistle p-3 w-full"
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
      </div>
    </section>
  );
}
