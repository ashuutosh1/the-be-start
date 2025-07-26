"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Footer from './components/Footer'

function LandingPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+1')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle phone number submission
    console.log('Phone number submitted:', countryCode + phoneNumber)
  }

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const countryCodes = [
    { code: '+1', country: 'US/CA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
  ]

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 animate-gradient-x max-md:pt-10">
      <div className="h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-[0_8px_32px_0_rgba(251,146,60,0.37)] overflow-hidden border border-white/30 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.5)] transition-all duration-500">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Logo */}
            <div className="w-full md:w-1/2 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-orange-200/30 bg-gradient-to-b from-white/10 to-transparent">
              <div className="w-72 h-72 max-md:w-40 max-md:h-40 relative transform hover:scale-105 transition-transform duration-500 filter drop-shadow-xl">
                <Image
                  src="/Landing-assets/the-logo-2.png"
                  alt="Company Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                  className="animate-float"
                />
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full md:w-1/2 p-12 bg-gradient-to-t from-white/10 to-transparent">
              <div className="max-w-md mx-auto">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-3 text-center tracking-tight">Welcome, Bemaxo!</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-center text-orange-900 font-medium text-sm uppercase tracking-wide mb-4">
                      Enter Your Phone Number
                    </label>
                    <div className="flex space-x-2">
                      <div className="relative group w-1/3" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-full pl-4 pr-10 py-4 rounded-xl bg-gradient-to-br from-white/50 to-white/30 border-2 border-orange-200/50 
                        focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 
                        transition-all duration-300 text-orange-900 font-medium
                        hover:border-orange-300 hover:from-white/60 hover:to-white/40
                        shadow-inner shadow-white/20 flex items-center"
                        >
                          <span className="mr-2">{countryCodes.find(c => c.code === countryCode)?.flag}</span>
                          <span>{countryCode}</span>
                          <div className="absolute right-0 inset-y-0 flex items-center pr-3 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-white/20 w-10">
                            <svg
                              className={`h-5 w-5 text-orange-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="absolute z-10 w-full mt-2 py-2 bg-white/95 backdrop-blur-lg rounded-xl border-2 border-orange-200/50 shadow-lg transform transition-all duration-300 max-h-60 overflow-y-auto
                          scrollbar-thin scrollbar-track-orange-100/20 scrollbar-thumb-orange-300/60 hover:scrollbar-thumb-orange-400/80
                          [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-orange-100/20 [&::-webkit-scrollbar-thumb]:bg-orange-300/60
                          [&::-webkit-scrollbar-thumb:hover]:bg-orange-400/80 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full">
                            {countryCodes.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setCountryCode(country.code)
                                  setIsOpen(false)
                                }}
                                className={`w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors duration-200 flex items-center space-x-2
                                ${countryCode === country.code ? 'bg-orange-50' : ''}
                                group`}
                              >
                                <span className="font-medium">{country.flag}</span>
                                <span className="font-medium text-orange-900">{country.code}</span>

                              </button>
                            ))}
                          </div>
                        )}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      <div className="relative group flex-1">
                        <input
                          type="tel"
                          id="phone"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                          className="w-full px-5 py-4 rounded-xl bg-white/40 border-2 border-orange-200/50 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition-all placeholder:text-orange-800/30 text-orange-900 text-center font-medium tracking-wide"
                          placeholder="Phone Number"
                          required
                          maxLength={15}
                          pattern="[0-9]*"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                      </div>
                    </div>
                    <p className="text-center text-orange-700/60 text-sm mt-2">
                      We&apos;ll send you a verification code
                    </p>
                  </div>


                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_20px_0_rgba(251,146,60,0.5)] hover:shadow-[0_4px_24px_0_rgba(251,146,60,0.7)] transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Continue
                  </button>
                </form>

                <div className="mt-8 text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-orange-200/30"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-4 text-sm text-orange-600 bg-white/30 backdrop-blur-sm rounded-full">or</span>
                    </div>
                  </div>

                  <p className="text-orange-800/80 text-sm font-medium">
                    Do you have username and password ?{' '}
                    <a href="#" className="font-semibold text-orange-600 hover:text-orange-700 underline decoration-2 underline-offset-2 hover:decoration-orange-400 transition-colors">
                      Click here
                    </a>
                  </p>

                  <div className="text-center text-xs">
                    <p className="text-orange-700/80">
                      By clicking Continue, you agree to our{' '}
                      <a href="/company-terms/terms-condition" className="text-orange-600 hover:text-orange-700 underline decoration-1 underline-offset-2 hover:decoration-orange-400 transition-colors font-medium">
                        Terms & Conditions
                      </a>
                      {' '}and{' '}
                      <a href="/company-terms/privacy-policies" className="text-orange-600 hover:text-orange-700 underline decoration-1 underline-offset-2 hover:decoration-orange-400 transition-colors font-medium">
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