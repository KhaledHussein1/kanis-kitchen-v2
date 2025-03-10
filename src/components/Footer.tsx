import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#d4b998] py-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Kani’s Kitchen. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-[#5a3e2b] hover:text-[#a87e4f] transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-[#5a3e2b] hover:text-[#a87e4f] transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-[#5a3e2b] hover:text-[#a87e4f] transition">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
