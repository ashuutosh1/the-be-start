
import React from 'react';

import SignInForm from './SigninForm';
import HeroLogo from './HeroLogo';

function HeroPage() {
  return (
    <>
      <div className="h-screen lg:flex flex-wrap justify-between pb-20 xl:px-60 lg:px-40 md:10 sm:px-10 pt-32 max-lg:pt-20">

        {/*----- Big Logo and Explore Section ----- */}
        <div className='flex-1 items-center md:justify-center'>
          <HeroLogo />
        </div>


        {/* ----- Login Form Section ----- */}
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <div className="rounded-lg border-2 bg-gray-50 shadow-md  flex flex-col items-center justify-center ">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
