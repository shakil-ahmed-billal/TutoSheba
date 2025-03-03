import { Contact } from "lucide-react"

const WorkCard = () => {
    return (
        <div className="">
            {/* card number ---1 */}
            <div className="flex md:flex-row flex-col h-full gap-5 justify-center items-center text-start py-5">
                <div className="bg-white flex  rounded-lg shadow-md h-full">
                    <div className="p-5">
                        <p className="text-[#9151AB] text-xl font-bold uppercase">Create Tutor Profile</p>
                        <p>Create your profile in minutes with sign up information.</p>
                    </div>
                    <div className="bg-[#9151AB] text-white w-[100px] flex justify-center items-center min-h-[100px]  rounded-r-lg">
                        <Contact className="size-10" />
                    </div>
                </div>
                <div className="bg-[#F6A4EC] w-[80px] h-[80px] hidden md:flex  justify-center items-center shadow-md rounded-full">
                    <p className="text-5xl font-extrabold text-white">1</p>
                </div>
            </div>
            {/* card number ---2 */}
            <div className="flex md:flex-row flex-col h-full gap-5 justify-center items-center text-start py-5">
                <div className="bg-[#F6A4EC] w-[80px] h-[80px] hidden md:flex  justify-center items-center shadow-md rounded-full">
                    <p className="text-5xl font-extrabold text-white">2</p>
                </div>
                <div className="bg-white flex  rounded-lg shadow-md h-full">
                    <div className="bg-[#9151AB] text-white w-[100px] flex justify-center items-center min-h-[100px]  rounded-l-lg">
                        <Contact className="size-10" />
                    </div>
                    <div className="p-5">
                        <p className="text-[#9151AB] text-xl font-bold uppercase">Create Tutor Profile</p>
                        <p>Create your profile in minutes with sign up information.</p>
                    </div>
                </div>

            </div>
            {/* card number ---3 */}
            <div className="flex md:flex-row flex-col h-full gap-5 justify-center items-center text-start py-5">
                <div className="bg-white flex  rounded-lg shadow-md h-full">
                    <div className="p-5">
                        <p className="text-[#9151AB] text-xl font-bold uppercase">Create Tutor Profile</p>
                        <p>Create your profile in minutes with sign up information.</p>
                    </div>
                    <div className="bg-[#9151AB] text-white w-[100px] flex justify-center items-center min-h-[100px]  rounded-r-lg">
                        <Contact className="size-10" />
                    </div>
                </div>
                <div className="bg-[#F6A4EC] hidden md:flex  w-[80px] h-[80px]  justify-center items-center shadow-md rounded-full">
                    <p className="text-5xl font-extrabold text-white">3</p>
                </div>
            </div>
             {/* card number ---4 */}
             <div className="flex md:flex-row flex-col h-full gap-5 justify-center items-center text-start py-5">
                <div className="bg-[#F6A4EC] hidden md:flex w-[80px] h-[80px]  justify-center items-center shadow-md rounded-full">
                    <p className=" text-5xl font-extrabold text-white">4</p>
                </div>
                <div className="bg-white flex  rounded-lg shadow-md h-full">
                    <div className="bg-[#9151AB] text-white w-[100px] flex justify-center items-center min-h-[100px]  rounded-l-lg">
                        <Contact className="size-10" />
                    </div>
                    <div className="p-5">
                        <p className="text-[#9151AB] text-xl font-bold uppercase">Create Tutor Profile</p>
                        <p>Create your profile in minutes with sign up information.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkCard