import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TbHandTwoFingers } from "react-icons/tb";
import logo from "../../../../public/logos.png";
const Footer = () => {
  return (
    <div className=" px-5 md:px-10 lg:px-20   bg-[#ECF5FF] ">
      <footer className="footer  py-10 bg-[#ECF5FF] text-base-content">
        <aside>
          <img className="w-16 h-20" src={logo} />
          <p className="font-semibold">
            Design amazing digital experiences <br />
            that create more happy in the world.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title font-semibold text-[#667085]">Product</h6>
          <a className="link link-hover font-bold text-[#525e71]">Overview</a>
          <a className="link link-hover font-bold text-[#525e71]">Features</a>
          <a className="link link-hover font-bold text-[#525e71]">Solutions</a>
          <a className="link link-hover font-bold text-[#525e71]">Tutorials</a>
          <a className="link link-hover font-bold text-[#525e71]">Pricing</a>
          <a className="link link-hover font-bold text-[#525e71]">Releases</a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-[#667085]">Company</h6>
          <a className="link link-hover font-bold text-[#525e71]">About us</a>
          <a className="link link-hover font-bold text-[#525e71]">Careers</a>
          <a className="link link-hover font-bold text-[#525e71]">Press</a>
          <a className="link link-hover font-bold text-[#525e71]">News</a>
          <a className="link link-hover font-bold text-[#525e71]">Media Kit</a>
          <a className="link link-hover font-bold text-[#525e71]">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-[#667085]">
            Resources
          </h6>
          <a className="link link-hover font-bold text-[#525e71]">Blog</a>
          <a className="link link-hover font-bold text-[#525e71]">Newsletter</a>
          <a className="link link-hover font-bold text-[#525e71]">Events</a>
          <a className="link link-hover font-bold text-[#525e71]">
            Help Centre
          </a>
          <a className="link link-hover font-bold text-[#525e71]">Tutorials</a>
          <a className="link link-hover font-bold text-[#525e71]">Support</a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-[#667085]">Social</h6>
          <a className="link link-hover font-bold text-[#525e71]">Twitter</a>
          <a className="link link-hover font-bold text-[#525e71]">LinkedIn</a>
          <a className="link link-hover font-bold text-[#525e71]">Facebook</a>
          <a className="link link-hover font-bold text-[#525e71]">Github</a>
          <a className="link link-hover font-bold text-[#525e71]">AngelList</a>
          <a className="link link-hover font-bold text-[#525e71]">Dribble</a>
        </nav>
        <nav>
          <h6 className="footer-title font-semibold text-[#667085]">Legal</h6>
          <a className="link link-hover font-bold text-[#525e71]">Terms</a>
          <a className="link link-hover font-bold text-[#525e71]">Privacy</a>
          <a className="link link-hover font-bold text-[#525e71]">Cookies</a>
          <a className="link link-hover font-bold text-[#525e71]">Licenses</a>
          <a className="link link-hover font-bold text-[#525e71]">Settings</a>
          <a className="link link-hover font-bold text-[#525e71]">Contact</a>
        </nav>
      </footer>
      <footer className="footer   py-4  bg-[#ECF5FF] border-t-2 border-[#C5E2FF] text-base-content  ">
        <aside className="items-center grid-flow-col ">
          <p className="font-semibold">
            © 2024 Heritage- Nest . All rights reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <IoLogoTwitter className="text-2xl text-[#0059B1]"></IoLogoTwitter>
            </a>
            <a>
              <FaFacebook className="text-2xl text-[#0059B1]"></FaFacebook>
            </a>

            <a>
              <FaLinkedin className="text-2xl text-[#0059B1]"></FaLinkedin>
            </a>
            <a>
              <TbHandTwoFingers className="text-2xl text-[#0059B1]"></TbHandTwoFingers>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
