import { MapPin, Home, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

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
                <div className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    Job ID: {jobId}
                </div>
            </div>

            <h3 className="text-xl font-semibold text-primary">{title}</h3>

            <div className="flex space-x-4">
                {preferredTuitionStyle.map((style, index) => (
                    <div key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center space-x-1">
                        <Home className="h-4 w-4" />
                        <span>{style}</span>
                    </div>
                ))}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full flex items-center space-x-1">
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
                    <p className="text-sm text-muted-foreground mb-1">Class:</p>
                    <p className="font-medium">{preferredClass.join(", ")}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground mb-1">Preferred Tutor:</p>
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
                            <span key={index} className="bg-secondary text-secondary-foreground px-2 py-0.5 text-xs rounded">
                                {subject}: {grade}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground mb-1">Salary:</p>
                    <p className="font-medium text-primary">{expectedMinimumSalary}</p>
                </div>
            </div>

            <div className="flex justify-between items-center pt-2">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Posted at: {new Date(createdAt).toLocaleDateString()}</span>
                </div>
                <Link href={`/tutorJob/${_id}`}>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                    View More Details
                </Button>
            </Link>
            </div>
        </div>
    );
};

export default JobCard;
