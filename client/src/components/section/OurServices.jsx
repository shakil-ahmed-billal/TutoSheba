import serviceData from "@/utils/serviceData"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "../ui/card"

const OurServices = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <p>Our Services</p>
            <p>Here are services we provide</p>
            <div className="flex gap-5 flex-wrap">
                {serviceData?.map((data) => (
                    <Card key={data.id} className="text-center">
                        <CardContent className={"h-full"}>
                            <img className="w-[250px] h-[250px] object-center"  src={data.image} alt="service" />
                            <h1 className="text-2xl font-bold">{data.title}</h1>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default OurServices