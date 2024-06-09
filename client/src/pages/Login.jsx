import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Textbox from '../components/Textbox';
import Button from "../components/Button";

const login = () => {
  const user ="";
  const {register, handleSubmit, formState: {errors},} = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {

    console.log("submit");
    
  }
  

  useEffect(
    () => {
      user && navigate("/dashboard")
    },[user]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* Left Column */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-width-lg 2x1:max-w-3x1 flex flex-col items-center justify-center gap-5 md:gap-y-10 2x1:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border-rounded-full text-sm md:text-base border-gray-300 text-gray-600'>
              Manage all your taks in one place!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-4x1 md:text-6x1 2x1:text-7x1 font-black text-center text-blue-700'>
              <span>Cloud-Based </span>
              <span>Task Manager</span>
            </p>
            <div className='cell' >
              <div className='circle rotate-in-up-left'>

              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className='w-full md:w-1/3 p- md: p-1 flex flex-col justify-center items-center'>
          <form onSubmit={handleSubmit(submitHandler)}
          className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10pt-14 pb-14 '>
            <div className=''>
              <p className='text-blue-600 text-3x1 font-bold text-center '>
                welcome back
              </p>
              <p className='text-center text-base text-grey-700 '>
                keep all your credentials safe.
              </p>

            </div>
            <div className='flex flex-col gap-y-5'>
              <Textbox 
              placeholder="email@example.com"
              type="email"
              name="email"
              lable="email address"
              className="w-full rounded-full"
              register={register("email", {required: "Email Address is required",})}
              error={errors.email ? errors.email.message: ""}
              />
              <Textbox 
              placeholder="your password"
              type="password"
              name="password"
              lable="password"
              className="w-full rounded-full"
              register={register("password", {required: "Password is required",})}
              error={errors.password ? errors.password.message: ""}
              />
              <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
                Forgot your password?
              </span>
              <Button
              type='submit'
              label='Submit'
              className='w-full h-10 bg-blue-700 text-white rounded-full'
              />

            </div>

          </form>

        </div>
      </div>
      
    </div>
  )
}

export default login
