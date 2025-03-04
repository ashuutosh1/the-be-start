"use client"

import { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

export default function SignInForm() {
  const [usePhone, setUsePhone] = useState(false);

  return (
    <div className="flex flex-col justify-center p-6">
      <div className="px-2 py-2.5 sm:px-4">
        {/* Login Form */}
        <form id="main-login" className="flex flex-col gap-3 pb-4">
          <h1 className="mb-4 text-2xl font-bold ">Login</h1>

          {usePhone ? (
            // Phone Number Input
            <div>
              <div className="mb-2">
                <label className="text-sm font-bold text-gray-500" htmlFor="phone">
                  Enter Phone Number:
                </label>
              </div>
              <div className="flex w-full rounded-lg pt-1">
                <div className="relative w-full">
                  <input
                    className="block w-full border bg-gray-50 border-gray-300 text-black focus:border-purple-500 focus:ring-purple-500 p-2.5 text-sm rounded-lg"
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="w-full mt-5 border transition-colors focus:ring-2 p-0.5 border-transparent bg-purple-500 hover:bg-purple-700 active:bg-purple-800 text-white rounded-lg"
              >
                <div className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                  Send OTP
                </div>
              </button>
            </div>
          ) : (
            // Email and Password Input
            <>
              <div>
                <div className="mb-2">
                  <label className="text-sm font-bold text-gray-500" htmlFor="email">
                    Enter Email or Username:
                  </label>
                </div>
                <div className="flex w-full rounded-lg pt-1">
                  <div className="relative w-full">
                    <input
                      className="block w-full border bg-gray-50 border-gray-300 text-black focus:border-purple-500 focus:ring-purple-500 p-2.5 text-sm rounded-lg"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email address or username"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2">
                  <label className="text-sm font-bold text-gray-500 " htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="flex w-full rounded-lg pt-1">
                  <div className="relative w-full">
                    <input
                      className="block w-full border bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-purple-500 p-2.5 text-sm rounded-lg"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="********"
                      required
                    />
                  </div>
                </div>
                <p className="mt-2 cursor-pointer text-sm hover:text-purple-600">Forgot password?</p>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="border transition-colors focus:ring-2 p-0.5 border-transparent bg-purple-500 hover:bg-purple-700 active:bg-purple-800 text-white rounded-lg"
              >
                <div className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                  Login
                </div>
              </button>
            </>
          )}



          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow h-0.5 border-t-0 bg-black/10" />
            <span className="px-4 text-gray-500 ">OR</span>
            <hr className="flex-grow h-0.5 border-t-0 bg-black/10" />
          </div>

          {/* Toggle between Email and Phone Login */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setUsePhone(!usePhone)}
              className="transition-colors  hover:bg-gray-200 text-gray-900 border border-gray-300 rounded-lg"
            >
              <span className="flex items-center justify-center gap-2 font-medium py-1 px-2.5 text-base">
                
                {usePhone ? <FaRegCircleUser/> : <FaPhoneAlt /> }
                {usePhone ? "Log in with Email or username" : "Log in with Phone Number"}
              </span>
            </button>
          </div>
        </form>

        {/* New User Signup */}
        <div className="min-w-[270px]">
          <div className="mt-4 text-center text-gray-500">
            New user?{" "}
            <Link className="text-purple-500 underline hover:text-purple-700" href="/SignUp">
              Create account here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
