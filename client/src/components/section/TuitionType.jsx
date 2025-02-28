import TuitionTypeData from "@/utils/webData"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"

const TuitionType = () => {



    return (
        <div className="w-11/12 mx-auto flex gap-5">
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
    )
}

export default TuitionType