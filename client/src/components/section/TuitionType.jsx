"use client";

import { motion } from "framer-motion";
import TuitionTypeData from "@/utils/webData";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const TuitionType = () => {
    return (
        <div className="bg-[#F2F6FD] py-10">
            {/* Animated Heading */}
            <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:text-3xl text-xl font-bold text-center"
            >
                Tuition Types
            </motion.p>

            <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:text-2xl text-center text-[#66789C] md:my-5"
            >
                Find the Best Tuition Type which suits you most
            </motion.p>

            <div className="w-11/12 mx-auto flex md:flex-row flex-col gap-5 pt-5">
                {TuitionTypeData.map((data) => (
                    <motion.div
                        key={data.id}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Card className="text-center shadow-lg rounded-lg overflow-hidden">
                            <CardContent className="flex flex-col items-center">
                                {/* Animated Image */}
                                <motion.div
                                    initial={{ scale: 1 }}
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Image src={data.image} alt="banner" width={300} height={300} />
                                </motion.div>

                                <h1 className="text-2xl font-bold">{data.title}</h1>
                                <p className="text-[#A0ABB8] py-5 text-[12px]">{data.subTitle}</p>
                                <p className="text-[#7B838A] font-bold">{data.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TuitionType;
