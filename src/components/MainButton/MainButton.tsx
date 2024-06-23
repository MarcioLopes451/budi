import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  bgColor?: string;
  link: string;
};
export default function MainButton({ text, bgColor, link }: ButtonProps) {
  return (
    <Link
      to={link}
      className={`w-[250px] text-white py-[15px] text-center rounded-[20px] font-bold uppercase text-lg ${bgColor}`}
    >
      {text}
    </Link>
  );
}
