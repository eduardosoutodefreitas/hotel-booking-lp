"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-white' size={36} />
      </SheetTrigger>

      <SheetContent side={"left"}>
        <div className='flex flex-col justify-between h-full p-12'>
          <Link href={"/"} className='mb-24'>
            <Image
              src={"/footer/logo.svg"}
              alt='logo'
              priority
              width={90}
              height={46}
            />
          </Link>
          <Nav
            containerStyles='text-black'
            listStyles='flex flex-col gap-y-6 text-xl'
          />
          <Socials containerStyles='flex gap-x-4 text-black ' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
