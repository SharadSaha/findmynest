import * as React from "react";
import { Button as BaseButton } from "@mui/base/Button";

const buttonSizes = {
  small: "text-sm py-1 px-2",
  medium: "text-base py-2 px-4",
  large: "text-lg py-3 px-6",
};

const FMNButton = React.forwardRef(function Button(
  { size = "medium", ...props },
  ref
) {
  return (
    <BaseButton
      {...props}
      slotProps={{
        root: (state) => ({
          className: `border border-gray-500 hover:border-gray-500 ${
            buttonSizes[size]
          } rounded-lg font-semibold hover:text-gray-500 transition-colors ${
            state.focusVisible ? "outline-0 ring-2 ring-cyan-500" : ""
          } ${props.className}`,
        }),
      }}
      ref={ref}
    />
  );
});

export default FMNButton;
