import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

const RegisterStudent = () => {

  const { userRegister , loading} = useAuth();
  const navigate = useRouter()
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
    if (e.password !== e.rePassword) {
      return toast.error("Password does not match")
    }
    try {
      const userInfo = {
        name: e.name,
        phone: e.phone,
        password: e.password,
        role: "student",
      }
      const data = await userRegister(userInfo);
      if (data.success) {
        toast.success(data.message);
        navigate("/")
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        {/* Name & Gender */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input {...register("name", { required: "Name is required" })} placeholder="Enter your name" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input {...register("phone", { required: "phone is required" })} placeholder="Enter your phone" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          
        </div>
        {/* Password & Confirm Password */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Password</Label>
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" }
              })}
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div>
            <Label>Confirm Password</Label>
            <Input
              {...register("rePassword", { required: "Confirm your password" })}
              type="password"
              placeholder="Re-enter your password"
            />
            {errors.rePassword && <p className="text-red-500 text-sm">{errors.rePassword.message}</p>}
          </div>
        </div>
        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Registering..." : "Register in as a Student"}
            </Button>
      </form>
    </>
  )
}

export default RegisterStudent