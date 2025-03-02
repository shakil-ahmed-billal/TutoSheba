"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterTeacher = () => {
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [tuitionDistrict, setTuitionDistrict] = useState("");
    const { userRegister, loading } = useAuth();
    const router = useRouter();

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (data.password !== data.rePassword) {
            return toast.error("Passwords do not match");
        }

        const userInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            role: "teacher",
            gender,
            tuitionDistrict,
            tuitionArea: data.area,
            location,
        };

        try {
            const response = await userRegister(userInfo);
            if (response.success) {
                toast.success(response.message);
                router.push("/");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            {/* Name & Gender */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input {...register("name", { required: "Name is required" })} placeholder="Enter your name" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div>
                    <Label>Gender</Label>
                    <Select value={gender} onValueChange={setGender} className="">
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

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label>Email</Label>
                    <Input
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" }
                        })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                    <Label>Phone</Label>
                    <Input {...register("phone", { required: "Phone is required" })} placeholder="Enter your phone" />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
            </div>

            {/* Tuition District & Location */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label>Tuition District</Label>
                    <Select value={tuitionDistrict} onValueChange={setTuitionDistrict}>
                        <SelectTrigger><SelectValue placeholder="Select District" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dhaka">Dhaka</SelectItem>
                            <SelectItem value="chittagong">Chittagong</SelectItem>
                            <SelectItem value="khulna">Khulna</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Your Location</Label>
                    <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger><SelectValue placeholder="Select Location" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uttara">Uttara</SelectItem>
                            <SelectItem value="gulshan">Gulshan</SelectItem>
                            <SelectItem value="banani">Banani</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Preferred Tuition Area */}
            <div>
                <Label>Preferred Tuition Area</Label>
                <Input {...register("area", { required: "Area is required" })} placeholder="Enter your area" />
                {errors.area && <p className="text-red-500 text-sm">{errors.area.message}</p>}
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
                {loading ? "Registering..." : "Register"}
            </Button>
        </form>
    );
};

export default RegisterTeacher;
