import MainButton from "../MainButton/MainButton";

export default function Footer() {
  return (
    <div className="bg-SeaShell pt-[30px] pb-10 px-[24px]">
      <div className="flex justify-center items-center flex-col gap-5">
        <div className="flex justify-center items-center flex-col gap-2 text-center">
          <p className="text-Rojo font-Recoleta text-5xl">about</p>
          <p>budi (reg. XXXXXXX)</p>
          <p>10 Towerfield Road, Shoeburyness, Essex, SS3 9QE</p>
          <p>hello@heybudi.co.uk</p>
          <p>07791036497</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center w-full">
          <p className="text-Rojo font-Recoleta text-5xl">help</p>
          <div className="flex justify-between items-center w-full px-4">
            {" "}
            {/* Added px-4 for padding */}
            <div className="flex items-center flex-col gap-3">
              <p>contact us</p>
              <p>cookies</p>
              <p>terms and conditions</p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <p>privacy policy</p>
              <p>real life stories</p>
              <p>my account</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-center items-center gap-5 flex-col">
            <p className="text-Rojo font-Recoleta text-5xl">join us</p>
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
      </div>
    </div>
  );
}
