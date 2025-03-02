import { FaPhoneAlt } from "react-icons/fa";

export default function SignInForm() {
    return (
        
       <div className="flex  flex-col justify-center p-6">
                <div className="px-2 py-2.5 sm:px-4">
                  <form className="flex flex-col gap-4 pb-4">
                    <h1 className="mb-4 text-2xl font-bold dark:text-white">Login</h1>
                    <div>
                      <div className="mb-2">
                        <label className="text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="email">
                          Email:
                        </label>
                      </div>
                      <div className="flex w-full rounded-lg pt-1">
                        <div className="relative w-full">
                          <input
                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-black focus:border-purple-500 focus:ring-purple-500 p-2.5 text-sm rounded-lg"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2">
                        <label className="text-sm font-bold text-gray-900 dark:text-gray-300" htmlFor="password">
                          Password
                        </label>
                      </div>
                      <div className="flex w-full rounded-lg pt-1">
                        <div className="relative w-full">
                          <input
                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-purple-500  dark:text-black  p-2.5 text-sm rounded-lg"
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

                    <div className="flex flex-col gap-2">
                      <button
                        type="submit"
                        className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-purple-500 hover:bg-purple-700 active:bg-purple-800 text-white  rounded-lg"
                      >
                        <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                          Login
                        </span>
                      </button>

                      <button
                        type="button"
                        className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                      >
                        <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1"
                                        x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                        <path fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                                        </path>
                                        <path fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                                        </path>
                                        <path fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                                        </path>
                                    </svg>
                          Sign in with Google
                        </span>
                      </button>

                      <button
                        type="button"
                        className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg"
                      >
                        <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                        < FaPhoneAlt /> Sign in with Phone Number
                        </span>
                      </button>
                    </div>
                  </form>

                  <div className="min-w-[270px]">
                    <div className="mt-4 text-center dark:text-gray-200">
                      New user?{' '}
                      <a className="text-purple-500 underline hover:text-purple-700" href="/signup">
                        Create account here
                      </a>
                    </div>
                  </div>
                </div>
              </div> 
    );
  }
  