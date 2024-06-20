import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  bgColor?: string;
};
export default function MainButton({ text, bgColor }: ButtonProps) {
  return (
    <Link
      to="/"
      className={`w-[250px] text-white py-[15px] text-center rounded-[20px] font-bold uppercase text-lg ${bgColor}`}
    >
      {text}
    </Link>
  );
}
