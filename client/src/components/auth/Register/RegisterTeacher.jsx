import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"

const RegisterTeacher = () => {



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
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={""} onValueChange={""} className="">
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select Your Gender" />
                            </SelectTrigger>
                            <SelectContent className={""}>
                                <SelectGroup>
                                    <SelectLabel>Gender Select</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name">Email</Label>
                        <Input
                            {...register("email")}
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Enter your email"
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
                        <Label htmlFor="district">Tuition District</Label>
                        <Select value={""} onValueChange={""} className="">
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select Your Gender" />
                            </SelectTrigger>
                            <SelectContent className={""}>
                                <SelectGroup>
                                    <SelectLabel>Select District</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="location">Your Location</Label>
                        <Select value={""} onValueChange={""} className="">
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select Your Location" />
                            </SelectTrigger>
                            <SelectContent className={""}>
                                <SelectGroup>
                                    <SelectLabel>Select District</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div>
                    <Label htmlFor="area">Preferred Tuition Area</Label>
                    <Input
                        {...register("area")}
                        name="area"
                        id="area"
                        type="text"
                        placeholder="Enter your area"
                        required
                    />
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

export default RegisterTeacher