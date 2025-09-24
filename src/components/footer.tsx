import {useNavigate} from "react-router-dom";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa6";
import ScrollReveal from "./ui/scrollreveal";
import {FaDirections} from "react-icons/fa";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="flex flex-col w-full text-center justify-center gap-5 mt-8 pt-8 px-5 md:pt-10 md:px-12 lg:px-10 lg:pt-13 text-gray-800 dark:text-gray-200">
            <ScrollReveal delay={0.1}>
                <p className="text-2xl md:text-3xl text-center flex-wrap lg:text-4xl font-semibold lg:font-bold md:px-30 lg:px-50">Ready to take your digital experience to the next level?</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="text-2xl md:text-3xl  text-center flex-wrap lg:text-4xl font-semibold lg:font-bold md:px-30 lg:px-50">Let's connect today to explore how I can support you in reaching your goals.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <div className="flex flex-col items-center justify-center w-full mt-4">
                    <button
                        className="px-8 py-2 flex flex-row gap-2 text-gray-200 text-center items-center justify-center rounded-lg w-[170px] bg-teal-700 font-semibold hover:bg-teal-600 hover:scale-110 cursor-pointer transition-all"
                        onClick={() => navigate("/contact")}
                    >
                        <p className="text-center text-[16px]">Contact</p>
                        <span> <FaDirections className="size-5" /> </span>
                    </button>
                </div>
            </ScrollReveal>

            {/*Socials*/}
            <div className="flex flex-col w-full text-center items-center justify-center gap-3 md:gap-5 lg:gap-5 mt-3 md:mt-5 lg:mt-5">
                <ScrollReveal delay={0.4}>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">Let's Connect</p>
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                <div className="flex flex-row gap-10 text-center items-center justify-center w-full ">
                        <a
                            className="transition-all hover:scale-105 hover:text-teal-500 cursor-pointer"
                            href="https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsLinkedin className="size-5 md:size-7 lg:size-7" />
                        </a>
                        <a
                            className="transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                            href="https://x.com/PhantomXDev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="size-5 md:size-7 lg:size-7"/>
                        </a>
                        <a
                            className="transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                            href="https://www.instagram.com/yung_in?igsh=cXNjZGFueGUzaDBk&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="size-5 md:size-7 lg:size-7"/>
                        </a>
                        <a
                            className=" transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                            href="https://www.tiktok.com/@olajuwonx15?_t=ZS-8zqvw3thoy8&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTiktok className="size-5 md:size-7 lg:size-7"/>
                        </a>
                        <a
                            className="transition-all hover:scale-110 hover:text-green-700 cursor-pointer"
                            href="https://github.com/OlajuwonX"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="size-5 md:size-7 lg:size-7"/>
                        </a>
                </div>
                </ScrollReveal>
            </div>
        {/*    CopyRight*/}
            <ScrollReveal delay={0.6}>
            <div className="flex flex-col gap-2 mt-2">
                    <hr className="border border-black dark:border-gray-200"/>
                    <p className="pb-2 text-[15px] md:text-xl lg:text-xl">Copyright © 2025 PhantomDev</p>
            </div>
            </ScrollReveal>
        </footer>
    )
}
export default Footer
