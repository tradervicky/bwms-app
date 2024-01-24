import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const LoginAdmin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/dashboard')
    alert("form Submitted")
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className='flex flex-col items-center justify-center h-screen bg-purple-50'>
      <img src="/images/arch-header.png" alt="" />
  <div className="p-10 rounded-lg shadow-xl flex justify-between bg-blue-50 w-[70%]">

    <div className='text-center my-auto W-1/2 border-red-500 w-[50%]'>
      <img src="/images/logo.png" alt="" className='w-40 mx-auto mb-5'/>
      <p className='text-wrap text-3xl text-blue-900'>
        Welcome to the <span className="text-3xl font-bold">BPSC</span> Work Management System Portal
      </p>
      
    </div>

    <div className="side-right rounded-lg ml-4 flex flex-col bg-slate-200 p-5 w-[50%] ">
      <div className='flex flex-col'>
      <div className='flex items-center gap-2 justify-center text-blue-900'><FaRegCircleUser style={{marginBottom:"15px"}}size={32}/>
      
      <h3 className="text-2xl text-center font-bold mb-5">Login Admin</h3>
      
      </div>
      <hr className='border-t border-gray-500 my-5' />
      <p className='mb-5 text-blue-900'>Provide your User Name and Password to Login</p>


      </div>     
      <input type="email" placeholder='Enter email' className="border borde-b-gray-300 outline-none p-2 mb-4 rounded" required/>
      <input type="password" placeholder='Enter password' className="border border-gray-300 outline-none p-2 mb-4 rounded" required/>
      <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-xl transition duration-300 ease-in-out">Login</button>

    </div>
  </div>
</div>
</form>

  
  )
}

export default LoginAdmin