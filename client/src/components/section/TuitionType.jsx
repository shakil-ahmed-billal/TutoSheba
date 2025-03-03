import TuitionTypeData from "@/utils/webData"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"

const TuitionType = () => {



    return (
        <div className="bg-[#F2F6FD] py-10">
            <p className="text-4xl font-bold text-center">Tuition Types</p>
            <p className="text-xl text-gray-500 text-center my-5">Find the Best Tuition Type which suits you most</p>
            <div className="w-11/12 mx-auto flex md:flex-row flex-col gap-5 pt-5">

                {TuitionTypeData.map((data) => (
                    <Card key={data.id} className="text-center">
                        <CardContent className={"flex flex-col items-center "}>
                            <Image src={data.image} alt="banner" width={300} height={300} />
                            <h1 className="text-2xl font-bold">{data.title}</h1>
                            <p className="text-[#A0ABB8] py-5 text-[12px]">{data.subTitle}</p>
                            <p className="text-[#7B838A] font-bold">{data.description}</p>
                        </CardContent>
                    </Card>))}
            </div>
        </div>
    )
}

export default TuitionType