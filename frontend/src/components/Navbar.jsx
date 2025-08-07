import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets.js'

const Navbar = () => {
    const [showMobileMenu,setMobileMenu] = useState(false)
    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
       }
       return()=>{
            document.body.style.overflow = 'auto'
       }
    },[showMobileMenu])
  return (
    <div className=' absolute top-0 left-0 w-full z-10 '>
        <div className='flex container mx-auto justify-between items-center py-5 px-6 md:px-20 lg:px-32 bg-transparent' >
            <img src={assets.logo} alt="" />
            <ul className=' hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Project" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonial" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full '>Sign Up</button>
            <img src={assets.menu_icon} onClick={()=>{
                setMobileMenu(true)
            }} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* For mobile view */}
        <div className={`md:hidden ${showMobileMenu?'fixed w-full'  :"h-0 w-0"} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
            <img src={assets.cross_icon} alt="" onClick={()=>{setMobileMenu(false)}} className='w-6' />
            </div>
           
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                <a href="#Header" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a href="#" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>About</a>
                <a href="#Header" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a href="#Header" onClick={()=>{setMobileMenu(false)}} className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar





// import React, { useEffect, useState } from 'react';
// import { assets } from '../assets/assets.js';

// const Navbar = () => {
//     const [showMobileMenu, setMobileMenu] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         if (showMobileMenu) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [showMobileMenu]);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-transparent backdrop-blur-lg text-white'} md:bg-transparent md:backdrop-blur-lg md:transition-none`}>            
//             <div className='flex container mx-auto justify-between items-center py-4 px-6 md:px-16 lg:px-24'>
//                 {/* Logo */}
//                 <img src={assets.logo} alt='Logo' className='h-12 cursor-pointer' />
                
//                 {/* Desktop Menu */}
//                 <ul className='hidden md:flex gap-8 font-semibold tracking-wide'>
//                     <a href='#Header' className='hover:text-indigo-600 transition duration-300'>Home</a>
//                     <a href='#About' className='hover:text-indigo-600 transition duration-300'>About</a>
//                     <a href='#Project' className='hover:text-indigo-600 transition duration-300'>Projects</a>
//                     <a href='#Testimonial' className='hover:text-indigo-600 transition duration-300'>Testimonials</a>
//                 </ul>
                
//                 {/* Sign Up Button */}
//                 <button className='hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300'>Sign Up</button>
                
//                 {/* Mobile Menu Icon */}
//                 <img
//                     src={assets.menu_icon}
//                     onClick={() => setMobileMenu(true)}
//                     className='md:hidden w-10 cursor-pointer'
//                     alt='Menu'
//                 />
//             </div>

//             {/* Mobile Menu */}
//             <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm ${showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300 flex justify-end`}> 
//                 <div className={`w-3/4 sm:w-1/2 bg-white h-full p-6 transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 shadow-xl`}>                    
//                     {/* Close Button */}
//                     <div className='flex justify-end'>
//                         <img src={assets.cross_icon} alt='Close' onClick={() => setMobileMenu(false)} className='w-8 cursor-pointer' />
//                     </div>
                    
//                     {/* Mobile Menu Links */}
//                     <ul className='flex flex-col items-start gap-6 mt-10 text-lg font-medium text-gray-900'>
//                         <a href='#Header' onClick={() => setMobileMenu(false)} className='hover:text-indigo-600 transition duration-300'>Home</a>
//                         <a href='#About' onClick={() => setMobileMenu(false)} className='hover:text-indigo-600 transition duration-300'>About</a>
//                         <a href='#Project' onClick={() => setMobileMenu(false)} className='hover:text-indigo-600 transition duration-300'>Projects</a>
//                         <a href='#Testimonial' onClick={() => setMobileMenu(false)} className='hover:text-indigo-600 transition duration-300'>Testimonials</a>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
