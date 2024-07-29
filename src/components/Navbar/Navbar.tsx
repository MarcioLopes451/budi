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

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-SeaShell h-[120px] px-[24px] pt-[30px] md:px-[50px] w-full lg:h-[150px] lg:px-[110px] xl:px-[150px] fixed">
      <div className="flex justify-between items-center lg:justify-center">
        <Link to="/budi/login" onClick={scrollUp}>
          <img src={UserImg} className="w-[40px] lg:hidden" />
        </Link>
        <img src={Logo} className="w-[110px]" />
        <img
          src={MobileMenuImg}
          className="w-[40px] lg:hidden"
          onClick={handleClick}
        />
      </div>
      <div className="mt-5">
        <div className="hidden lg:flex justify-between items-center gap-5 w-full xl:px-[130px]">
          <Link to="/budi/" onClick={scrollUp}>
            what we do
          </Link>
          <Link to="/budi/findabudi" onClick={scrollUp}>
            find a budi
          </Link>
          <Link to="/budi/beabudi" onClick={scrollUp}>
            be a budi
          </Link>
          <Link to="/budi/ourstory" onClick={scrollUp}>
            our story
          </Link>
          <Link to="/budi/contact" onClick={scrollUp}>
            contact us
          </Link>
          <Link to="/budi/realstories" onClick={scrollUp}>
            real stories
          </Link>
        </div>
      </div>
      {<MobileNav isOpen={open} onClose={handleClick} />}
    </div>
  );
}
