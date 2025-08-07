import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8426d474-0a3d-437e-9b04-1a2b82db8b8c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Succefully!")
      
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <motion.div initial={{opacity:0,y:100}} transition={{duration:1}} whileHover={{opacity:1,y:0}} viewport={{once:true}} className="flex flex-col items-center justify-center container mx-auto p-6 sm:p-10 md:p-14 lg:px-32 w-full" id="Contact">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact<span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
        </h1>
        <p className="text-gray-500 max-w-xl text-center mb-8">
                Ready to Make a Move? Let’s Build Your Future Together
        </p>
        <form className='max-w-2xl mx-auto text-gray-600 pt-8 ' onSubmit={onSubmit}>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>Your Name
                    <input type="text" placeholder='Your Name' req name='Name'  className='w-full border border-gray-300 rounded py-3 px-4 mt-2 '/>
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                    <input type="email" placeholder='Your Email' req name='Email'  className='w-full border border-gray-300 rounded py-3 px-4 mt-2 '/>
                    </div>
                </div>
                <div className='my-6 text-left'>Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
                </div>
                <div className='items-center flex justify-center'>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{
                    result?result:"Send Message"
                    }</button>
                </div>
                
        </form>

    </motion.div>
  )
}

export default Contact