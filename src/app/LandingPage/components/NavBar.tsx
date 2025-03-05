"use client"

import Image from 'next/image'
import React from 'react'
import BemaxoLogo from "../../../../public/Landing-assets/term-logo-light.png";
import { MdOutlineExplore } from "react-icons/md";
import Link from 'next/link';


function NavBar() {
  return (
    <>
      <section className='py-4 px-8 lg:px-40 max-lg:px-20 z-40 fixed w-full  '>
        <div className='container rounded-full backdrop-filter backdrop-blur-lg bg-gray-50 bg-opacity-50'>
          <div className='flex justify-between max-lg:items-center max-lg:justify-center w-full border border-black/10 rounded-full p-2 px-4 items-center'>

            {/*----- NavBar Logo in left corner ----- */}
            <div className=''>
              <Image src={BemaxoLogo} alt='Bemaxo logo' className='h-9 md:h-12 w-auto'></Image>
            </div>
            {/*----- NavBar Button----- */}
            <div className=''>
              <div className='max-md:hidden flex gap-4'>
                <Link href="#" className='flex max-lg:hidden items-center justify-center h-12 rounded-full px-2 font-bold hover:text-purple-600'>
                  <button className='flex gap-2 '><MdOutlineExplore className='text-2xl' />
                    Explore
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default NavBar