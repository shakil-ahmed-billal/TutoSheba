import { MapPin, Home, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Slice } from "lucide-react";
import { Wallet } from "lucide-react";
import { VenusAndMars } from "lucide-react";
import { School } from "lucide-react";

// JobCard Component
const JobCard = ({ tutor }) => {
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
        _id,
        createdAt
    } = tutor || {};

    return (
        <div className="bg-card rounded-lg shadow-sm border p-6 space-y-4">
            <div className="flex justify-between">
                <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <span className="text-muted-foreground">{location}</span>
                </div>
                <div className="text-sm bg-blue-100 text-primary py-2 px-3  border border-[#3C65F5] rounded-md">
                    Job ID: {jobId}
                </div>
            </div>

            <h3 className="text-xl font-semibold text-primary">{title}</h3>

            <div className="flex space-x-4">
                {preferredTuitionStyle.map((style, index) => (
                    <div key={index} className="bg-[#9A1EB1] text-white px-3 py-1 rounded-full flex items-center space-x-1">
                        <Home className="h-4 w-4" />
                        <span>{style}</span>
                    </div>
                ))}
                <div className="bg-[#1089AD] text-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tutoringExperience}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <p className="text-sm text-muted-foreground mb-1">Medium:</p>
                    <p className="font-medium">{preferredMediumOfInstruction.join(", ")}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2"><School /> Class:</p>
                    <p className="font-medium">{preferredClass.join(", ")}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center"><VenusAndMars /> Preferred Tutor:</p>
                    <p className="font-medium">{gender}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <p className="text-sm text-muted-foreground mb-1">Tutoring Days:</p>
                    <p className="font-medium">{preferredTime.join(", ")}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground mb-1">Subject:</p>
                    <div className="flex flex-wrap gap-1">
                        {Object.entries(preferredSubjects).map(([subject, grade], index) => (
                            <span key={index} className="bg-green-500 text-white px-2 py-0.5 text-xs rounded">
                                {subject}: {grade}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-muted-foreground mb-1 flex items-center gap-2 text-xl"><Wallet /> Salary:</p>
                    <p className="text-blue-500 text-2xl font-bold">{expectedMinimumSalary}</p>
                </div>
            </div>

            <div className="flex justify-between items-center pt-2">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground font-bold">
                    <Calendar className="h-4 w-4" />
                    <span>Posted at: {new Date(createdAt).toLocaleDateString()}</span>
                </div>
                <Link href={`/tutorJob/${_id}`}>
                <Button variant="outline" className="bg-gradient-to-r from-[#590756] via-[#C60C82] to-[#590756] font-bold text-white rounded-none hover:text-white transition-all duration-200">
                    View More Details
                </Button>
            </Link>
            </div>
        </div>
    );
};

export default JobCard;
