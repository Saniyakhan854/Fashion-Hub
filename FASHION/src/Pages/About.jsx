import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function About() {
  return (
    <>
          <h1 className='text-7xl text-center mb-10'>Welcome to About page</h1>
            <section className="py-20 bg-gray-100 text-center">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We are a team dedicated to providing quality education and resources.
                Our mission is to help learners achieve their goals with modern tools and guidance.
              </p>
            </section>
    </>
    
  )
}
