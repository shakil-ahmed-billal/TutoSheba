
import Image from "next/image"
import { Button } from "../ui/button"
import { MapPin } from "lucide-react"
import { Search } from "lucide-react"
import { ArrowRight } from "lucide-react"

const Banner = () => {
return (
        <div className=" pt-20">
            <div className="w-11/12 mx-auto py-5 md:flex gap-5">
                <div className="flex flex-col justify-center ">
                    <p className="md:text-5xl text-2xl font-bold text-[#800080]">Best <span className="text-[#3C65F5]">Tutoring Platform</span>
                        for Home & Online Tuitions</p>
                    <p className="md:text-2xl flex items-center text-gray-500 py-5"><MapPin /> Find the Right Tutor in Your Area</p>
                    <div className="">
                        <Button className={"uppercase font-bold bg-gradient-to-r from-[#CC0D85] to-[#590756] text-white md:text-2xl flex items-center rounded-full p-6"}><Search /> Find a Tutor <ArrowRight/> </Button>
                    </div>
                </div>
                <Image src="/Teacher.svg" alt="banner" width={500} height={500} />
            </div>
            <div className="h-[600px] absolute top-0 left-0 md:-top-10 right-0 md:-left-10 -z-10 bg-[#F2F6FD] md:w-[2600px] md:-rotate-4"></div>
        </div>
    )
}

export default Banner