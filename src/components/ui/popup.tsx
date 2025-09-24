import { useState } from "react";
import { Plus, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {BsWhatsapp} from "react-icons/bs";

export default function Popup() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-25 right-4 md:right-6 lg:right-6 z-50">
            {/* Child Buttons */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* WhatsApp (above main button) */}
                        <motion.a
                            href="https://wa.me/2348123806786?text=Hello%2C%20I%20just%20saw%20your%20portfolio.%20I%20would%20love%20to"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: -60 }}
                            exit={{ opacity: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute flex items-center justify-center w-9 h-9 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full text-gray-200 bg-green-500  shadow-lg"
                        >
                            <BsWhatsapp size={20} />
                        </motion.a>

                        {/* Phone (diagonal at 45°) */}
                        <motion.a
                            href="tel:+2348123806786"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            animate={{ opacity: 1, x: -50, y: -35 }}
                            exit={{ opacity: 0, x: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute flex items-center justify-center w-9 h-9 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full text-gray-200 bg-blue-500 shadow-lg"
                        >
                            <Phone size={20}  />
                        </motion.a>
                    </>
                )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
                onClick={() => setOpen(!open)}
                animate={{
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex items-center justify-center w-11 h-11 md:w-13 md:h-13 lg:w-13 lg:h-13 rounded-full bg-teal-600 text-gray-200 shadow-lg cursor-pointer"
            >

                <Plus size={24} strokeWidth={2} />
            </motion.button>
        </div>
    );
}
