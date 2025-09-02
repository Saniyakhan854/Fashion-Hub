import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

export default function Course() {
  return (
       <>
              <h1 className='text-7xl text-center'>Welcome to Course page</h1>
            <section className="py-20 bg-white">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Our Courses</h2>
                <div className="grid md:grid-cols-3 gap-8 px-6">
                  <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                    <p className="text-gray-600 mb-4">Learn HTML, CSS, JavaScript, and build real projects.</p>
                    <a href="#" className="text-yellow-500 font-medium hover:underline">Learn More</a>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-3">Data Structures</h3>
                    <p className="text-gray-600 mb-4">Master algorithms and problem-solving for coding interviews.</p>
                    <a href="#" className="text-yellow-500 font-medium hover:underline">Learn More</a>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                    <p className="text-gray-600 mb-4">Understand user experience and create stunning interfaces.</p>
                    <a href="#" className="text-yellow-500 font-medium hover:underline">Learn More</a>
                  </div>
                </div>
              </div>
            </section>
        </>
  )
}
