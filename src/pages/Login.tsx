import React from 'react'

const Login = () => {
  return (
    // Full screen container with gradient background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 p-4">
      
      {/* Login form container */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        
        {/* Logo centered above the form */}
        <img src="/vite.svg" alt="Logo" className="mx-auto mb-4 h-12 w-12" />
        
        {/* Page title */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Connexion</h1>
        
        {/* Login form */}
        <form className="space-y-5">
          
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200"
          >
            Log in
          </button>
        </form>

        {/* Registration link */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Don't have an account yet?
          <a href="#" className="ml-1 text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
