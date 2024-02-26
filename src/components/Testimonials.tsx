"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const testimonialData = [
  {
    image: "/testimonials/img-1.png",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iusto, sed iure illum officiis itaque cum autem in ducimus ipsa ipsum quos optio. Omnis minima iste at cum aut nobis quia suscipit eos beatae a.",
    personName: "Robert Rene",
    location: "Singapore",
  },
  {
    image: "/testimonials/img-2.png",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iusto, sed iure illum officiis itaque cum autem in ducimus ipsa ipsum quos optio. Omnis minima iste at cum aut nobis quia suscipit eos beatae a.",
    personName: "Robert Rene",
    location: "Singapore",
  },
];
const Testimonials = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0,
      }}
      variants={fadeIn({ delay: 0.2, direction: "up" })}
      className='bg-soft_green xl:h-[880px] '
    >
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{
          once: true,
          amount: 0,
        }}
        variants={fadeIn({ delay: 0.4, direction: "up" })}
        className='container mx-auto'
      >
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='xl:h-[680px] overflow-hidden'
          spaceBetween={10}
        >
          {testimonialData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24'>
                <Image
                  src={slide.image}
                  alt={slide.personName}
                  quality={100}
                  width={470}
                  height={470}
                  className='hidden xl:flex'
                />
                <div className='flex-1 bg-white/20 text-white p-12'>
                  <p className='text-lg leading-9 mb-8'>{slide.message}</p>
                  <p className='text-xl font-bold'>{slide.personName}</p>
                  <p>{slide.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
