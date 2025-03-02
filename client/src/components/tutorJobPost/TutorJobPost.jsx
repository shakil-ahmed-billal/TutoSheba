"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";

const TutorJobPost = () => {

    const [gender, setGender] = useState("");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);


    const onSubmit = async (data) => {

        console.log(data);
        // setLoading(true);
        // try {
        //   const response = await axios.post("/api/tutor", data);
        //   toast.success("Tutor Registered Successfully!");
        //   reset();
        // } catch (error) {
        //   console.error("Error submitting form:", error);
        //   toast.error("Failed to Register Tutor!");
        // }
        // setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-20">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register as a Tutor</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location */}
                <div>
                    <Label>Location</Label>
                    <Input {...register("location", { required: true })} placeholder="Enter Location" />
                    {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
                </div>

                {/* Gender */}
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
                    {errors.gender && <span className="text-red-500 text-sm">Gender is required</span>}
                </div>

                {/* Qualification */}
                <div>
                    <Label>Qualification</Label>
                    <Input {...register("qualification", { required: true })} placeholder="Enter Qualification" />
                </div>

                {/* Expected Salary */}
                <div>
                    <Label>Expected Salary</Label>
                    <Input {...register("expectedMinimumSalary", { required: true })} placeholder="4000 Tk/Month" />
                </div>

                {/* Teaching Experience */}
                <div>
                    <Label>Teaching Experience</Label>
                    <Input {...register("tutoringExperience", { required: true })} placeholder="Enter experience (e.g., 2 years)" />
                </div>

                {/* Tuition Style */}
                <div>
                    <Label>Preferred Tuition Style</Label>
                    <div className="flex gap-2">
                        <Checkbox {...register("preferredTuitionStyle")} value="Private Tuition" />
                        <Label>Private</Label>
                        <Checkbox {...register("preferredTuitionStyle")} value="Group Tuition" />
                        <Label>Group</Label>
                    </div>
                </div>

                {/* Preferred Subjects */}
                <div className="md:col-span-2">
                    <Label>Preferred Subjects</Label>
                    <Textarea {...register("preferredSubjects")} placeholder="e.g., Math, Science" />
                </div>

                {/* Preferred Time */}
                <div>
                    <Label>Preferred Time</Label>
                    <Input {...register("preferredTime")} placeholder="e.g., Evening, Morning" />
                </div>

                {/* Preferred Area */}
                <div>
                    <Label>Preferred Area</Label>
                    <Textarea {...register("preferredAreaToTeach")} placeholder="Enter preferred areas" />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center">
                    <Button type="submit" className="w-full max-w-xs" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TutorJobPost;
