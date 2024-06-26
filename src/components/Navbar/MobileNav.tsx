import { Link } from "react-router-dom";

type Nav = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: Nav) {
  const closeNav = () => {
    return onClose();
  };
  return isOpen ? (
    <div className="bg-SeaShell mt-10 z-50 w-full fixed left-0 pb-10">
      <div className="flex justify-start items-start px-[24px] font-Poppins font-bold flex-col gap-5">
        <Link to="/budi/" onClick={closeNav}>
          what we do
        </Link>
        <Link to="/budi/findabudi" onClick={closeNav}>
          find a budi
        </Link>
        <Link to="/budi/beabudi" onClick={closeNav}>
          be a budi
        </Link>
        <Link to="/budi/ourstory" onClick={closeNav}>
          our story
        </Link>
        <Link to="/budi/contact" onClick={closeNav}>
          contact us
        </Link>
        <Link to="/budi/realstories" onClick={closeNav}>
          real stories
        </Link>
      </div>
    </div>
  ) : null;
}
