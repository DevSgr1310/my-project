import React from 'react'

export default function CreatePassword() {
  return (
    <div className=" w-screen h-screen flex justify-center  items-center">
        <div className=" w-3/5 h-3/5 flex  flex-wrap  bg-white border ">
            <div className=" flex-wrap w-2/4 h-full bg-white border ">
                <h1 className="mt-6 ml-12 mb-12 text-xl">everidoor</h1>
               
                    <p className="ml-12">Important Information:</p>
                    <p className="mt-6 ml-12">please read the below instructions and then kindly <br />share the requested information.</p>
                    <ul className=" ml-16 mt-3  mb-16 list-disc">
                        <li>Use Alphanumeric characters in passwords</li>
                        <li>Your Email ID/Username is required</li>
                        <li>Do not reuse passwords</li>
                        <li>Do not reveal your passwords/OTP to anyone</li>
                    </ul>
                    <div className="flex">
                    <a href="/" className=" ml-12 ">Contact US</a>
                    <p className="ml-3">|</p>
                    <a href="/" className=" ml-4">Terms & condition</a>
                    <p className="ml-3">|</p>
                    <a href="/" className=" ml-4">FAQ's</a>
                    </div>
            </div>
                <div className="  h-full w-2/4 flex justify-center items-center bg-red-300 borded rounded-2xl  shadow-2xl  shadow-black">
                    <div className=" w-3/4  h-3/5  rounded-xl  bg-white border">
                        <div className="mt-8 flex-wrap ">
                           <h1 className="flex justify-center">Create New Password !</h1>
                           <p className="flex justify-center"> Set a new password for your Account</p>
                        </div>
                        <div  >
                            <input type="text" placeholder="   Enter Your New Password" className="  w-3/5 flex  ml-16 mt-6 rounded-xl border "    />
                            
                        </div>
                        <div> 
                            <input type="  text" placeholder="      Confirm Password" className="  w-3/5 flex  ml-16 mt-6 rounded-xl border"    /> 
                            </div>
                        <div className="  w-2/4 h-8 ml-20 mt-4  bg-red-400 flex justify-center rounded-xl">
                            <button className=" "> Set Password</button>
                        </div>
                        <div className="  w-2/4 h-8 ml-20 mt-1   flex justify-center rounded-xl">
                            <button className=" "> Back to Login</button>
                        </div>
                    </div>
            </div>
           
            
        </div>
    </div>
  )
}
