
import Image from "next/image"
import { Button } from "../ui/button"

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto py-5 flex gap-5">
            <div className="flex flex-col justify-center ">
                <p className="text-5xl">Best Tutoring Platform
                    for Home & Online Tuitions</p>
                <p className="text-2xl"> Find the Right Tutor in Your Area</p>
                <div className="">
                    <Button className={"uppercase font-bold bg-gradient-to-r from-[#590756] to-[#CC0D85] text-white text-2xl"}>Find a Tutor</Button>
                </div>
            </div>
            <Image src="/Teacher.svg" alt="banner" width={500} height={500} />
        </div>
    )
}

export default Banner