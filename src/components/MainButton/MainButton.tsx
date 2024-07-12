import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  bgColor?: string;
  link: string;
};
export default function MainButton({ text, bgColor, link }: ButtonProps) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Link
      to={link}
      className={`w-[250px] text-white py-[15px] text-center rounded-[20px] font-bold uppercase text-lg ${bgColor}`}
      onClick={scrollUp}
    >
      {text}
    </Link>
  );
}
