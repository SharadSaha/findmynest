import * as React from "react";

const textBoxSizes = {
  small: "text-sm p-1",
  medium: "text-base p-2",
  large: "text-lg p-3",
};

const FMNTextBox = React.forwardRef(function TextBox(
  { size = "medium", ...props },
  ref
) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-700 required">
        {props.label || ""} {props.required && "*"}
      </span>
      <input
        type="text"
        className={`border border-black focus:border-gray-500 rounded-lg w-full focus:outline-none ${textBoxSizes[size]}`}
        placeholder={props.placeholder || "Enter"}
        {...props}
        ref={ref}
        value={props.value || ""}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
});

export default FMNTextBox;
