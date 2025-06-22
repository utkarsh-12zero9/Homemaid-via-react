function Login() {

    return (
        <div className="relative flex items-center justify-center h-screen bg-gray-200">
            <button onClick={() => window.location.href = '/'}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full
         shadow-lg hover:bg-[#00246B] hover:text-white focus:outline-none border-2"
            >
                <span className="text-2xl font-medium">&times;</span>
            </button>


            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-96 mt-10">
                <h1 className="text-4xl text-[#00246B] font-bold text-center mb-4">Login</h1>
                <form>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-md font-medium text-gray-800">
                            Email ID:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="block text-md font-medium text-gray-800">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 mt-1 text-gray-800 bg-white bg-opacity-50 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                className="w-4 h-4 text-[#00246B] border-gray-300 rounded focus:ring-[#00246B]"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-800">Remember me</label>
                        </div>
                        <a className="text-sm text-[#00246B] hover:underline cursor-pointer">Forgot Password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-lg font-bold text-white bg-[#00246B] rounded-lg hover:bg-[#001a4d] hover:scale-105 focus:outline-none focus:ring-1 focus:ring-[#00246B]"
                    >
                        Login
                    </button>
                    <hr className="my-4 border-gray-400" />
                    <div className="mt-4 ml-8">
                        <p className="text-center mr-7 text-gray-800 mb-2">Or login with</p>
                        <div className="flex gap-4 items-center">
                            <button
                                className="flex items-center px-3 py-2 border rounded-lg bg-white text-black hover:bg-gray-200 focus:outline-none"
                                onClick={() => console.log('Login with Google')}
                            >
                                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Icon" className="w-7 h-7 mr-2" />
                                Google
                            </button>
                            <button
                                className="flex items-center px-4 py-2 border rounded-lg bg-white text-black hover:bg-gray-200 focus:outline-none"
                                onClick={() => console.log('Login with Facebook')}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Icon" className="w-7 h-7 mr-2" />
                                Facebook
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login;