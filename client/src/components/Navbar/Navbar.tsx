import trashBin from "../../assets/trashbin.svg";
import lock from "../../assets/lock.svg";
import unlock from "../../assets/unlock.svg";

type NavbarProps = {
  removeUnverified: () => void;
};

const Navbar = ({ removeUnverified }: NavbarProps) => {
  return (
    <nav>
      <div className="btn-toolbar mb-3">
        <button className="btn btn-danger me-2" disabled>
          <img className="icon" src={lock} />
          Block
        </button>
        <button className="btn btn-success me-2">
          <img className="icon" src={unlock} />
          Unblock
        </button>
        <button className="btn btn-outline-danger me-2">
          <img className="icon" src={trashBin} />
        </button>
        <button
          onClick={removeUnverified}
          className="btn btn-outline-danger me-2"
        >
          <img className="icon" src={trashBin} />
          Unverified
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
