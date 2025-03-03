import Image from "next/image"
import { Button } from "../ui/button"
import { Search } from "lucide-react"
import { ArrowRight } from "lucide-react"

const SearchTutoring = () => {
    return (
        <div className="w-11/12 mx-auto py-5">
            <p className="text-3xl font-bold text-center">SEARCH TUTORING JOBS</p>
            <p className="text-2xl text-center text-[#66789C]">Find Your Tution Jobs, in your area</p>
            <div className="grid md:grid-cols-2 gap-5 justify-between items-center">
                <Image src="/Online.svg" alt="banner" width={650} height={500} />
                <div className="flex flex-col justify-center items-center text-center text-xl">
                    <p className="font-bold">Looking for interesting tuition jobs to excel your teaching experience?</p>
                    <p className="text-[#66789C]">If teaching jobs interests you, then you are on the right place. tutorsheba.com, we often have 500+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next big tuition job. You can search and apply to the tuition jobs that best fit your skills, favorable location, class and subjects.</p>
                    <div className="">
                        <Button className={"uppercase font-bold bg-gradient-to-r from-[#CC0D85] to-[#590756] text-white text-2xl flex items-center rounded-full p-6 mt-5"}><Search /> Find a Tutor <ArrowRight/> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTutoring