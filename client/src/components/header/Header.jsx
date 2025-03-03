"use client";
import useAuth from "@/hooks/useAuth";
import { BookOpen, CircleUser, ClipboardPen, Contact, Download, House, LogIn, Menu, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
    const { user, userLogOut } = useAuth();

    const handleLogout = async () => {
        try {
            await userLogOut();
            toast.success("Logout Success");
        } catch (error) {
            console.log("Logout Error", error);
            toast.error("Logout Failed");
        }
    };

    return (
        <div className="">
            <div className="font-bold bg-gradient-to-r from-[#590756] to-[#CC0D85] text-white fixed top-0 left-0 z-10 right-0">
                <div className="w-11/12 mx-auto flex justify-between items-center py-3">
                    <Link href="/">
                        <Image src="/logo.webp" alt="logo" width={150} height={150} className="w-36" />
                    </Link>



                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-5 uppercase text-sm">
                        <Link href="/tutorJob"><li>Tutor Job</li></Link>
                        <li>Premium Tutor</li>
                        <Link href="/tutorRequest"><li>Tutor Request</li></Link>
                        <li>Course</li>
                    </ul>

                    <div className="flex gap-3 items-center">
                        <DropdownMenu>
                            {user ? (
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={user?.photoURL} alt="User Avatar" />
                                            <AvatarFallback>SC</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                            ) : (
                                <>
                                    <Link href="/auth/login">
                                        <Button variant="outline" className="bg-transparent rounded-sm">
                                            <LogIn /> Login
                                        </Button>
                                    </Link>
                                    <Link href="/auth/register">
                                        <Button variant="outline" className="bg-transparent rounded-sm">
                                            <LogIn /> Register
                                        </Button>
                                    </Link>
                                </>
                            )}
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">{user?.name || "User"}</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user?.email || "user@example.com"}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Download className="mr-2 h-4 w-4" />
                                    <span>Download Data</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {/* Mobile Menu */}
                        <div className="block md:hidden">
                            <Sheet>
                                <SheetTrigger className="flex items-center">
                                    <Menu className="size-10" />
                                </SheetTrigger>
                                <SheetContent>
                                    <ul className="flex flex-col gap-4 text-lg uppercase">
                                        <Link href="/tutorJob"><li>Tutor Job</li></Link>
                                        <li>Premium Tutor</li>
                                        <Link href="/tutorRequest"><li>Tutor Request</li></Link>
                                        <li>Course</li>
                                    </ul>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block md:hidden font-bold bg-gradient-to-r from-[#590756] to-[#CC0D85] text-white fixed bottom-0 z-10 left-0 right-0">
                <div className="flex items-center justify-evenly p-3">
                    <CircleUser className="size-7" />
                    <BookOpen className="size-7" />
                    <div className=""></div>
                    <div className="text-center absolute bottom-1">
                        <div className="w-15 h-15 flex items-center justify-center bg-orange-500 rounded-full border-4 border-white">
                            <House className="size-7 " />
                        </div>
                        <p>Home</p>
                    </div>
                    <ClipboardPen className="size-7" />
                    <Contact className="size-7" />
                </div>
            </div>
        </div>
    );
};

export default Header;