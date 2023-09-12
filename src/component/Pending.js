import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import logo from "./image/istockphoto-1206877888-1024x1024-transformed.png"

export default function Campagin() {
    return (
        <div className="w-full h-full ">
            <div>
                <div className="flex" >
                    <p className=" font-light text-xs ml-3 mb-2 cursor-pointer">Campagin Request</p>
                    <p className=" text-s ml-2 cursor-pointer"> <BsChevronRight /></p>
                    <p className="text-xs ml-3 mb-2 cursor-pointer">All</p>
                </div>
                <div className="  ml-3 mt-3  flex  ">
                    <h1 className="cursor-pointer">Campagin Request</h1>
                    <div className=" w-[80%] flex justify-end" >
                        <h1 className="cursor-pointer">Today's Campagin Requests: 115</h1>
                    </div>
                </div>
            </div>
            <div className=" flex  ">
                <button type="button" className=" mt-11 ml-5 w-[8%] h-10  rounded-3xl hover:bg-[#FEE4D8]  hover:text-[#FF4D00]">All(118) </button>
                <button type="button" className=" mt-11 ml-5 w-[10%] h-10 rounded-3xl hover:bg-[#FEE4D8] hover:text-[#FF4D00]">Pending(50)</button>
                <button type="button" className=" mt-11 ml-5 w-[10%] h-10 rounded-3xl hover:bg-[#FEE4D8] hover:text-[#FF4D00]">Approved(32)</button>
                <button type="button" className=" mt-11 ml-5 w-[10%] h-10 rounded-3xl hover:bg-[#FEE4D8] hover:text-[#FF4D00]">Pending(50)</button>
                <button type="button" className=" mt-11 ml-5 w-[10%] h-10 rounded-3xl hover:bg-[#FEE4D8] hover:text-[#FF4D00]">Expired(12)</button>
            </div>
            <div className="m-3  flex w-[80%]">
                <h1 className=" pl-4 ">Status:</h1>

                <select id="dropdown" className=" ml-3 p-1 rounded-xl outline-none " >
                    <option value="">All</option>
                    <option value="">Completed</option>
                    <option value="">Pending</option>
                    <option value="">Rejected</option>
                </select>
                <h1 className=" pl-4 ">Show:</h1>
                <select name="" id="dropdown" className=" ml-3 p-1 rounded-lg outline-none">
                    <option value="">All</option>
                </select>


            </div>

            <div className=" mt-5    flex flex-wrap">
                <div className="  ml-4 border bg-white w-[24%] rounded-xl">
                    <img src={logo} className="w-[95%] m-2" alt="" />
                    <h1 className="p-2 font-bold">Explore Vietnam Tours</h1>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Campagin ID:</p>
                        <p className=" text-sm">148h085hp</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Company:</p>
                        <p className="text-sm">XYZ Pvt. Ltd.</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Advertiser ID:</p>
                        <p className="text-sm">advertiseruser1@gmail.com</p>
                    </div>
                    <div className=" border border-[#FF4D00] flex justify-center rounded-3xl m-3">
                        <button type="button" className=" w-[80%] text-[#FF4D00]">View</button>
                    </div>
                </div>
                <div className="  ml-4 border bg-white w-[24%] rounded-xl">
                    <img src={logo} className="w-[95%]  m-2" alt="" />
                    <h1 className="p-2 font-bold">Explore Vietnam Tours</h1>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Campagin ID:</p>
                        <p className=" text-sm">148h085hp</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Company:</p>
                        <p className="text-sm">XYZ Pvt. Ltd.</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Advertiser ID:</p>
                        <p className="text-sm">advertiseruser1@gmail.com</p>
                    </div>
                    <div className=" border border-[#FF4D00] flex justify-center rounded-3xl m-3">
                        <button type="button" className=" w-[80%] text-[#FF4D00]">View</button>
                    </div>
                </div>
                <div className="  ml-4 border bg-white w-[24%] rounded-xl">
                    <img src={logo} className="w-[95%] m-2" alt="" />
                    <h1 className="p-2 font-bold">Explore Vietnam Tours</h1>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Campagin ID:</p>
                        <p className=" text-sm">148h085hp</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Company:</p>
                        <p className="text-sm">XYZ Pvt. Ltd.</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Advertiser ID:</p>
                        <p className="text-sm">advertiseruser1@gmail.com</p>
                    </div>
                    <div className=" border border-[#FF4D00] flex justify-center rounded-3xl m-3">
                        <button type="button" className=" w-[80%] text-[#FF4D00]">View</button>
                    </div>
                </div>
                <div className="  ml-4 border bg-white w-[24%] rounded-xl">
                    <img src={logo} className="w-[95%] m-2" alt="" />
                    <h1 className="p-2 font-bold">Explore Vietnam Tours</h1>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Campagin ID:</p>
                        <p className=" text-sm">148h085hp</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Company:</p>
                        <p className="text-sm">XYZ Pvt. Ltd.</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Advertiser ID:</p>
                        <p className="text-sm">advertiseruser1@gmail.com</p>
                    </div>
                    <div className=" border border-[#FF4D00] flex justify-center rounded-3xl m-3">
                        <button type="button" className=" w-[80%] text-[#FF4D00]">View</button>
                    </div>
                </div>
                <div className="  ml-4 border bg-white w-[24%] rounded-xl">
                    <img src={logo} className="w-[95%] m-2" alt="" />
                    <h1 className="p-2 font-bold">Explore Vietnam Tours</h1>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Campagin ID:</p>
                        <p className=" text-sm">148h085hp</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Company:</p>
                        <p className="text-sm">XYZ Pvt. Ltd.</p>
                    </div>
                    <div className=" pl-2 pb-2 flex" >
                        <p className=" text-sm font-semibold">Advertiser ID:</p>
                        <p className="text-sm">advertiseruser1@gmail.com</p>
                    </div>
                    <div className=" border border-[#FF4D00] flex justify-center rounded-3xl m-3">
                        <button type="button" className=" w-[80%] text-[#FF4D00]">View</button>
                    </div>
                </div>

            </div>
            <div className="flex justify-center relative bg-[#F2F2F2]">
            <button type="button" className=" mt-11 ml-5 w-[4%] h-10  bg-white  rounded-3xl hover:bg-[#FF4D00]  hover:text-white">
                 <div className="ml-4">
                <AiOutlineArrowLeft/>
                </div></button>
            <button type="button" className=" mt-11 ml-5 w-[4%] h-10  bg-white  rounded-3xl hover:bg-[#FF4D00]  hover:text-white">1</button>
            <button type="button" className=" mt-11 ml-5 w-[4%] h-10  bg-white rounded-3xl hover:bg-[#FF4D00]  hover:text-white">2</button>
            <button type="button" className=" mt-11 ml-5 w-[4%] h-10  bg-white rounded-3xl hover:bg-[#FF4D00]  hover:text-white">3</button>
            <button type="button" className=" mt-11 ml-5 w-[4%] h-10  bg-white rounded-3xl hover:bg-[#FF4D00]  hover:text-white">
                <div className="ml-4">
                <AiOutlineArrowRight/>
                </div>
                </button>
            </div>


        </div>
    )
}
