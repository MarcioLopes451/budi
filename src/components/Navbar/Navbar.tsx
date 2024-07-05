import Logo from "../../images/blackLogo.png";
import UserImg from "../../images/1564534_customer_man_user_account_profile_icon (1).png";
import MobileMenuImg from "../../images/4781852_burger_line_list_menu_nav_icon.png";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-SeaShell h-[120px] px-[24px] pt-[30px] md:px-[50px] w-full lg:h-[150px] lg:px-[110px] xl:px-[150px]">
      <div className="flex justify-between items-center lg:justify-center">
        <img src={UserImg} className="w-[40px] lg:hidden" />
        <img src={Logo} className="w-[110px]" />
        <img
          src={MobileMenuImg}
          className="w-[40px] lg:hidden"
          onClick={handleClick}
        />
      </div>
      <div className="mt-5">
        <div className="hidden lg:flex justify-between items-center gap-5 w-full xl:px-[130px]">
          <Link to="/budi/">what we do</Link>
          <Link to="/budi/findabudi">find a budi</Link>
          <Link to="/budi/beabudi">be a budi</Link>
          <Link to="/budi/ourstory">our story</Link>
          <Link to="/budi/contact">contact us</Link>
          <Link to="/budi/realstories">real stories</Link>
        </div>
      </div>
      {<MobileNav isOpen={open} onClose={handleClick} />}
    </div>
  );
}
