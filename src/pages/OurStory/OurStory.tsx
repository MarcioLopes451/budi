import MainButton from "../../components/MainButton/MainButton";
import CEOImg from "../../images/Liverpool April 2021-71.jpg";

export default function OurStory() {
  return (
    <section className="w-full">
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-white font-Recoleta text-5xl">
            <span className="text-Rojo"> hey</span> i’m rachel
          </p>
          <p className="text-white">
            I’ve been through some serious health issues; from finding out I
            would never conceive naturally to a rare type of ovarian cancer that
            led to a full hysterectomy and being forced into the menopause, by
            the age of 30.
          </p>
          <img src={CEOImg} className="rounded-xl" />
        </div>
      </div>

      <div className="bg-SeaShell pt-[50px] px-[24px] pb-10 -mt-20">
        <div className="flex justify-center items-center flex-col gap-5 text-center">
          <p>
            ...but i haven’t let it hold me back. Instead i decided i would
            support others going through these taboo women’s health issues, so
            they would feel less alone. <br /> <br />I video recorded my
            hysterectomy recovery, started a blog on women’s health and
            eventually a supplement brand targeting women’s health.
          </p>
          <p className="text-Pink font-Recoleta text-5xl">
            <span className="text-Rojo">together</span> we are stronger
          </p>
          <p>
            The first thing I did when I got a diagnoses for borderline ovarian
            cancer (apart from cry into a pillow for 5-7 days) was google. I
            joined facebook groups, read webMD like it was going out of fashion
            and sought advice from anywhere I could. <br /> <br />I wish someone
            had given me a budi to share their experience with me. That’s why i
            created something that would help others feel less alone. Enter
            budi.
          </p>
          <p className="font-bold">
            I really do believe that together we are stronger.
          </p>
        </div>
      </div>

      <div className="bg-Thistle text-center pt-[30px] px-[24px] pb-10">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-white font-Recoleta text-5xl">
            <span className="text-Rojo">support</span> from me
          </p>
          <p className="text-white">
            I blog and TikTok a lot on my health experiences, which you can find
            here. Come say hi!
          </p>
          <MainButton text="tiktok" bgColor="bg-Rojo" link="/" />
          <MainButton text="blog" bgColor="bg-Rojo" link="/" />
        </div>
      </div>
    </section>
  );
}
