"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { fadeIn } from "../../variants";

const Featured = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView={"show"}
      viewport={{
        once: false,
        amount: 0.4,
      }}
      variants={fadeIn({ delay: 0.2, direction: "right" })}
      className='bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]'
    >
      <div className='flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left'>
        <div className=' bg-white shadow-lg grid place-items-center text-soft_green-secondary size-16 p-3 rounded-xl'>
          <Heart size={42} strokeWidth={1.2} fill='#85c7dc' />
        </div>
        <h2 className='h2 flex-1 text-soft_green leading-relaxed'>
          Book and awesome room in less than 1 minute.
        </h2>
        <p className='flex-1 text-soft_green leading-loose'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          alias aliquam similique doloremque voluptatum eos iste, eaque
          suscipit. Nemo totam sapiente explicabo earum inventore rem ipsum!
        </p>
      </div>
    </motion.section>
  );
};

export default Featured;
