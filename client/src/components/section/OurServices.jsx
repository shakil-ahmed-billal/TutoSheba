"use client";

import serviceData from "@/utils/serviceData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Card, CardContent } from "../ui/card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const OurServices = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <p className="md:text-3xl text-xl font-bold text-center">Our Services</p>
      <p className="md:text-2xl text-center text-[#66789C] mb-5 md:my-5">Here are services we provide</p>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={false}
        pagination={{ type: "fraction" }}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 4 },
          1800: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {serviceData?.map((data) => (
          <SwiperSlide key={data.id}>
            <Card className="text-center">
              <CardContent className="h-full">
                <div className="w-full flex justify-center">
                  <img
                    className="object-cover w-[250px] h-[250px]"
                    src={data.image}
                    alt="service"
                  />
                </div>
                <h1 className="text-2xl font-bold mt-3">{data.title}</h1>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurServices;
