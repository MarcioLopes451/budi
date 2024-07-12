type checkboxProps = {
  bgColor: string;
  checkmarkColor: string;
  checked: boolean;
  onChange: () => void;
  border?: string;
};

export default function CustomCheckbox2({
  bgColor,
  checkmarkColor,
  checked,
  onChange,
  border,
}: checkboxProps) {
  return (
    <div className="inline-block">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        id="custom-checkbox"
      />
      <label
        htmlFor="custom-checkbox"
        className={`w-5 h-5 ${
          checked ? bgColor : bgColor
        } flex items-center justify-center cursor-pointer border-black ${border}`}
      >
        {checked && <span className={`text-xs ${checkmarkColor}`}>✔</span>}
      </label>
    </div>
  );
}
