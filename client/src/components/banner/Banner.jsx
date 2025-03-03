"use client";

import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";

const Banner = () => {
    return (
        <div className=" pt-20">
            <div className="w-11/12 mx-auto py-5 md:flex gap-5">
                {/* Left Side Content */}
                <div className="flex flex-col justify-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:text-5xl text-2xl font-bold text-[#800080]"
                    >
                        Best <span className="text-[#3C65F5]">Tutoring Platform</span> for Home & Online Tuitions
                    </motion.p>
                    <p className="md:text-2xl flex items-center text-gray-500 py-5">
                        <MapPin className="mr-2" /> Find the Right Tutor in Your Area
                    </p>
                    <div className="">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center gap-2 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-pink-600 to-purple-700 shadow-lg transition-all duration-300"
                        >
                            <motion.span
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Search className="text-white w-5 h-5" />
                            </motion.span>
                            FIND A TUITION
                            <motion.span
                                initial={{ x: 10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </div>
                </div>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <Image src="/Teacher.svg" alt="banner" width={500} height={500} />
                </motion.div>
            </div>
            <div className="h-[600px] absolute top-0 left-0 md:-top-10 right-0 md:-left-10 -z-10 bg-[#F2F6FD] md:w-[2600px] md:-rotate-4"></div>
        </div>
    )
}

export default Banner