import MainButton from "../../components/MainButton/MainButton";

export default function FormSubmitted() {
  return (
    <section className="w-full">
      <div className="bg-Pink text-center pt-[30px] px-[24px] pb-28 md:px-[50px] lg:px-[110px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col gap-5 xl:px-[150px] mt-10">
          <p className="text-white font-Recoleta text-5xl xl:text-6xl">
            <span className="text-Rojo">thank you</span> so much
          </p>
          <p className="text-white">
            We’ll be in touch soon! In the meantime, visit our sister company,
            Our Remedy, where you’ll find blogs and videos around women’s health
            that you may find useful.
          </p>
          <div className="flex justify-center items-center flex-col gap-5 md:flex-row md:justify-between w-full">
            <MainButton text="tiktok" bgColor="bg-Rojo" link="/" />
            <MainButton text="blog" bgColor="bg-Rojo" link="/" />
          </div>
        </div>
      </div>
      <div className="bg-SeaShell text-center pt-[30px] px-[24px] pb-10 md:px-[50px] lg:px-[110px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col gap-5">
          <p className="text-Rojo font-Recoleta text-5xl">
            {" "}
            join our community
          </p>
          <p>
            Join our community for{" "}
            <span className="font-bold"> exclusive access</span> for exclusive
            offers from female wellness brands, hormone hacks and women’s health
            events.
          </p>
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
          <MainButton text="join now" bgColor="bg-Rojo" link="/" />
        </div>
      </div>
    </section>
  );
}
