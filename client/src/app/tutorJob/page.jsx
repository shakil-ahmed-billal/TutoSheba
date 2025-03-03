"use client"
import JobCard from "@/components/card/JobCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";




const page = () => {


    const axiosPubLic = useAxiosPublic();

    const { data, isPending } = useQuery({
        queryKey: ["tutors"],
        queryFn: async () => {
            const { data } = await axiosPubLic("/api/tutor")
            console.log(data);
            return data
        }
    })

    console.log(data);
    return (
        <div className="pt-20  flex flex-col gap-5">
            {!isPending && data.data.map((tutor) => (
                <JobCard key={tutor._id} tutor={tutor} />
            ))}
        </div>
    )
}

export default page