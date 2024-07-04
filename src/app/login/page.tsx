'use client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '../../lib/actions'

function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <div className='flex h-screen justify-center items-center w-full'>
        <form className="min-w-[20%] mx-auto p-10 bg-slate-50 shadow-lg rounded-lg" action={dispatch}>
            <div className='w-full text-center text-xl mb-5 font-bold'>WELCOME</div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" id="email" name='email' className=" border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                <input type="password" id="password" name='password' className=" border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div>{errorMessage && <p>{errorMessage}</p>}</div>
            <LoginButton />
        </form>
    </div>
  )
}

function LoginButton() {
    const { pending } = useFormStatus()
   
    const handleClick = (event: { preventDefault: () => void }) => {
      if (pending) {
        event.preventDefault()
      }
    }
   
    return (
      <button 
        aria-disabled={pending} 
        type="submit" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}>
        Login
      </button>
      
    )
  }

export default LoginPage