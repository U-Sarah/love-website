import React from 'react'

const WelcomePage = ({onProceed}) => {
  return (
    <div className='bg-gray-800 h-screen items-center justify-center flex flex-col'>
      <h1 className="text-3xl font-bold text-center mt-8 text-pink-600">
            Welcome to our Love Story!❤
          </h1>
          <h2 className='text-2xl sm:p-6 font-semibold text-center mt-8 text-pink-600'>Excited, yeah?😍. Click the button to proceed</h2>
          <button onClick={onProceed} className='bg-pink-500 text-white px-7 py-3 rounded-lg shadow-md hover:bg-pink-600 mt-5 transition'>Proceed</button>
    </div>
  )
}

export default WelcomePage
