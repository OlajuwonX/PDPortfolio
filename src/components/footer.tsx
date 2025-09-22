import {useNavigate} from "react-router-dom";
import {ThumbsUp} from "lucide-react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa6";
import ScrollReveal from "./ui/scrollreveal";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="flex flex-col w-full text-center item-center justify-center gap-5 mt-8 pt-8 px-5 md:pt-10 md:px-12 lg:px-10 lg:pt-13 text-gray-800 dark:text-gray-200">
            <ScrollReveal delay={0.1}>
                <p className="text-2xl md:text-3xl text-center flex-wrap lg:text-4xl font-semibold lg:font-bold md:px-30 lg:px-50">Ready to take your digital experience to the next level?</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="text-2xl md:text-3xl  text-center flex-wrap lg:text-4xl font-semibold lg:font-bold md:px-30 lg:px-50">Let's connect today to explore how I can support you in reaching your goals.</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <div className="flex flex-col items-center justify-center w-full mt-4">
                    <button
                        className="px-8 py-2 flex flex-row gap-2 text-center item-center justify-center rounded-lg w-[180px] bg-teal-700 font-semibold hover:bg-teal-600 hover:scale-110 cursor-pointer transition-all"
                        onClick={() => navigate("/contact")}
                    >
                        <p className="text-center">Connect</p>
                        <span> <ThumbsUp className="size-6" /></span>
                    </button>
                </div>
            </ScrollReveal>

            {/*Socials*/}
            <div className="flex flex-col w-full text-center item-center justify-center gap-6 md:gap-8 lg:gap-8 mt-3 md:mt-5 lg:mt-5">
                <ScrollReveal delay={0.4}>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">Let's Connect</p>
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                <div className="flex flex-row text-center item-center justify-center w-full">
                        <a
                            className="size-14 md:size-18 lg:size-24 transition-all hover:scale-105 hover:text-teal-500 cursor-pointer"
                            href="https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            className="size-14 md:size-18 lg:size-24 transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                            href="https://x.com/PhantomXDev"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            className="size-14 md:size-18 lg:size-24 transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                            href="https://www.instagram.com/yung_in?igsh=cXNjZGFueGUzaDBk&utm_source=qr"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            className="size-14 md:size-18 lg:size-24 transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                            href="https://www.tiktok.com/@olajuwonx15?_t=ZS-8zqvw3thoy8&_r=1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaTiktok />
                        </a>
                        <a
                            className="size-14 md:size-18 lg:size-24 transition-all hover:scale-110 hover:text-green-700 cursor-pointer"
                            href="https://github.com/OlajuwonX"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>
                </div>
                </ScrollReveal>
            </div>
        {/*    CopyRight*/}
            <ScrollReveal delay={1}>
                <hr className="border border-black dark:border-gray-200"/>
            </ScrollReveal>
            <ScrollReveal delay={1.1}>
                <p className="text-[15px] md:text-xl lg:text-xl">Copyright © 2025 PhantomDev</p>
            </ScrollReveal>
        </footer>
    )
}
export default Footer
