import Image from "next/image";
import React from "react";
import Button from "./Button";

const Service = () => {
  return (
    <div className="padding-container flexCenter block py-10 bg-gray-10">
      <div className="text-center">
        <p>Our Service</p> <br />
        <h1 className="text-green-50 bold-40">What Service We Offer</h1>
        <div className="md:w-1/2 mx-auto">
        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore soluta autem, voluptatem fugiat laudantium.</p>
        </div>
        <div className="mt-5 w-full md:w-4/5 rounded-l-lg bg-white border mx-auto block md:flex shadow-md">
          <div className=" rounded-l-lg">
          <Image 
          src={`/service.png`}
          alt="service"
          width={500}
          height={300}
          className="rounded-l-lg"
          />
          </div>
          <div className="w-full md:w-3/6 my-auto ">
          <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus possimus, ipsum numquam earum tempore temporibus labore modi recusandae consequatur. Quidem aut ratione voluptatem et adipisci aperiam omnis, nihil similique.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus possimus, ipsum numquam earum tempore temporibus labore modi recusandae consequatur. Quidem aut ratione voluptatem et adipisci aperiam omnis, nihil similique.</p>
          <div className="flexCenter py-4 md:py-0">
          <Button 
          type="button"
          title="Work with us"
          variant="btn_green"
          />
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Service;
