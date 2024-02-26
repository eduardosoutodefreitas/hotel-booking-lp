"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../variants";

const hotelData = [
  {
    image: "/find/hotel-1.png",
    name: "Hotel de Luna",
    location: "Singapore",
  },
  {
    image: "/find/hotel-2.png",
    name: "Ina Tretes Hotel",
    location: "Singapore",
  },
  {
    image: "/find/hotel-3.png",
    name: "Delight Hotel",
    location: "Singapore",
  },
  {
    image: "/find/hotel-4.png",
    name: "Mercusuar Hotel",
    location: "Singapore",
  },
];
const Find = () => {
  return (
    <section className='py-12 xl:py-36'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <motion.h2
            initial='hidden'
            whileInView='show'
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeIn({ delay: 0.2, direction: "up" })}
            className='h2 mb-6'
          >
            Find your best hotel
          </motion.h2>
          <motion.p
            initial='hidden'
            whileInView='show'
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeIn({ delay: 0.4, direction: "up" })}
            className='max-w-[638px] mx-auto mb-8'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            sequi voluptatem delectus esse, facilis nobis fugiat mollitia atque
            voluptatum assumenda.
          </motion.p>

          <motion.div
            initial='hidden'
            whileInView='show'
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeIn({ delay: 0.6, direction: "up" })}
          >
            <Button className='px-12 mb-14 xl:mb-28' variant={"accent"}>
              View All
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeIn({ delay: 0.2, direction: "up" })}
          className='grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]'
        >
          {hotelData.map((hotel, index) => (
            <div
              key={index}
              className='border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0'
            >
              <Image
                src={hotel.image}
                width={270}
                height={270}
                alt={hotel.name}
              />
              <div className='p-6 '>
                <h4 className='h4 group-hover:text-white transition-all duration-300'>
                  {hotel.name}
                </h4>
                <p className='group-hover:text-white transition-all duration-300'>
                  {hotel.location}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Find;
