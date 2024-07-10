type checkboxProps = {
  bgColor: string;
  checkmarkColor: string;
  checked: boolean;
  onChange: () => void;
  id: string;
};
export const CustomCheckbox = ({
  bgColor,
  checkmarkColor,
  checked,
  onChange,
  id,
}: checkboxProps) => {
  return (
    <div className="inline-block">
      <input
        type="checkbox"
        id={id}
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`w-5 h-5 ${
          checked ? bgColor : bgColor
        } flex items-center justify-center cursor-pointer`}
      >
        {checked && <span className={`text-xs ${checkmarkColor}`}>✔</span>}
      </label>
    </div>
  );
};

export default CustomCheckbox;
