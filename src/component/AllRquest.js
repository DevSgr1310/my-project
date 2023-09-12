import React from 'react';

import { BsChevronLeft } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsPlusLg } from "react-icons/bs";
import { BsChevronRight} from "react-icons/bs";


function MyComponent() {
    return ( 
        <div className="h-full w-full">
            <div className="flex" >
                 <p className=" font-light text-xs ml-3 mb-2 cursor-pointer">Refunds</p>
                 <p className=" text-s ml-2 cursor-pointer"> <BsChevronRight /></p>
                 <p className="text-xs ml-3 mb-2 cursor-pointer">All Request</p>
            </div>
            <div className=" flex ">
                <div className="mt-1  ml-2 text-2xl   cursor-pointer">
                    <BsChevronLeft/>
                </div>
                <div className=" w-[100%]  flex ">
                    <h1 className="ml-6  font-semibold text-xl  cursor-pointer">Refunds</h1>
                    <div className="w-[90%] justify-end flex">
                        <button type="button" className="w-[12%] h-9 rounded-3xl bg-[#FF4D00]  mr-14  text-white flex "> 
                        <div className=" mt-2 ml-2 "><BsPlusLg /> </div><p className="mt-1">Intiate Refunds</p></button>
                        <div className="ml- rounded-xl w-[25%] bg-white border flex">
                            <div className=" ml-2 mt-2  text-[#9f9e9e]  "> <GoSearch />
                            </div>
                            <input type="text" name="Search " placeholder="Search by ID and Username " className=" ml-1 w-[80%] outline-none" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex  ">
                <button type="button" className=" mt-11 ml-5 w-[10%] h-10  rounded-3xl hover:bg-[#FEE4D8]  hover:text-[#FF4D00]">All Requests</button>
                <button type="button" className=" mt-11 ml-5 w-[10%] h-10 rounded-3xl hover:bg-[#FEE4D8] hover:text-[#FF4D00]">All Transction</button>
            </div>
            <div className=" flex">
                <button type="button" className=" mt-11 ml-5 w-[10%]  h-24 border-2  rounded-2xl hover:border-[#FF4D00] hover:text-[#FF4D00]">120 <br />All</button>
                <button type="button" className=" mt-11 ml-5 w-[10%]  h-24 border-2  rounded-2xl hover:border-[#FF4D00] hover:text-[#FF4D00]">24 <br />Pending</button>
                <button type="button" className=" mt-11 ml-5 w-[10%]  h-24 border-2  rounded-2xl hover:border-[#FF4D00] hover:text-[#FF4D00]">24 <br />Approved</button>
                <button type="button" className=" mt-11 ml-5 w-[10%]  h-24 border-2  rounded-2xl hover:border-[#FF4D00] hover:text-[#FF4D00]">24 <br />Rejected</button>

            </div>
            <div className=" ml-3 mt-4 h-[45%] w-[97%] rounded-xl bg-white">
                <div className="   flex ">
                    <p className="p-3 text-xs cursor-pointer">Page 1 to 5</p>
                    <div className="flex justify-end w-[90%] ">
                        <p className="p-3 text-xs text-[#FF4D00] cursor-pointer" >Bulk Action</p>
                    </div>
                </div>
                <div>
                    <table>

                        <tr className="flex ml-7 rounded-3xl h-8 w-[100%] bg-[#DEDEDE] ">
                            <th className=""><input type="checkbox" name="" id="" className="ml-6 mt-2 h-4 w-4  " /></th>
                            <th className=" ml-16 mt-1 font-semibold">Date & Time</th>
                            <th className=" ml-16 mt-1 font-semibold">Username</th>
                            <th className=" ml-16 mt-1 font-semibold">Description</th>
                            <th className=" ml-72 mt-1 font-semibold">Requested Amount</th>
                            <th className=" ml-16 mt-1 font-semibold ">Status</th>
                            <th className="ml-16  mt-1 font-semibold ">Action</th>
                        </tr>
                        <tr className="flex ml-7 mt-5 rounded-3xl h-8 w-[100%] ">
                            <td><input type="checkbox" name="" id="" className="ml-6 mt-2 h-4 w-4  " /></td>
                             <td className=" ml-16 mt-1 ">23Aug,2023</td>
                             <td className=" ml-16 mr-3 mt-1 ">Dinesh63</td>
                             <td className=" ml-16 mr-7 mt-1 ">Description</td>
                             <td className=" ml-72 mr-8 mt-1 ">₹2,400/-</td>
                             <td className=" ml-20 mt-1 "> Approved</td>
                             <td className=" ml-16 mt-1 ">...</td>
                        </tr>

                    </table>
                </div>

            </div>
        </div>
    );
}

export default MyComponent;
