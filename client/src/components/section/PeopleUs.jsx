"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

const PeopleUs = () => {
    return (
        <div className="bg-[#F2F6FD] py-10">
            <div className="w-11/12 mx-auto my-10">
                <h1 className="md:text-3xl text-xl font-bold text-center">People Love Us!</h1>
                <p className="md:text-2xl text-center text-[#66789C]">
                    We are proud to share the experience of our honorable clients
                </p>
                <div className="flex md:flex-row flex-col items-center justify-center gap-10 mt-10 text-center place-content-center">
                    
                    {/* Card with Hover Animation */}
                    <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className="max-w-[500px]"
                    >
                        <Card>
                            <CardContent className="text-center flex flex-col items-center justify-center gap-5">
                                <h2 className="text-2xl font-bold">
                                    What our <span className="text-[#800080]">Tutors</span> say about us
                                </h2>
                                {/* Image with Hover Zoom Effect */}
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    className="border-[#800080] border-2 rounded-full w-[200px] h-[200px]"
                                    src="/p6.webp"
                                    alt="Tutor"
                                />
                                <p className="text-2xl font-bold">Sadia Nazrin</p>
                                <p>
                                    I am a tutor at TutorPoint and I can assure you that we are committed to helping students succeed in their academic goals. We provide the best possible service to our students, and we are dedicated to helping them achieve their full potential.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Another Card with Hover Animation */}
                    <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className="max-w-[500px]"
                    >
                        <Card>
                            <CardContent className="text-center flex flex-col items-center justify-center gap-5">
                                <h2 className="text-2xl font-bold">
                                    What our <span className="text-[#800080]">Tutors</span> say about us
                                </h2>
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    className="border-[#800080] border-2 rounded-full w-[200px] h-[200px]"
                                    src="/p6.webp"
                                    alt="Tutor"
                                />
                                <p className="text-2xl font-bold">Sadia Nazrin</p>
                                <p>
                                    I am a tutor at TutorPoint and I can assure you that we are committed to helping students succeed in their academic goals. We provide the best possible service to our students, and we are dedicated to helping them achieve their full potential.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default PeopleUs;
