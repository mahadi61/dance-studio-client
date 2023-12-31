import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#1C222F] text-[#929396]">
        <div>
          <h2 className="text-4xl text-[#EA6044] font-bold">
            <Link to="/" className="lg:text-3xl   ">
              <span className="text-white bg-black p-1">Dance</span>
              <span className="bg-white text-black p-1">Studio</span>
            </Link>
          </h2>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link className="text-3xl">
              <FaFacebookF />
            </Link>
            <Link className="text-3xl">
              <FaTwitter />
            </Link>
            <Link className="text-3xl">
              <FaInstagram />
            </Link>
            <Link className="text-3xl">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Dance Studio</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterBottom;
