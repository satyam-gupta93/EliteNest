import React from 'react'
import { testimonialsData } from '../assets/assets'
import { motion } from "motion/react"
const Testimonial = () => {
  return (
    <motion.div initial={{opacity:0,y:100}} transition={{duration:1}} whileHover={{opacity:1,y:0}} viewport={{once:true}} className="flex flex-col items-center justify-center container mx-auto p-6 sm:p-10 md:p-14 lg:px-32 w-full" id="Testimonial">
    <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonials</span>
    </h1>
    <p className="text-gray-500 max-w-xl text-center mb-8">
    Real Stories from Those Who Found Home with Us
    </p>

    {/* Responsive Grid for Testimonials */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {testimonialsData.map((testimonialData, indx) => (
            <div key={indx} className="w-full sm:max-w-[340px] mx-auto border shadow-lg px-6 py-10 border-gray-200 rounded-md flex flex-col gap-4 items-center text-center">
                <img src={testimonialData.image} alt={testimonialData.name} className="w-16 h-16 rounded-full object-cover" />
                <h2 className="text-lg font-semibold text-gray-700">
                    {testimonialData.name}
                </h2>
                <p className="font-light text-gray-500 text-sm">{testimonialData.title}</p>
                <p className="text-yellow-500 text-lg">{'⭐'.repeat(testimonialData.rating)}</p>
                <p className="text-sm text-gray-600">{testimonialData.text}</p>
            </div>
        ))}
    </div>
</motion.div>


  )
}

export default Testimonial