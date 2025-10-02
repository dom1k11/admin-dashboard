import trashBin from "../../assets/trashbin.svg";
import lock from "../../assets/lock.svg";
import unlock from "../../assets/unlock.svg";
import { NavbarProps } from "../../types/navbarProps";
import NavbarButton from "./NavbarButton";

const Navbar = ({
  removeUnverified,
  removeSelected,
  blockSelected,
  unblockSelected,
  hasSelection,
  hasBlockedSelection
}: NavbarProps) => {
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
      </div>
    </nav>
  );
};

export default Navbar;
