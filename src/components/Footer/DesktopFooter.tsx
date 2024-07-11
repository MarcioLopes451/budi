import CustomCheckbox2 from "../CustomCheckbox/CustomCheckbox2";
import MainButton from "../MainButton/MainButton";

export default function DesktopFooter() {
  return (
    <div className="bg-SeaShell pt-[30px] pb-10 px-[24px] md:px-[50px] lg:px-[110px]">
      <div className="flex justify-between items-start gap-5">
        <div className="flex justify-center items-start flex-col gap-2 text-left w-[200px]">
          <p className="text-Rojo font-Recoleta text-5xl">about</p>
          <p>budi (reg. XXXXXXX)</p>
          <p>10 Towerfield Road, Shoeburyness, Essex, SS3 9QE</p>
          <p>hello@heybudi.co.uk</p>
          <p>07791036497</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-left ">
          <p className="text-Rojo font-Recoleta text-5xl">help</p>
          <p>contact us</p>
          <p>cookies</p>
          <p>terms and conditions</p>
          <p>privacy policy</p>
          <p>real life stories</p>
          <p>my account</p>
        </div>
        <div>
          <div className="flex justify-start items-start gap-5 flex-col w-[350px]">
            <p className="text-Rojo font-Recoleta text-5xl">join us</p>
            <input
              type="text"
              className="w-[300px] rounded-xl bg-Thistle py-2 border-black border"
            />
            <div className="flex justify-start items-start gap-2">
              {" "}
              <CustomCheckbox2
                bgColor="bg-Thistle"
                checkmarkColor="text-white"
              />
              I’m happy to hear from budi (we won’t share your data with anyone
              else)
            </div>
            <MainButton text="join now" bgColor="bg-Rojo" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
