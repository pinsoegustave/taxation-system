"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Contact = () => {
  const handleSubmit = async () => {
    console.log("data");
  };
  return (
    <section className="padding-container max-container bg-slate-200 py-10">
      <div className="bold-40 mx-auto text-center">
        <h2>
          Need A Taxation Advisor For Your Business?
        </h2>
          <p className="bold-32 text-green-50 text-center">Contact Us Today</p>
      </div>
      <div className="md:flexCenter gap-20 py-5">
        {/* Contact form */}
        <div className="w-full md:w-[30vw]">
          <h2 className="text-green-50 bold-20 text-[100px] text-center">Fill the form</h2>
          <form onSubmit={handleSubmit} action="" method="post" className="">
            <div className="w-full ">
              <label htmlFor="" className="">
                Name<sub>(required)</sub>
              </label>
              <div className="flex gap-4 w-full">
                <div>
                  <span className="">FirstName</span>
                  <input
                    type="text"
                    name=""
                    id="fname"
                    className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
                  />
                </div>
                <div>
                  <span className="py-4">LastName</span>
                  <input
                    type="text"
                    name=""
                    id="lname"
                    className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Email<sub>(required)</sub>
              </label>
              <input
                type="text"
                id="email"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Subject<sub>(required)</sub>
              </label>
              <input
                type="text"
                id="phone"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white w-full"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="" className="">
                Message<sub>(required)</sub>
              </label>
              <textarea
                id="message"
                className="font-[300] bg-[#63798D] py-2 px-4 outline-none text-white placeholder:text-white"
              />
            </div>
            <div className="ml-32 mt-4">
              <Button type="submit" title="Submit" variant="btn_dark_pink" />
              {/* <Toaster richColors /> */}
            </div>
          </form>
        </div>
        <div className="py-5 md:py-0 md:w-[40vw]" id="#info-details">
          <h4 className="bold-20">Need help? Get in Touch</h4>
          <p className="py-10">In need of a quick information, you can also use the following contacts to reach out to us. Feel free to contact</p>
          <div className="flex gap-4">
            <Image
            src={`/call.png`}
            alt="call"
            width={50}
            height={50}
            />
            <div className="">
            <h4 className="text-green-50 bold-16">Call us:</h4>
            <span>+250 798 735 385</span>
            </div>
          </div>
          <div className="flex gap-4 py-10">
            <Image
            src={`/email.png`}
            alt="email"
            width={50}
            height={50}
            />
            <div className="">
            <h4 className="text-green-50 bold-16">Email:</h4>
            <span>info@infinitytech.rw</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
            <Image
            src={`/address.png`}
            alt="call"
            width={50}
            height={50}
            />
            </div>
            <div className="">
            <h4 className="text-green-50 bold-16">Address:</h4>
            <span>Gisozi, YONGWE TV Building 2<sup>nd</sup> floor</span>
            <p>Gasabo District, Gisozi, Kigali - Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
