import React from 'react'
// import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
   <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
   </div>

  )
}

export default App