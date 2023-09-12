import React from 'react'
import logo from "./image/everidoor logo svg 5.png"
export default function Pay() {
    return (
        <div className=" w-screen h-screen flex justify-center bg-[#E5E5E5] items-center">
            <div className="w-[70%] h-[90%]  bg-white rounded-lg flex ">
                <div className=" w-[50%] h-[90%] mt-10 ml-10 ">
                    <form>
                        <div className="mt-6 ml-10">
                            <h1 className="   font-semibold text-lg">Pay & Schedule Ad</h1>
                        </div>
                        <div>
                            <div>
                                <p className=" my-6 mx-10">Select Payment Method</p>
                            </div>
                            <div className="flex">
                                <div className="  ml-8 w-44 h-9 border border-[#FF4D00] rounded-lg">
                                    <input type="radio" name="Payment" value="Debit & credit card" id="Debit & credit card" className="ml-1 mt-3  border-2 border-[#FF4D00]" />
                                    <label htmlFor="Debit & credit card" className="ml-2">Debit & credit card</label>
                                </div>
                                <div className="  ml-8 w-44 h-9 border border-[#FF4D00] rounded-lg">
                                    <input type="radio" name="Payment" value="UPI Payment" id="UPI Payment" className="ml-1 mt-3 " />
                                    <label htmlFor="UPI Payment" className="ml-2">UPI Payment</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" relative  w-[88%]  mt-12 ml-8  h-9 border  rounded-2xl">
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" id="Debit & credit card" className="ml-6 mt-1 outline-none  " />
                                <label htmlFor="Debit & credit card" className="absolute bottom-8 left-3 bg-white px-1 text-sm">Debit & credit card</label>
                            </div>
                            <div className="flex">
                                <div className=" relative  w-[42%]  mt-12 ml-8  h-9 border  rounded-2xl">
                                    <input type="text" placeholder="mm/yy"  id="expiry date" className="ml-6 mt-1 outline-none " />
                                    <label htmlFor="expiry date" className="absolute bottom-7 left-2 bg-white px-1 text-sm">Expiry Date</label>
                                </div>
                                <div className=" relative mb-6 w-[43%]  mt-12 ml-4 h-9 border  rounded-2xl">
                                    <input type="text" placeholder="XXX" id="cvv" className="ml-6 mt-1 outline-none " />
                                    <label htmlFor="cvv" className="absolute bottom-8 left-3 bg-white px-1 text-sm">CVV</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-7 ml-8 w-[88%] border"></div>
                            <div className="flex  justify-between mr-9 ">
                                <p className=" mt-10 mx-10">Total Advertising Displays</p>
                                <p className="mt-10 font-bold ">4</p>
                            </div>
                            <div className="flex justify-between mr-9 ">
                                <p className=" mt-8 mx-10">Total Ads Cost:</p>
                                <p className="mt-8 font-bold">₹2400</p>
                            </div>
                        </div>
                        <div className="flex  ">
                            <button type="button" className=" relative mb-6 w-[80%]  mt-8 ml-8  h-9 border bg-[#FF4D00]  text-white rounded-2xl bg">Make Payment</button>
                        </div>
                    </form>
                </div>
                <div className=" w-[45%] h-[90%]  mt-10 ml-10 mr-4 bg-[#E5E5E5] rounded-xl ">
                    <div class=" w-[100%] flex justify-center  h-[40%] bg-gradient-to-t rounded-t-xl from-[#7D229D]  via-[#551D68]  to-[#4A1C5B]  ">
                        <div className="w-[70%] mt-6 ">
                            <img src={logo} alt=" " className="w-[80%] pl-12"  />
                            <p className="mt-7 ml-8 pl-10 text-white ">Campagin ID: 134875</p>
                            <div className=" mt-7 flex bg-white rounded-t-xl shadow-xl">
                            <p className="  ml-5 mt-2 mb-5 font-semibold " >Campagin Name:</p>
                            <p className=" mt-2" >Real Fruit 2023 Ad</p>
                            </div>
                            <div className="flex bg-white rounded-b-xl">
                            <p className=" ml-5 mb-4 font-semibold " >Scheduled Date:</p>
                            <p className="" >12/08/23-21/08/23</p>
                            </div>
                        </div>      
                    </div>
                    <div className="w-[100%] bg-[]">

                    </div>

                </div>
            </div>
        </div>
    )
}
