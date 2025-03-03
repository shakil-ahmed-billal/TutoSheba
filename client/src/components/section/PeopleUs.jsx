import { Card, CardContent } from "../ui/card"

const PeopleUs = () => {
    return (
        <div className="bg-[#F2F6FD] py-10">
            <div className="w-11/12 mx-auto my-10">
            <h1 className="text-center text-4xl font-bold">People Love Us!</h1>
            <p className="text-2xl text-center ">We are prod to share the experience of our honourable clients</p>
            <div className="flex md:flex-row flex-col items-center justify-center gap-10 mt-10 text-center place-content-center">
              
                <Card className={"max-w-[500px]"}>
                    <CardContent className={"text-center flex flex-col items-center justify-center gap-5"}>
                        <h2 className="text-2xl font-bold">What our <span className="text-[#800080] ">Tutors</span> say about us</h2>
                        <img className="border-[#800080] border-2 rounded-full w-[200px] h-[200px]" src="/p6.webp" alt="" />
                        <p className="text-2xl font-bold">Sadia Nazrin</p>
                        <p>I am a tutor at TutorPoint and I can assure you that we are committed to helping students succeed in their academic goals. We provide the best possible service to our students, and we are dedicated to helping them achieve their full potential.</p>
                    </CardContent>
                </Card>
                <Card className={"max-w-[500px]"}>
                    <CardContent className={"text-center flex flex-col items-center justify-center gap-5"}>
                        <h2 className="text-2xl font-bold">What our <span className="text-[#800080] ">Tutors</span> say about us</h2>
                        <img className="border-[#800080] border-2 rounded-full w-[200px] h-[200px]" src="/p6.webp" alt="" />
                        <p className="text-2xl font-bold">Sadia Nazrin</p>
                        <p>I am a tutor at TutorPoint and I can assure you that we are committed to helping students succeed in their academic goals. We provide the best possible service to our students, and we are dedicated to helping them achieve their full potential.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
        </div>
    )
}

export default PeopleUs