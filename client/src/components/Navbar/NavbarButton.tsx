import { NavbarButtonProps } from "../../types/NavbarButtonProps";
const NavbarButton = ({
  onClick,
  icon,
  label,
  variant,
  disabled,
}: NavbarButtonProps) => (
  <button
    onClick={onClick}
    className={`btn ${variant} me-2`}
    disabled={disabled}
  >
    <img className="icon" src={icon} />
    {label}
  </button>
);

export default NavbarButton;
