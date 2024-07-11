import { useState } from "react";

type checkboxProps = {
  bgColor: string;
  checkmarkColor: string;
};

export default function CustomCheckbox2({
  bgColor,
  checkmarkColor,
}: checkboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="inline-block">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={""}
        className={`w-5 h-5 ${
          checked ? bgColor : bgColor
        } flex items-center justify-center cursor-pointer`}
      >
        {checked && <span className={`text-xs ${checkmarkColor}`}>✔</span>}
      </label>
    </div>
  );
}
