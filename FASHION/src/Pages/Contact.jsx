import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

export default function Contact() {
  return (
       <>
        
              <h1 className='text-7xl text-center'>Welcome to Contact page</h1>

    <div className="p-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form className="mt-4 max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>

        </>
  )
}
