import React from "react";
import featuredData from "@/utils/featuredCardData";
import { Card } from "../ui/card";
import Marquee from "react-fast-marquee";

const Featured = () => {
  return (
    <div className="bg-[#F2F6FD]">
      <div className="w-11/12 mx-auto py-10">
        <p className="text-3xl font-bold">
          We were <span className="text-[#800080]">Featured</span> on:
        </p>
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {featuredData?.map((data) => (
            <Card key={data.id} className="rounded-none mx-5">
              <img
                src={data.image}
                alt="featured"
                className="h-20"
              />
            </Card>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Featured;