import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#1C222F] text-[#d7d9dc]">
        <div>
          <span className="footer-title underline ">Contacts</span>
          <p>102 Broadmay</p>
          <p>New York, NY, 246814</p>
          <p>example@dance_studio.com</p>
          <p>1-002-448-568</p>
        </div>
        <div>
          <span className="footer-title underline">Open Hours</span>
          <Link className="link link-hover"> Monday 11am-7pm</Link>
          <Link className="link link-hover">Tuesday-Friday 11am-8pm </Link>
          <Link className="link link-hover">Saturday 10am-6pm </Link>
          <Link className="link link-hover">Sunday 11am-6pm</Link>
        </div>
        <div>
          <span className="footer-title underline">About</span>
          <Link className="link link-hover">Our Story</Link>
          <Link className="link link-hover">Events Calendar</Link>
          <Link className="link link-hover">Partners</Link>
          <Link className="link link-hover">Member Forum</Link>
        </div>
        <div>
          <span className="footer-title underline">Socials</span>
          <Link className="link link-hover">Twitter</Link>
          <Link className="link link-hover">Instagram</Link>
          <Link className="link link-hover">Facebook</Link>
          <Link className="link link-hover">YouTube</Link>
        </div>
      </footer>
      <FooterBottom></FooterBottom>
    </div>
  );
};

export default Footer;
