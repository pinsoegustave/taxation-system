"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NAVLINKS } from "..";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "react-feather";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <nav className="flexBetween padding-container max-container relative z-10 py-5">
      <div className=" bg-black">
        <Link href={'/'}>
        <Image
          src={"/Numetric.png"}
          alt="logo"
          priority
          width={200}
          height={100}
          />
          </Link>
      </div>
      <div className="flexCenter">
        <ul className="hidden h-full lg:flex gap-4 text-black">
          {NAVLINKS.map((navs) => (
            <Link href={navs.link} key={navs.label} className="">
              <li>{navs.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="lg:flexCenter hidden gap-4 ">
        <Link href={"/login"}>
          <Button type="button" title="Login" variant="btn_green" />
        </Link>
        <Link href={"/sign-up"}>
          <Button type="button" title="Open Account" variant="btn_dark_pink" />
        </Link>
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden" onClick={handleMenu}>
        {open === false ? <Menu /> : <X />}
      </div>
      {open ? (
        <div className="absolute md:hidden block bg-red-100 w-full h-full px-10 py-60 right-0 top-24 rounded-lg">
          <div className="absolute top-12 regular-14 flex flex-col text-white/70 gap-4 text-[18px] hover:text-white hover:transition-200">
            <div className="py-8">
              {NAVLINKS.map((nav) => (
                <Link
                  href={nav.link}
                  key={nav.label}
                  className="bold-20 text-black/80 block cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
            <div className="lg:flexCenter md:hidden gap-4 grid grid-rows-2 ">
              <Link href={"/login"}>
                <Button type="button" title="Login" variant="btn_green" />
              </Link>
              <Link href={"/sign-up"}>
                <Button
                  type="button"
                  title="Open Account"
                  variant="btn_dark_pink"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
