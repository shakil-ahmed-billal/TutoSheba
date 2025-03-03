"use client";

import Sidebar from '@/components/sidebar/Sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FilterX } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';


function Layout({ children }) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-11/12 mx-auto ">
            <div className="min-h-screen bg-background text-foreground flex flex-col">
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="bg-[#7b1fa2] text-white p-4 md:hidden">
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="hover:text-[#ffc107] transition-colors">TUITION JOBS</a>
                            <a href="#" className="hover:text-[#ffc107] transition-colors">PREMIUM TUTORS</a>
                            <a href="#" className="hover:text-[#ffc107] transition-colors">TUTOR REQUEST</a>
                            <a href="#" className="hover:text-[#ffc107] transition-colors">COURSES</a>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex md:gap-5 flex-1">
                    {/* Sidebar - Fixed position */}
                    <div className="hidden md:block">
                        <Sidebar />
                    </div>

                    {/* Mobile Sidebar Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="bg-primary text-white px-4 py-2 rounded-md fixed top-18">
                            {isMobileMenuOpen ? <Filter /> : <FilterX />} </button>
                        {isMobileMenuOpen && ( <div className="mt-4">  <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[280px]">
                    <div className="flex flex-col space-y-4">
                        <Link href="/home" className="font-bold text-lg">Home</Link>
                        <Link href="/dashboard" className="font-bold text-lg">Dashboard</Link>
                        <Link href="/contact" className="font-bold text-lg">Contact</Link>
                    </div>
                </SheetContent>
            </Sheet> </div> )} </div>
                    {/* Job Listings */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;