"use client";

import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover } from "./ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const selectedDate = date || new Date();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full justify-between text-left font-medium",
            !date && "text-black"
          )}
          variant={"default"}
        >
          {date ? format(date, "d MMM") : <span>Pick a date</span>}
          <CalendarIcon className='mr-2 size-5 text-black' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Calendar
          mode='single'
          selected={selectedDate}
          onSelect={(newDate) => setDate(newDate)}
          initialFocus
          className='bg-white'
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
