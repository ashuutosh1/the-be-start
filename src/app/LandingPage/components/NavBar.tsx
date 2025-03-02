"use client"

import Image from 'next/image'
import React from 'react'
import BemaxoLogo from "../../../../public/Landing-assets/light-theme-logo.png";
import { IoMenu } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import Link from 'next/link';


function NavBar() {
  return (
    <> 
        <section className='py-4 px-8 lg:px-40 z-40 fixed w-full backdrop-filter backdrop-blur-lg bg-black bg-opacity-50 '>
         <div className='container rounded-full '>
              <div className='grid grid-cols-2 border border-white/10 rounded-full p-2 px-4 items-center'>
                <div>
                  <Image src={BemaxoLogo} alt='Bemaxo logo' className='h-9 md:h-12 w-auto'></Image>
                </div>
                <div className='flex justify-end '>
                  <IoMenu className='text-white text-2xl md:hidden'/>
                  <div className='max-md:hidden flex gap-4'>
                    <Link href="#" className='flex items-center justify-center h-12 rounded-full px-2 font-bold hover:text-purple-600'>
                       <button className='flex gap-2 '><MdOutlineExplore className='text-2xl' />
                        Explore
                        </button>
                    </Link>
                    <button className='text-sm border border-white h-12 rounded-full px-6 font-bold'>Loops</button>
                  
                    <button className='text-sm border border-white h-12 rounded-full px-6 font-bold'>Stream</button>
                    <button className='text-sm border border-white h-12 rounded-full px-6 font-bold bg-purple-500'>Chat</button>
                  </div>
                  
                </div>
              </div>
          </div>  
        </section>   
    </>
    
  )
}

export default NavBar