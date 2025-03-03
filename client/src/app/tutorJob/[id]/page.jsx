"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Dna, MapPin } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const Page = ({ params }) => {
    const { id } = use(params);

    console.log(id);
    const axiosPublic = useAxiosPublic();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["tutors", id],
        queryFn: async () => {
            const { data } = await axiosPublic(`/api/tutor/${id}`);
            return data;
        },
        enabled: !!id,
    });

    console.log(data);

    if (isLoading) {
        return <div className="text-center p-8">Loading...</div>;
    }

    if (isError) {
        return <div className="text-center p-8 text-red-600">Error: {error.message}</div>;
    }

    const {
        location,
        jobId,
        title,
        preferredTuitionStyle = [],
        currentStatusForTuition = "N/A",
        preferredClass = [],
        gender = "Not specified",
        preferredSubjects = {},
        expectedMinimumSalary,
        tutoringExperience,
        placeOfLearning,
        extraFacilities,
        preferredMediumOfInstruction = [],
        preferredTime = [],
        preferredAreaToTeach = [],
        postedAt = "N/A"
    } = data.data || {};

    return (
        <div className="mx-auto md:p-8 mt-20">
            <Card className="w-full bg-white shadow-lg rounded-xl border border-gray-200">
                <CardHeader className="border-b pb-2">
                    <div className="flex justify-between items-center">
                        <p className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                            <MapPin className="w-5 h-5 text-purple-600" /> {location}
                        </p>
                        <p className="text-sm text-gray-500">Job ID: <span className="font-semibold">{jobId}</span></p>
                    </div>
                </CardHeader>

                <CardContent className="px-6 py-4">
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-4 text-center">{title}</CardTitle>

                    {/* Preferred Tuition Style */}
                    <div className="flex flex-wrap gap-3 my-4 items-center justify-center">
                        {preferredTuitionStyle?.length > 0 && (
                            <Button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-800 transition duration-200">
                                {preferredTuitionStyle.join(", ")}
                            </Button>
                        )}
                        <Button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition duration-200">
                            {currentStatusForTuition}
                        </Button>
                    </div>

                    {/* Class, Medium, and Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                        <p className="text-sm font-medium text-gray-700"><strong>Medium:</strong> {preferredMediumOfInstruction?.join(", ") || "N/A"}</p>
                        <p className="text-sm font-medium text-gray-700"><strong>Class:</strong> {preferredClass?.join(", ") || "N/A"}</p>
                        <p className="flex items-center text-sm font-medium text-gray-700 gap-1">
                            <Dna className="w-4 h-4 text-gray-500" /> <strong>Preferred Tutor:</strong> {gender}
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div className="my-8 text-sm text-gray-600">
                        <p><strong>Salary:</strong> {expectedMinimumSalary}</p>
                        <p><strong>Tutoring Experience:</strong> {tutoringExperience}</p>
                        <p><strong>Place of Learning:</strong> {placeOfLearning}</p>
                        <p><strong>Extra Facilities:</strong> {extraFacilities?.join(", ") || "N/A"}</p>
                        <p><strong>Preferred Time:</strong> {preferredTime?.join(", ") || "N/A"}</p>
                        <p><strong>Preferred Area to Teach:</strong> {preferredAreaToTeach?.join(", ") || "N/A"}</p>
                    </div>

                    <div className="my-4">
                        <p className="text-sm text-gray-700">
                            <strong>Posted on:</strong> {postedAt}
                        </p>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-5 border-t">
                    <Link href={"/tutorJob"}>
                        <Button variant="outline" className="bg-gradient-to-r from-[#590756] via-[#C60C82] to-[#590756] font-bold text-white rounded-none hover:text-white transition-all duration-200">
                            <ArrowLeft /> Go Back to All Jobs
                        </Button>
                    </Link>
                    <Button className="bg-green-600 text-white px-5 py-2 rounded-none hover:bg-green-700 transition-all duration-200">
                        Apply Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Page;
