import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Home, Laptop, Scale as Male, Scale as Female } from "lucide-react";
import { cn } from "@/lib/utils";


const Sidebar = ({ className }) => {
  return (
    <div className={cn("w-64 bg-card border-r h-screen sticky top-0 pt-20", className)}>
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      
      <ScrollArea className="h-[calc(100vh-60px)]">
        <div className="p-4 space-y-6">
          {/* Date Range Filter */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Date Range</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" 
                  placeholder="From" 
                />
              </div>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" 
                  placeholder="To" 
                />
              </div>
            </div>
          </div>

          {/* Tuition Type */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Tuition Type</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="flex items-center">
                  <span className="h-5 w-5 text-primary mr-1.5">
                    <Home className="h-4 w-4" />
                  </span>
                  <span>All Tuition</span>
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="flex items-center">
                  <span className="h-5 w-5 text-primary mr-1.5">
                    <Home className="h-4 w-4" />
                  </span>
                  <span>Home Tuition</span>
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="flex items-center">
                  <span className="h-5 w-5 text-primary mr-1.5">
                    <Laptop className="h-4 w-4" />
                  </span>
                  <span>Online Tuition</span>
                </span>
              </label>
            </div>
          </div>

          {/* Tutor Preference */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Tutor Preference</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span>All</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="flex items-center">
                  <span className="h-5 w-5 text-primary mr-1.5">
                    <Male className="h-4 w-4" />
                  </span>
                  <span>Male</span>
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="flex items-center">
                  <span className="h-5 w-5 text-primary mr-1.5">
                    <Female className="h-4 w-4" />
                  </span>
                  <span>Female</span>
                </span>
              </label>
            </div>
          </div>

          {/* Select District */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Select District</h3>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <option value="all">All</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="rajshahi">Rajshahi</option>
            </select>
          </div>

          {/* Select Area */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Select Area</h3>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <option value="all">All</option>
              <option value="mirpur">Mirpur</option>
              <option value="dhanmondi">Dhanmondi</option>
              <option value="gulshan">Gulshan</option>
            </select>
          </div>

          {/* Select Medium */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Select Medium</h3>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <option value="all">All</option>
              <option value="bangla">Bangla Medium</option>
              <option value="english">English Version</option>
              <option value="english-medium">English Medium</option>
            </select>
          </div>

          {/* Select Class */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Select Class</h3>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <option value="all">All</option>
              <option value="class-10">Class 10</option>
              <option value="hsc">HSC</option>
              <option value="university">University</option>
            </select>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;