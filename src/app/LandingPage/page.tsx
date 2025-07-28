"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Footer from './components/Footer'

function LandingPage() {
  const [isLoading, setIsLoading] = useState<'google' | 'apple' | null>(null)

  const handleGoogleSignIn = async () => {
    setIsLoading('google')
    try {
      // Implement Google OAuth here
      // Example: await signInWithGoogle()
      console.log('Google sign-in initiated')

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

    } catch (error) {
      console.error('Google sign-in error:', error)
    } finally {
      setIsLoading(null)
    }
  }

  const handleAppleSignIn = async () => {
    setIsLoading('apple')
    try {
      // Implement Apple OAuth here
      // Example: await signInWithApple()
      console.log('Apple sign-in initiated')

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

    } catch (error) {
      console.error('Apple sign-in error:', error)
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 animate-gradient-x ">
      <div className="h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl  border-white/30  transition-all duration-500">
          <div className="flex flex-col md:flex-row lg:gap-10">
            {/* Left side - Logo */}
            <div className="w-full md:w-1/2 p-12 max-md:p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-orange-200/30 bg-gradient-to-b from-white/10 to-transparent">
              <div className="w-96 h-96 max-md:w-24 max-md:h-24 relative transform hover:scale-105 transition-transform duration-500 filter drop-shadow-xl">
                <Image
                  src="/Landing-assets/the-logo-2.png"
                  alt="Company Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="animate-float"
                />
              </div>
            </div>

            {/* Right side - Sign In Options */}
            <div className="w-full md:w-1/2 p-12 bg-gradient-to-t from-white/10 to-transparent border-orange-400 border-2 rounded-lg">
              <div className="max-w-md mx-auto">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-3 text-center tracking-tight">
                  Welcome, Bemaxo!
                </h2>

                <p className="text-center text-orange-900 font-medium text-sm uppercase tracking-wide mb-8">
                  Sign in to continue
                </p>

                <div className="space-y-4">
                  {/* Google Sign In Button */}
                  <button
                    onClick={handleGoogleSignIn}
                    disabled={isLoading !== null}
                    className="w-full relative group bg-white/50 hover:bg-white/70 border-2 border-orange-200/50 hover:border-orange-300 text-orange-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_2px_12px_0_rgba(251,146,60,0.2)] hover:shadow-[0_4px_16px_0_rgba(251,146,60,0.3)] transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading === 'google' ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <>
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span>Continue with Google</span>
                      </>
                    )}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                  </button>




                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-orange-200/30"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-4 text-sm text-orange-600 bg-white/30 backdrop-blur-sm rounded-full">or</span>
                    </div>
                  </div>

                  {/* Email Sign In Button */}

                  {/* Apple Sign In Button */}
                  <button
                    onClick={handleAppleSignIn}
                    disabled={isLoading !== null}
                    className="w-full relative group bg-black/80 hover:bg-black/90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_2px_12px_0_rgba(0,0,0,0.3)] hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.4)] transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading === 'apple' ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <>
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <span>Continue with Apple</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Footer Text */}
                <div className="mt-8 text-center space-y-4">
                  <p className="text-orange-800/80 text-sm font-medium">
                    New to Bemaxo?{' '} Just click on any option above to get started!
                  </p>

                  <div className="text-center text-xs pt-5">
                    <p className="text-orange-700/80">
                      By continuing, you agree to our{' '}
                      <a href="/info/terms" className="text-orange-600 hover:text-orange-700 underline decoration-1 underline-offset-2 hover:decoration-orange-400 transition-colors font-medium">
                        Terms & Conditions
                      </a>
                      {' '}and{' '}
                      <a href="/info/privacy" className="text-orange-600 hover:text-orange-700 underline decoration-1 underline-offset-2 hover:decoration-orange-400 transition-colors font-medium">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage