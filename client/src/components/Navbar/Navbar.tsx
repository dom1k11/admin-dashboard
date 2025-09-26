import trashBin from "../../assets/trashbin.svg";
import lock from "../../assets/lock.svg";
import unlock from "../../assets/unlock.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="btn-toolbar mb-3">
        <button className="btn btn-danger me-2" disabled={true}>
          <img className="icon" src={lock}></img>
          Block
        </button>
        <button className="btn btn-success me-2" disabled={false}>
          <img className="icon" src={unlock}></img>
          Unblock
        </button>
        <button className="btn btn-outline-danger me-2" disabled={false}>
          <img className="icon" src={trashBin}></img>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
