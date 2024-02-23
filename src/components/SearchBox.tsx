"use client";

import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { motion } from "framer-motion";
import DatePicker from "./DatePicker";
import GuestSelect from "./GuestSelect";
import { fadeIn } from "../../variants";
const SearchBox = () => {
  return (
    <motion.div
      variants={fadeIn({ direction: "up", delay: 0.2 })}
      initial='hidden'
      whileInView={"show"}
      viewport={{
        amount: 0,
        once: false,
      }}
      className='w-full max-w-[488px] bg-white max-h-max flex flex-col border border-outline rounded-[20px] p-10'
    >
      <div className='flex flex-col'>
        <Label htmlFor='destination'>Where are you going?</Label>
        <div className='relative flex items-center mb-[20px]'>
          <Input id='destination' placeholder='try "Singapore"' />
          <MapPin size={24} className='absolute right-6 text-black' />
        </div>

        <div className='flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0'>
          <div className='flex flex-col flex-1'>
            <Label>Check in</Label>
            <DatePicker />
          </div>
          <div className='flex flex-col flex-1'>
            <Label>Check out</Label>
            <DatePicker />
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-1 flex-col mb-[24px]'>
          <Label>Guests</Label>
          <GuestSelect />
        </div>
        <div className='flex items-center gap-x-3 mb-[24px]'>
          <Checkbox id='terms' />
          <Label className='font-medium mb-0' htmlFor='terms'>
            Pay when checking in?
          </Label>
        </div>
        <Button size={"lg"} variant={"accent"}>
          Search Hotel
        </Button>
      </div>
    </motion.div>
  );
};

export default SearchBox;
