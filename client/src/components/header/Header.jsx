import { LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <div className="font-bold bg-gradient-to-r from-[#590756] to-[#CC0D85] text-white">
            <div className="w-11/12  mx-auto flex justify-between items-center">
                <Link href="/"><Image src="/logo.webp" alt="logo" width={180} height={180} /></Link>
                <ul className="flex gap-5 uppercase text-sm ">
                    <li>Tutor Job</li>
                    <li>Premium Tutor</li>
                    <li>Tutor Request</li>
                    <li>Course</li>
                </ul>
                <div className="flex gap-3 items-center ">
                    <Link href={"/auth/login"}>
                        <Button variant="outline" className={"bg-transparent rounded-sm"}><LogIn /> Login</Button>
                    </Link>
                    <Link href={"/auth/register"}>
                        <Button variant="outline" className={"bg-transparent rounded-sm"}><LogIn /> Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header