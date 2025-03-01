import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

const RegisterStudent = () => {



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        {/* name or gender */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              {...register("name")}
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          <div>
            <Label htmlFor="name">Re-Password</Label>
            <Input
              {...register("rePassword")}
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </>
  )
}

export default RegisterStudent