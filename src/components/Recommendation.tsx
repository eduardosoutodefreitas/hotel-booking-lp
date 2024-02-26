"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const recommendationData = [
  {
    name: "Shanghai Hotel",
    image: "/recommendation/hotel-1.png",
    location: "Shanghai, China",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur esse praesentium nostrum, necessitatibus quibusdam dolor modi distinctio voluptate laboriosam!",
    price: 40,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus non maiores.",
      personName: "Robert Rene",
    },
  },
  {
    name: "Peaks Lodge",
    image: "/recommendation/hotel-2.png",
    location: "Aspen, USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur esse praesentium nostrum, necessitatibus quibusdam dolor modi distinctio voluptate laboriosam!",
    price: 80,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus non maiores.",
      personName: "Emily Jhonson",
    },
  },
  {
    name: "Tropical Oasis Resort",
    image: "/recommendation/hotel-3.png",
    location: "Bali, Indonesia",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur esse praesentium nostrum, necessitatibus quibusdam dolor modi distinctio voluptate laboriosam!",
    price: 120,
    testimonial: {
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus non maiores.",
      personName: "Michael Anderson",
    },
  },
];

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { fadeIn } from "../../variants";

const Recommendation = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{
        once: false,
        amount: 0.4,
      }}
      variants={fadeIn({ delay: 0.2, direction: "up" })}
      className='pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative'
    >
      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
          spaceBetween={10}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0'>
                  <div className='max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0'>
                    <h2 className='h2 mb-4'>{hotel.name}</h2>
                    <p className='text-soft_green text-sm mb-6'>
                      {hotel.location}
                    </p>
                    <p className='mb-[60px]'>{hotel.desc}</p>
                    <div className='flex items-center gap-x-[50px]'>
                      <Button variant='accent' className='px-[44px]'>
                        Book Now
                      </Button>
                      <div className='text-black'>
                        <span className='font-bold text-2xl'>
                          {hotel.price}
                        </span>
                        <span className='text-sm'>/Night</span>
                      </div>
                    </div>
                  </div>
                  <div className='order-1 xl:order-2 flex-1 relative justify-center flex xl:justify-end h-[634px]'>
                    <div>
                      <Image
                        src={hotel.image}
                        width={905}
                        height={528}
                        quality={100}
                        alt={hotel.name}
                        className='xl:rounded-tl-[20px] xl:rounded-bl-[20px]'
                      />
                      <div className='bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:right-1/2 xl:translate-x-1/2 xl:rounded-xl xl:px-10'>
                        <p className='mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>
                          {hotel.testimonial.message}
                        </p>
                        <p className='text-xl font-bold'>
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Recommendation;
