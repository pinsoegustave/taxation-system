import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white/35 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Numetric</span>Taxation
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Create an account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebook className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedin className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-300 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id=""
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    name="email"
                    id=""
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="email"
                    id=""
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flexBetween w-64 mb-5"></div>
                <Link
                  href={"/sign-in"}
                  className="border-2 border-green-500 text-green-50 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-50 hover:text-white"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          {/* Sign in section */}
          <div className="w-2/5 bg-green-50 text-white rounded-tr-2xl rounded-br-2xl py-36 px-4">
            <h2 className="text-3xl font-bold mb-2">Have an account!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              You can use your registered account with us.
            </p>
            <Link
              href={"/login"}
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-50"
            >
              Sign in
            </Link>
          </div>
          {/* Sign Up section */}
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default page;
