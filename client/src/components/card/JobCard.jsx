import { Dna, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

const JobCard = ({ tutor}) => {
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
        _id
    } = tutor || {};

    return (
        <Card className="w-full p-6 bg-white shadow-xl rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <p className="flex items-center gap-2 font-semibold text-gray-800">
                        <MapPin className="w-5 h-5 text-purple-600" /> {location}
                    </p>
                    <p className="text-gray-500 text-sm">Job ID: <span className="font-semibold">{jobId}</span></p>
                </div>
            </CardHeader>

            <CardContent>
                <CardTitle className="text-xl font-extrabold text-gray-900 mb-4">{title}</CardTitle>

                {/* Preferred Tuition Style */}
                <div className="flex flex-wrap gap-3 my-3">
                    {preferredTuitionStyle.length > 0 && (
                        <Button className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-800 transition duration-200">
                            {preferredTuitionStyle.join(", ")}
                        </Button>
                    )}
                    <Button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition duration-200">
                        {currentStatusForTuition}
                    </Button>
                </div>

                {/* Class, Medium, and Gender */}
                <div className="flex flex-wrap gap-4 justify-between items-center text-gray-700">
                    <p className="text-sm font-medium"><strong>Medium:</strong> {preferredMediumOfInstruction.join(", ")}</p>
                    <p className="text-sm font-medium"><strong>Class:</strong> {preferredClass.join(", ")}</p>
                    <p className="flex items-center text-sm font-medium gap-1">
                        <Dna className="w-4 h-4 text-gray-500" /> <strong>Preferred Tutor:</strong> {gender}
                    </p>
                </div>

                {/* Additional Info */}
                <div className="mt-4 text-sm text-gray-600">
                    <p><strong>Salary:</strong> {expectedMinimumSalary}</p>
                    <p><strong>Tutoring Experience:</strong> {tutoringExperience}</p>
                    <p><strong>Place of Learning:</strong> {placeOfLearning}</p>
                    <p><strong>Extra Facilities:</strong> {extraFacilities.join(", ")}</p>
                    <p><strong>Preferred Time:</strong> {preferredTime.join(", ")}</p>
                    <p><strong>Preferred Area to Teach:</strong> {preferredAreaToTeach.join(", ")}</p>
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-6">
                <Link href={`/tutorJob/${_id}`}>
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                        View More Details
                    </Button>
                </Link>
                <Button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-all duration-200">
                    Apply Now
                </Button>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
