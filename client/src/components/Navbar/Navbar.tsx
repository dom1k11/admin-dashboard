import trashBin from "../../assets/trashbin.svg";
import lock from "../../assets/lock.svg";
import unlock from "../../assets/unlock.svg";
import { NavbarProps } from "../../types/navbarProps";
import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  removeUnverified,
  removeSelected,
  blockSelected,
  unblockSelected,
  hasSelection,
  hasBlockedSelection,
}: NavbarProps) => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="btn-toolbar mb-3">
        <NavbarButton
          onClick={blockSelected}
          icon={lock}
          label="Block"
          variant="btn-danger"
          disabled={!hasSelection}
        />
        <NavbarButton
          onClick={unblockSelected}
          icon={unlock}
          label="Unblock"
          variant="btn-success"
          disabled={!hasBlockedSelection}
        />
        <NavbarButton
          onClick={removeSelected}
          icon={trashBin}
          variant="btn-outline-danger"
          disabled={!hasSelection}
        />
        <NavbarButton
          onClick={removeUnverified}
          icon={trashBin}
          label="Unverified"
          variant="btn-outline-danger"
        />
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
