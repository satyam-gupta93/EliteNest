import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Projects = () => {
   const [currIndx,setCurrIndx] = useState(0);
   const [cardsToShow,setCardsToShow] = useState(1);

   useEffect(()=>{
      const updateCardsToShow = ()=>{
        if(window.innerWidth>=1024){
          setCardsToShow(projectsData.length)
        }else{
          setCardsToShow(1)
        };
      }
        updateCardsToShow();
        window.addEventListener("resize",updateCardsToShow);
        return ()=> window.removeEventListener("resize",updateCardsToShow);
      
   },[])

   const nextProject = () =>{
          setCurrIndx((prevIndx)=>(prevIndx+1)%projectsData.length)
   }
   const prevProject = () =>{
    setCurrIndx((prevIndx)=> prevIndx=== 0 ? projectsData.length-1 : prevIndx - 1)
}
  return (
    <motion.div initial={{opacity:0,y:100}} transition={{duration:1}} whileHover={{opacity:1,y:0}} viewport={{once:true}} className=" container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hiddden " id='Project'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
            <p className='text-gray-500 max-w-80  mb-8 text-center mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
            <div className='flex justify-end items-center mb-8 '>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer ' aria-label='Previous Project'>
                  <img src={assets.left_arrow} alt="Previous"  />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer ' aria-label='Next Project'>
                  <img src={assets.right_arrow} alt="Next" />
                </button>

            </div>
            <div className='overflow-hidden'>
              <div className='flex gap-8 transition-transform duration-500  ease-in-out ' style={{
                transform:`translateX(-${(currIndx*100)/cardsToShow}%)`
              }}>
                {
                  projectsData.map((project,indx)=>(
                      <div key={indx} className='relative flex-shrink-0 w-full sm:w-1/4 '>
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                      <h2 className=' text-xl font-semibold text-gray-800'>{project.title}</h2>
                                      <p className='text-gray-500 text-sm'>{project.price} <span> | </span>{project.location}</p>
                                </div>
                            </div>
                      </div>
                  ))
                }
              </div>
            </div>
        </motion.div>
  )
}

export default Projects