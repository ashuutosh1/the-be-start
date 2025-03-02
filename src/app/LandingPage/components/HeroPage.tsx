
import React from 'react';

import SignInForm from './SigninForm';
import HeroLogo from './HeroLogo';

function HeroPage() {
  return (
    <>
      <div className="pt-32 max-lg:pt-20"></div>
      <div className="h-screen lg:flex flex-wrap justify-between pb-20 xl:px-60 lg:px-40 md:10 sm:px-10">

         {/*----- Logo Section ----- */}
         <div className='flex-1 items-center md:justify-center'>
          <HeroLogo/>
         </div>
         

          {/* ----- Login Section ----- */}
        <div className="flex-1">
          <div className="flex items-center justify-center">
            <div className="rounded-lg border-2 border-gray-400 shadow-md  flex flex-col items-center justify-center ">
              <SignInForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
