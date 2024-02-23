"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Button } from "./ui/button";
import Stats from "./Stats";

const About = () => {
  return (
    <section className='py-12  xl:pb-24'>
      <div className='container mx-auto'>
        <div>
          <div className='flex flex-col xl:flex-row'>
            <div className='flex-1 relative'>
              <Image src={"/about/img2.png"} alt='' width={559} height={721} />
            </div>

            <div className='xl:max-w-[470px]'>
              <h2 className='h2 mb-[38px]'>About Hotely</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus quibusdam nihil, quas placeat dolores alias? Quo
                error esse, debitis quibusdam perspiciatis odio omnis dolorum
                saepe architecto eaque inventore sapiente corrupti.
              </p>
              <div className=' my-5 xl:my-10 min-h-[35px]'>
                <Stats />
              </div>
              <p className='mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                aspernatur reiciendis impedit, earum sint quam. Fugit eaque
                nulla consequuntur iste.
              </p>
              <Button variant={"accent"}>Explore More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
