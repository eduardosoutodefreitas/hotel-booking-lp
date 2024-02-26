"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";
import { useRef } from "react";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px",
  });
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className='py-12 xl:pt-0 xl:pb-24' ref={ref}>
      <div className='container mx-auto'>
        <div>
          <motion.div
            initial='hidden'
            whileInView={"show"}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            variants={fadeIn({ delay: 0.2, direction: "right" })}
            className='flex flex-col xl:flex-row'
          >
            <div className='flex-1 relative'>
              <Image src={"/about/img2.png"} alt='' width={559} height={721} />
            </div>

            <motion.div
              className='xl:max-w-[470px]'
              initial='hidden'
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              variants={fadeIn({ delay: 0.5, direction: "left" })}
            >
              <h2 className='h2 mb-[38px]'>About Hotely</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus quibusdam nihil, quas placeat dolores alias? Quo
                error esse, debitis quibusdam perspiciatis odio omnis dolorum
                saepe architecto eaque inventore sapiente corrupti.
              </p>
              <div className=' my-5 xl:my-10 min-h-[35px]'>
                {isInView && <Stats />}
              </div>
              <p className='mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                aspernatur reiciendis impedit, earum sint quam. Fugit eaque
                nulla consequuntur iste.
              </p>
              <Button variant={"accent"}>Explore More</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
