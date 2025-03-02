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
        <div className="mt-20 w-11/12 mx-auto">
            <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-3">

                </div>
                <div className="col-span-9 flex flex-col gap-5">
                    {!isPending && data.data.map((tutor) => (
                        <JobCard key={tutor._id} tutor={tutor} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page