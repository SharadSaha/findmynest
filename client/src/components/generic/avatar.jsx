import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";

const avatarSizes = {
  small: 20,
  medium: 30,
  large: 40,
};

const StyledAvatar = styled(Avatar)`
  background-color: rgba(128, 128, 128, 0.4);
  border: 4px solid rgba(128, 128, 128, 0.12);
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  width: ${({ size }) => avatarSizes[size]}px;
  height: ${({ size }) => avatarSizes[size]}px;

  &:hover {
    box-shadow: 0 0 0 4px rgba(128, 128, 128, 0.12);
  }
`;

const FMNAvatar = ({ size = "medium", ...props }) => {
  return <StyledAvatar size={size} {...props} />;
};

export default FMNAvatar;
