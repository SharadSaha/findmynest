const FMNSingleSelect = ({ size = "medium", ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500 text-sm required">
        {props.label || ""} {props.required && "*"}
      </span>
      <div className="relative">
        <select
          className={`appearance-none w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none ${size}`}
          onChange={(e) => props.setValue(e.target.value)}
          placeholder={props.placeholder || "Select"}
          value={props.value}
          {...props}
        >
          <option value="" disabled className="text-gray-800">
            Select
          </option>
          {props.options.map((option, index) => (
            <option key={index} value={option.value} className="text-gray-800">
              {option.value}
            </option>
          ))}
        </select>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-gray-500"
            viewBox="0 0 20 20"
          >
            <path d="M5.5 7l4.5 4 4.5-4h-9z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default FMNSingleSelect;
