"use client";

import Sidebar from '@/components/sidebar/Sidebar';
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
                <div className="flex gap-5 flex-1">
                    {/* Sidebar - Fixed position */}
                    <div className="hidden md:block">
                        <Sidebar />
                    </div>

                    {/* Mobile Sidebar Toggle */}
                    <div className="md:hidden p-4">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="bg-primary text-white px-4 py-2 rounded-md">
                            {isMobileMenuOpen ? 'Hide Filters' : 'Show Filters'} </button>
                        {isMobileMenuOpen && ( <div className="mt-4"> <Sidebar className="w-full h-auto static" /> </div> )} </div>
                    {/* Job Listings */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;