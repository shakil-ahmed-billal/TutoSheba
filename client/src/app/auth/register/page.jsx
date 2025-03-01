"use client"
import RegisterStudent from "@/components/auth/Register/RegisterStudent"
import RegisterTeacher from "@/components/auth/Register/RegisterTeacher"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const page = () => {

    const [isTeacher, setIsTeacher] = useState(false);

    return (
        <div className="w-11/12 mx-auto flex justify-center items-center">
            <div className="grid grid-cols-2 justify-center items-center w-full">
                <Image src="/icon/register.svg" alt="channel" width={500} height={500} />
                <Card className="w-full my-10  p-4">
                    <CardHeader>
                        <p className="text-3xl font-bold text-center">Register</p>
                        <div className="flex justify-between bg-[#E0E6F6] p-5 w-full">
                            <div className="flex gap-2 items-center">
                                <Image src="/icon/teacher.webp" alt="channel" width={50} height={50} />
                                <Checkbox
                                    checked={isTeacher}
                                    onCheckedChange={(checked) => setIsTeacher(checked)}
                                    className={isTeacher ? "text-blue-500" : "text-gray-500 border-gray-800 cursor-pointer"}
                                />
                                <p className="text-sm">Teacher</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src="/icon/student.webp" alt="channel" width={50} height={50} />
                                <Checkbox
                                    checked={!isTeacher}
                                    onCheckedChange={(checked) => setIsTeacher(!checked)}
                                    className={isTeacher ? "text-blue-500 cursor-pointer border-gray-800" : "text-gray-500"}
                                />
                                <p className="text-sm">Student</p>
                            </div>
                        </div>
                    </CardHeader>
                    {/* from start  */}
                    <CardContent>
                        {isTeacher ? <RegisterTeacher />: <RegisterStudent />}
                    </CardContent>
                    <CardFooter>
                        <Label htmlFor="password">Already have an account? <Link href="/auth/login" className="text-blue-500 hover:underline">Login</Link></Label>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default page