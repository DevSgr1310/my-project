import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight, BsFilter } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'

export default function ManageScreenProvider() {
    return (
        <div className="h-full w-full">
            <div className="flex" >
                <p className=" font-light text-xs ml-3 mb-2 cursor-pointer">Manage Users</p>
                <p className="  text-slate-400 text-s ml-4 cursor-pointer"> <BsChevronRight /></p>
                <p className=" font-light text-xs ml-3 mb-2 cursor-pointer">Screen Provider</p>
                <p className="  text-slate-400 text-s ml-4 cursor-pointer"> <BsChevronRight /></p>
                <p className="text-xs ml-3 mb-2 cursor-pointer">Manage Acount</p>
            </div>
            <div className=" m-3 bg-white w-[98%] h-[75%] rounded-xl">
                <div className=" flex ">
                    <div className="mt-2  ml-2 text-2xl   cursor-pointer">
                        <BsChevronLeft />
                    </div>
                    <div >
                        <h1 className="ml-6 mt-1 font-semibold text-xl cursor-pointer">Manage Screen Providers</h1>
                    </div>
                    <div className=" w-[75%] flex justify-end">
                        <h1 className="ml-6 mt-1 font-semibold text-xl cursor-pointer"> Total Users</h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="mt-4 ml-4 rounded-3xl w-[22%] bg-white border flex">
                        <div className=" ml-3 mt-1 text-lg  text-[#9f9e9e]  "> <GoSearch />
                        </div>
                        <input type="text" name="Search " placeholder="Search by Username or Email " className=" ml-1 w-[80%] h-8 outline-none" />
                    </div>

                    <button type="button" className="w-[7%] mt-4 h-8 rounded-3xl bg-[#FF4D00]  ml-6  text-white flex ">
                        <p className=" pl-5 pt-1">Search</p>
                    </button>
                    <div className="mt-5 flex ml-3">
                        <BsFilter /> <p className=" ml-3 text-sm"> Filter :</p>

                    </div>
                    <select id="dropdown" className=" ml-3 mt-4 w-[7%] h-8 border rounded-3xl outline-none " >
                        <option value="">Location</option>
                    </select>
                    <select id="dropdown" className=" ml-3 mt-4 w-[7%] h-8 border rounded-3xl outline-none " >
                        <option value="">Status</option>                      
                    </select>
                </div>
                <div className="mt-4">
                    <table className=" w-[95%]">
                        <tr className="flex ml-7 rounded-3xl  h-8 w-[100%] bg-[#F2F2F2] ">
                            <th className=" w-[10%] mt-1 font-semibold">Name</th>
                            <th className=" w-[30%] mt-1 font-semibold">Email ID</th>
                            <th className=" w-[13%] mt-1 font-semibold">Status</th>
                            <th className=" w-[13%] mt-1 font-semibold">Location</th>
                            <th className=" w-[10%] mt-1 font-semibold ">Screens</th>
                            <th className=" w-[10%] mt-1 font-semibold ">content</th>
                            <th className=" w-[10%] mt-1 font-semibold ">Action</th>
                        </tr>
                        <tr className="flex ml-10 mt-5  h-8 w-[100%] ">
                            <td className=" w-[10%] mt-1 ">Vishal Singh</td>
                            <td className=" w-[30%] mt-1 ">dinesh63@gmail.com</td>
                            <td className=" w-[13%]  mt-1 ">Active</td>
                            <td className=" w-[13%]  mt-1 ">Delhi</td>
                            <td className=" w-[10%] mt-1 ">0</td>
                            <td className="  w-[5%] mt-1 ">0</td>
                            <td className=" w-[5%] mt-1 ">0</td>
                        </tr>
                    </table>
                </div>
                <div className=" mt-9 ml-7 w-[95%]">
                    <hr />
                    <div className="flex  ">
                        <div className="w-[100%]">
                            <p className=" font-light text-xs mt-3 cursor-pointer">Showing Result  5 of Users</p>
                        </div>
                        <div className="flex justify-end w-[98%] mt-2 ">
                            <button type="button" className="  ml-5 w-[10%] h-10  bg-white  rounded-3xl hover:bg-[#FF4D00]  hover:text-white">
                                <div className="ml-4">
                                    <AiOutlineArrowLeft />
                                </div></button>

                            <button type="button" className="  ml-5 w-[10%] h-10  bg-white  rounded-3xl hover:bg-[#FF4D00]  hover:text-white">1</button>
                            <button type="button" className="  ml-5 w-[10%] h-10  bg-white rounded-3xl hover:bg-[#FF4D00]  hover:text-white">2</button>
                            <button type="button" className="  ml-5 w-[10%] h-10  bg-white rounded-3xl hover:bg-[#FF4D00]  hover:text-white">3</button>
                            <button type="button" className="  ml-5 w-[10%] h-10  bg-white rounded-3xl hover:bg-[#FF4D00]  hover:text-white">
                                <div className="ml-4">
                                    <AiOutlineArrowRight />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
