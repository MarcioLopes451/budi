import EndoImg from "../../images/ENDO IMG.jpg";
import HysterectomyImg from "../../images/hysterectomy img.jpg";
import EggsImg from "../../images/eggs img.jpg";
import IVFImg from "../../images/IVF IMG.jpg";
import MainButton from "../../components/MainButton/MainButton";
import ShareStory from "../../components/ShareStory/ShareStory";

const stories = [
  {
    img: EndoImg,
    illness: "getting endo diagnosed?",
    text: "Hannah opens up about her experience with getting diagnosed with endometriosis.",
  },
  {
    img: EggsImg,
    illness: "getting your eggs frozen?",
    text: "Adele tells her experience of not being quite ready for kids and having her eggs frozen.",
  },
  {
    img: IVFImg,
    illness: "having IVF to get pregnant?",
    text: "Rachel opens up about her experience with having IVF.",
  },
  {
    img: HysterectomyImg,
    illness: "having a hysterectomy?",
    text: "Rachel opens up about her experience with having a hysterectomy when she was 30.",
  },
];

export default function RealStories() {
  return (
    <section className="w-full">
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px]">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-Rojo font-Recoleta text-5xl">what’s it like?</p>
          <p className="text-white">
            Wondering ‘what is it like having....’ These are honest, open and
            real life experiences from people who have been there
          </p>
        </div>
      </div>
      <div className="bg-SeaShell text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px]">
        <div className="flex justify-center items-center flex-col gap-5 lg:flex-row flex-wrap lg:justify-between">
          {stories.map((story, id) => (
            <div
              key={id}
              className="flex justify-center items-center flex-col gap-3 w-[300px]"
            >
              <img src={story.img} className="rounded-xl w-[300px]" />
              <p className="font-Recoleta text-3xl text-Thistle">
                what’s it like...
              </p>
              <p className="text-Rojo font-Recoleta text-4xl">
                {story.illness}
              </p>
              <p>{story.text}</p>
              <MainButton text="find out now" bgColor="bg-Rojo" link="" />
            </div>
          ))}
        </div>
      </div>
      <ShareStory />
    </section>
  );
}
