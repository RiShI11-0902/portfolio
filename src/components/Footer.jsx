import { BsHeartFill } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="mx-auto  mb-5 mt-10 p-10 bg-[#000000] rounded-3xl w-11/12 lg:w-4/5">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Left Section */}
                    <div className="text-center md:text-left flex flex-col space-y-3">
                        <p className="dancing-script-Font text-3xl md:text-4xl lg:text-5xl text-[#FF6500]">
                            Rishi Codes
                        </p>
                        <p className="flex items-center justify-center md:justify-start space-x-1">
                            <span>Made with</span>
                            <BsHeartFill className="text-red-600" />
                            <span>using React</span>
                        </p>
                        <p className="text-sm text-gray-300">
                            © {year} Rishi Codes. All rights reserved.
                        </p>
                    </div>

                    {/* Right Section (Social Links) */}
                    <div className="flex space-x-5 md:space-x-0 md:flex-col md:space-y-5 items-center">
                        <a
                            href="https://www.instagram.com/rishi_codes/"
                            aria-label="Instagram"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <FaInstagram
                                className="text-purple-500 hover:text-purple-400 transition duration-200"
                                size={25}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rushikesh-bagade11"
                            aria-label="LinkedIn"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <FaLinkedin
                                className="text-blue-500 hover:text-blue-400 transition duration-200"
                                size={25}
                            />
                        </a>
                        <a
                            href="https://github.com/RiShI11-0902"
                            aria-label="GitHub"
                            className="hover:scale-110 transition-transform duration-200"
                        >
                            <FaGithub
                                className="text-gray-500 hover:text-gray-400 transition duration-200"
                                size={25}
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
