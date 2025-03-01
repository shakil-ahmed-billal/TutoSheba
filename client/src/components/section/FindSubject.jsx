import subjectData from "@/utils/subjectData"
import { Card } from "../ui/card"

const FindSubject = () => {
    return (
        <div className="w-11/12 mx-auto my-10 text-center">
            <p className="text-4xl font-bold">Find Your Subject Specialist</p>
            <p className="text-2xl text-gray-500 py-5">Find Our Specialist to reach your dream goal</p>
            <div className="flex gap-10 my-5 place-content-center">
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