import subjectData from "@/utils/subjectData"
import { Card } from "../ui/card"

const FindSubject = () => {
    return (
        <div className="w-11/12 mx-auto my-10 text-center">
            <p className="md:text-3xl text-xl font-bold text-center">Find Your Subject Specialist</p>
            <p className="md:text-2xl text-center text-[#66789C]">Find Our Specialist to reach your dream goal</p>
            <div className="flex flex-wrap gap-10 my-5 place-content-center">
                {subjectData?.map((data) => (
                    <Card key={data.id} className="rounded-none px-10">
                        <p>{data.title}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FindSubject