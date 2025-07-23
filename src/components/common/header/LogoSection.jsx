import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";

function LogoSection() {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="block">
        <img
          className="w-32 h-6 lg:w-[155px] lg:h-9 object-cover hover:scale-105 transition-transform duration-300"
          src={Logo}
          alt="Logo"
        />
      </Link>
    </div>
  );
}

export default LogoSection;
