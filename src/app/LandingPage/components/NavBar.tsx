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
        <section className='py-4 px-8 lg:px-40 max-lg:px-20 z-40 fixed w-full backdrop-filter backdrop-blur-lg bg-black bg-opacity-50 '>
         <div className='container rounded-full '>
              <div className='flex justify-between w-full border border-white/10 rounded-full p-2 px-4 items-center'>

              {/*----- NavBar Logo in left corner ----- */}
                <div className=''>
                  <Image src={BemaxoLogo} alt='Bemaxo logo' className='h-9 md:h-12 w-auto'></Image>
                </div>
              {/*----- NavBar Button [Loops, Stream and Chat] ----- */}
                <div className=''>
                  <IoMenu className='text-white text-2xl md:hidden'/>
                  <div className='max-md:hidden flex gap-4'>
                    <Link href="#" className='flex max-lg:hidden items-center justify-center h-12 rounded-full px-2 font-bold hover:text-purple-600'>
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