import React from 'react';
import { useRef } from 'react';

function SignUp() {


    return (
    <>
        <div className='h-screen bg-gray-200 flex justify-center items-center'>
            <div className='top-4 w-105 rounded-xl mt-13 shadow-lg bg-white'>
                <h1 className='font-bold text-3xl mt-5 text-center text-[#00246B]'>Sign Up</h1>
                <form className='p-8 -mt-2'>
                    <div className='mb-2 text-sm text-gray-800'>
                        <label htmlFor="FirstName">First Name:</label>
                        <input type="Name" id='Name' name='FirstName' className="w-full px-3 py-1 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]" required />
                    </div>
                    <div className='mb-2 text-sm text-gray-800'>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="Name" id='Name' name='LastName' className="w-full px-3 py-1 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]" required />
                    </div>
                    <div className='mb-2 text-sm text-gray-800'>
                        <label htmlFor="Email">Email ID:</label>
                        <input type="email" id='email' name='email' className="w-full px-3 py-1 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                        Password:
                        </label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-0.5 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                        required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                        Confirm Password:
                        </label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-0.5 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Phone" className='block text-sm font-medium text-gray-800'>Phone:</label>
                        <input type="Phone" id="phone" name="phone" className='w-full px-3 py-0.5 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]' required />
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-[#00246B] text-white px-6 py-2 -mb-2 rounded-lg hover:bg-[#001a4d] hover:scale-105'>Sign Up</button>
                    </div>
                    <hr className="my-5 mt-4 border-gray-700" />
                    <div className="mt-2 ml-5 mr-5">
                        <p className="text-center mr-5 ml-5 font-bold text-gray-800 mb-1">OR</p>
                        <div className="flex flex-col gap-4 justify-center flex-cols items-center">
                            <button
                            className="flex items-center px-3 py-2 border rounded-lg bg-white text-black hover:bg-gray-200 focus:outline-none"
                            // onClick={() => console.log('Login with Google')}
                            >
                            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Icon" className="w-7 h-7 mr-2" />
                            SignUp with Google
                            </button>
                            <button
                            className="flex items-center px-4 py-2 border rounded-lg bg-white text-black hover:bg-gray-200 focus:outline-none"
                            // onClick={() => console.log('Login with Facebook')}
                            >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Icon" className="w-7 h-7 mr-2" />
                            SignUp with Facebook
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </>
    
  )
}

export default SignUp