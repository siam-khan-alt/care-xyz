import { FaFacebook, FaGithub, FaLinkedin, FaHeartbeat } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content ">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <aside className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <FaHeartbeat className="text-primary text-3xl" />
              <span className="text-2xl font-bold heading-gradient">Care.xyz</span>
            </div>
            <p className="max-w-xs text-gray-500 leading-relaxed">
              Providing reliable and compassionate care for your loved ones since
              2025. Trusted by thousands of families worldwide.
            </p>
          </aside>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-full md:w-auto">
            <nav className="flex flex-col gap-2 text-center sm:text-left">
              <h6 className="footer-title text-secondary opacity-100 font-bold">Services</h6>
              <Link href="#" className="link link-hover text-gray-500 hover:text-primary">Baby Sitting</Link>
              <Link href="#" className="link link-hover text-gray-500 hover:text-primary">Elderly Care</Link>
              <Link href="#" className="link link-hover text-gray-500 hover:text-primary">Special Care</Link>
            </nav>

            <nav className="flex flex-col gap-2 text-center sm:text-left">
              <h6 className="footer-title text-secondary opacity-100 font-bold">Company</h6>
              <Link href="#" className="link link-hover text-gray-500 hover:text-primary">About us</Link>
              <Link href="#" className="link link-hover text-gray-500 hover:text-primary">Contact</Link>
              <Link href="#" className="link link-hover text-gray-500 hover:text-primary">Legal</Link>
            </nav>

            <nav className="flex flex-col gap-4 col-span-2 sm:col-span-1 items-center sm:items-start">
              <h6 className="footer-title text-secondary opacity-100 font-bold">Connect With Us</h6>
              <div className="flex gap-5 text-2xl">
                <a href="https://www.facebook.com/profile.php?id=100078237812772" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition-all transform hover:scale-110">
                  <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/siam-khan-sp99/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-all transform hover:scale-110">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/siam-khan-alt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#171515] transition-all transform hover:scale-110">
                  <FaGithub />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-base-300 py-6 border-t border-base-300">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="text-primary font-bold">Care.xyz Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;