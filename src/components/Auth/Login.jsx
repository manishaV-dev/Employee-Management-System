import React from 'react'

function Login() {
  return (
    <>
    <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-2 border-purple-400 px-10 py-20">
            <form className='flex flex-col items-center justify-center'>
                <input className='text-white border-2 border-purple-400 px-5 py-2 rounded-full text-sm outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input className='text-white border-2 border-purple-400 px-5 py-2 rounded-full text-sm outline-none bg-transparent placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password' />
                <button className='text-white border-none px-8 py-2 rounded-full text-sm outline-none bg-purple-600 placeholder:text-gray-400 mt-3'>Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login