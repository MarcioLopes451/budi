import Logo from "../../images/blackLogo.png";
import UserImg from "../../images/1564534_customer_man_user_account_profile_icon (1).png";
import MobileMenuImg from "../../images/4781852_burger_line_list_menu_nav_icon.png";
export default function Navbar() {
  return (
    <div className="bg-SeaShell h-[120px] px-[24px] pt-[30px]">
      <div className="flex justify-between items-center">
        <img src={UserImg} className="w-[40px]" />
        <img src={Logo} className="w-[110px]" />
        <img src={MobileMenuImg} className="w-[40px]" />
      </div>
    </div>
  );
}
