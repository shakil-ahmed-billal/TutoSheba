"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAuth from "@/hooks/useAuth"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const page = () => {

  const [isTeacher, setIsTeacher] = useState(false);
  const { userLogin } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    console.log(e)
    if (!e) {
      return toast.error("Please fill all the fields")
    }

    try {
      const userInfo = {
        phoneEmail: e.phone,
        password: e.password,
        role: isTeacher ? "teacher" : "student",
      }
      const data = await userLogin(userInfo);
      if (data.success) {
        toast.success(data.message);
        router.push("/");
      }else{
        toast.error(data.message);
      }
      console.log(data);
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="w-11/12 mx-auto flex justify-center items-center pt-20">
      <div className="grid grid-cols-2 justify-center items-center w-full">
        <Image src="/icon/login.svg" alt="channel" width={500} height={500} />
        <Card className="w-full my-10  p-4">
          <CardHeader>
            <p className="text-3xl font-bold text-center">Login</p>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
              {/* name or gender */}
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  {...register("phone")}
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Enter your phone"
                  required
                />
              </div>
              <div>
                <Label htmlFor="name">Password</Label>
                <Input
                  {...register("password")}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login in as a {isTeacher ? "Teacher" : "Student"}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Label htmlFor="password">Click here to? <Link href="/auth/register" className="text-blue-500 hover:underline">Register</Link></Label>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default page