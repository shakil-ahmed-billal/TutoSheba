"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const SearchTutoring = () => {
    return (
        <div className="w-11/12 mx-auto py-5 lg:pt-40">
            {/* Animated Heading */}
            <motion.p
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:text-3xl text-xl font-bold text-center"
            >
                SEARCH TUTORING JOBS
            </motion.p>

            <motion.p
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="md:text-2xl text-center text-[#66789C]"
            >
                Find Your Tuition Jobs, in your area
            </motion.p>

            <div className="grid md:grid-cols-2 gap-5 justify-between items-center">
                {/* Image with Up & Down Animation */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image src="/Online.svg" alt="banner" width={650} height={500} />
                </motion.div>

                <div className="flex flex-col justify-center items-center text-center text-xl">
                    <motion.p
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-bold text-md"
                    >
                        Looking for interesting tuition jobs to excel your teaching experience?
                    </motion.p>

                    <motion.p
                        initial={{ scale: 1.05, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[#66789C] text-sm md:text-md"
                    >
                        If teaching jobs interest you, then you are in the right place. tutorsheba.com often has 500+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next big tuition job. You can search and apply to the tuition jobs that best fit your skills, location, class, and subjects.
                    </motion.p>

                    <div className="mt-4">
                        {/* Animated Button */}
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
                            SEARCH TUITION
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
            </div>
        </div>
    );
};

export default SearchTutoring;
