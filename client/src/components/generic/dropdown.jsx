import * as React from "react";
import { Menu, MenuItem } from "@mui/material";

const FMNDropdown = ({ items, anchorEl, handleClose, disabled }) => {
  if (disabled) return null;
  const open = Boolean(anchorEl);

  return (
    <div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((item) => (
          <MenuItem
            key={item.value}
            disabled={item.isDisabled}
            onClick={() => {
              handleClose();
              item.onClick();
            }}
            className="text-gray-500 hover:text-gray-400 w-[150px] h-[30px] rounded-md flex items-center justify-center"
          >
            {item.icon && <item.icon className="mr-2" />}
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FMNDropdown;
