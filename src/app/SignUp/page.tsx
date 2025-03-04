"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import BemaxoLogo from "../../../public/Landing-assets/term-logo-light.png";
import Link from 'next/link';

function SignPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    reenterPassword: '',
    termsAccepted: true,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked, // 
      }));
    } else {
      if (name === "username") {
        if (!/^[a-zA-Z0-9_]*$/.test(value)) {
          setError("Only letters, numbers, and underscores are allowed!");
          return;
        } else {
          setError("");
        }
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='w-full h-full max-2xl:h-screen bg-gray-200 flex items-center justify-center py-4'>
      <div className='p-10 bg-gray-50 shadow-md rounded-2xl  max-w-xl'>
        <div className='flex items-center justify-center'>
          <Image src={BemaxoLogo} alt='the image' className='max-w-40 h-auto' />
        </div>

        <div className='flex flex-col gap-2 mt-5 items-center justify-center'>
          <h2 className='text-xl font-bold'>Sign Up</h2>
          <span className='font-semibold text-base text-gray-700'>Create account on Bemaxo.com</span>
        </div>
        <form onSubmit={handleSubmit} className='mt-6'>
          {/* First Name and Last Name Fields */}
          <div className='mb-2 flex gap-4 max-sm:flex-col'>
            <div className='flex-1'>
              <label htmlFor='firstName' className='block text-sm font-semibold text-gray-700'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='Enter first name'
                value={formData.firstName}
                onChange={handleChange}
                required
                className='font-medium mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
            <div className='flex-1'>
              <label htmlFor='lastName' className='block text-sm font-semibold text-gray-700'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Enter last name'
                value={formData.lastName}
                onChange={handleChange}
                required
                className='font-medium mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
          </div>

          {/* Username Field */}
          <div className='mb-2 flex gap-4 max-sm:flex-col'>
            <div className='flex-1'>
              <label htmlFor='username' className='block text-sm font-semibold text-gray-700'>
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                placeholder='@ username'
                required
                className='font-medium mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
            <div className='flex-1 flex items-center'>
              {/* <span className='flex items-center font-medium text-green-400 sm:mt-4 gap-2'><FaRegFaceSmileBeam />{" Username is available"}</span> */}
            </div>

          </div>
          {error && <p className="text-red-500 text-sm my-4">{error}</p>}


          {/* Email and Phone Number Fields */}
          <div className='mb-2 flex gap-4 max-sm:flex-col'>
            <div className='flex-1'>
              <label htmlFor='email' className='block text-sm font-semibold text-gray-700'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
                className='font-medium mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
            <div className='hidden'>
              <label htmlFor='phoneNumber' className='block text-sm font-semibold text-gray-700'>
                Phone Number
              </label>
              <input
                type='tel'
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder='Enter phone number'
                required
                className='font-medium mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
          </div>

          {/* Password Field */}
          <div className='mb-2'>
            <label htmlFor='password' className='block text-sm font-semibold text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='............'
              required
              className='font-medium mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          {/* Re-enter Password Field */}
          <div className='mb-2'>
            <label htmlFor='reenterPassword' className='block text-sm font-semibold text-gray-700'>
              Re-enter Password
            </label>
            <input
              type='password'
              id='reenterPassword'
              name='reenterPassword'
              value={formData.reenterPassword}
              onChange={handleChange}
              required
              className='font-medium mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          {/* Terms and Conditions */}
          <div className='mb-2 flex items-center'>
            <input
              type='checkbox'
              id='termsAccepted'
              name='termsAccepted'
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className='h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500'
            />
            <label htmlFor='termsAccepted' className='ml-2 text-sm text-gray-600'>
              By signing up, you agree to our <Link href='/company-terms' className='text-indigo-600'>Terms and Services</Link>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-2 px-4 my-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
          >
            Sign Up
          </button>
        </form>
        <div className='my-2'><Link href='/' className='text-indigo-600'>Already have an account </Link>.</div>
      </div>
    </div>
  );
}

export default SignPage;
