import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    return (
        <>
            <div className='h-screen bg-gray-200 flex justify-center items-center relative'>
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-[#00246B] hover:text-white focus:outline-none border-2 cursor-pointer"
                >
                    <span className="text-2xl font-medium">&times;</span>
                </button>
                <div className='w-[420px] rounded-xl shadow-lg bg-white'>
                    <h1 className='font-bold text-3xl mt-5 text-center text-[#00246B]'>Sign Up</h1>
                    <form className='p-8'>
                        <div className='flex gap-5'>
                            <div className='mb-2 text-sm text-gray-800 w-1/2'>
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    id='firstName'
                                    name='firstName'
                                    className="w-full px-3 py-1 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                                    required
                                />
                            </div>
                            <div className='mb-2 text-sm text-gray-800 w-1/2'>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id='lastName'
                                    name='lastName'
                                    className="w-full px-3 py-1 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                                    required
                                />
                            </div>
                        </div>
                        <div className='mb-2 text-sm text-gray-800'>
                            <label htmlFor="email">Email ID:</label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                className="w-full px-3 py-1 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                                required
                            />
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
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800">
                                Confirm Password:
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-3 py-0.5 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className='block text-sm font-medium text-gray-800'>Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className='w-full px-3 py-0.5 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]'
                                required
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='bg-[#00246B] text-white px-6 py-2 -mb-2 rounded-lg hover:bg-[#001a4d] hover:scale-105'>Sign Up</button>
                        </div>
                        <hr className="my-5 mt-4 border-gray-700" />
                        <div className="mt-2 ml-5 mr-5">
                            <p className="text-center font-bold text-gray-800 mb-1">Or Sign Up</p>
                            <div className="flex gap-5 justify-center items-center">
                                <button
                                    type="button"
                                    className="flex items-center px-3 py-2 border rounded-lg bg-white text-black hover:bg-gray-200 focus:outline-none"
                                >
                                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Icon" className="w-7 h-7 mr-2" />
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center px-4 py-2 border rounded-lg bg-white text-black hover:bg-gray-200 focus:outline-none"
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Icon" className="w-7 h-7 mr-2" />
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;