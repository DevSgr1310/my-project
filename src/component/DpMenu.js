import React, { useState } from "react";
// import { BiLogOutCircle } from "react-icons/bi";
import { BsArrowLeftCircleFill, BsDisplay } from "react-icons/bs";
import { RiFolderUploadLine } from "react-icons/ri"
import {
    MdOutlineAccountBalance,
    MdOutlineManageAccounts,
    MdSpaceDashboard,
} from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edlogo from "./image/everidoor logo svg 5 (1).png";
import { VscAccount } from "react-icons/vsc";


const DpMenu = (props) => {
    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     sessionStorage.clear();
    //     navigate("/Signup");
    // };
    const [open, setOpen] = useState(true);
    // const location = useLocation();  
    const menu = [
        {
            title: "Dashboard",
            icons: <MdSpaceDashboard size={24} />,
            to: "/dashboard",
        },
        {
            title: "My Displays",
            icons: <BsDisplay size={24} />,
            to: "/MyDisplays", // Route for My Displays
        },

        {
            title: "My Content",
            icons: <RiFolderUploadLine size={24} />,
            to: "/content",
        },

        {
            title: "Schedules",
            icons: <RxCalendar size={24} />,
            to: "",
        },

    ];

    return (
        <div className="h-full">
            <div
                className={`${open ? "w-[16.5rem]" : "w-24"
                    } p-5 pt-3 border bg-white ease-in-out duration-500 relative h-screen shadow-lg`}
            >
                <div className="flex  mb-6">
                    <div className=" h-28">
                        <img className="w-64 h-26 " src={Edlogo} alt="" />
                        <hr class="w-38 h-1 bg-gray-500 opacity-80 rounded  dark:bg-gray-500" />
                    </div>
                </div>
                <div
                    className={` origin-left  text-xl text-black  items-center gap-1  ease-in-out duration-300 ${!open && "scale-24"
                        }`}
                >
                    <div
                        className={` origin-left  text-xl text-black font-bold  items-center gap-1  ease-in-out duration-700 `}
                    >
                        <div
                            className={`bg-gray-100 ${open ? "ml-2" : "ml-0"
                                } p-3  ease-in-out duration-700 rounded-xl ${open ? "w-52" : "w-18"
                                } ${open ? "h-14" : "h-14"}`}
                        >
                            <span
                                className={`origin-left ease-in-out ${!open && "hidden"
                                    } ${open ? "ml-2" : "ml-0"
                                    }  duration-500 cursor-default tracking-wide text-[15px] font-bold text-[#340c42]`}
                            >
                                Screen Provider
                            </span>
                            <BsArrowLeftCircleFill
                                size={32}
                                className={`absolute ease-in-out duration-500 cursor-pointer top-[160px]  ${!open && "rotate-180"
                                    } ${open ? "left-[12rem] " : "left-8"}`}
                                onClick={() => setOpen(!open)}
                            />
                        </div>
                    </div>
                    <ul
                        className={`${open
                            ? ""
                            : "flex flex-col items-center justify-center"
                            }`}
                    >
                        {menu.map((item, index) => (
                            <li
                                key={index}
                                className={`${item.gap ? "mt-4" : "mt-4"
                                    } flex items-center text-black gap-x-4  rounded-md cursor-pointer transition-all duration-500 hover:bg-[#fe4d00] hover:text-white`}
                            >
                                <button type="button" className="w-full h-full">
                                    <Link
                                        to={item.to}
                                        className="flex items-center gap-2"
                                    >
                                        <span>{item.icons}</span>
                                        <p
                                            className={`${open ? "" : "hidden scale-0"
                                                } origin-center`}
                                        >
                                            {item.title}
                                        </p>
                                    </Link>
                                </button>
                            </li>
                        ))}
                        <li className={`flex items-center mt-3  w-full`} >
                            <details class="group [&_summary::-webkit-details-marker]:hidden w-full origin-center ">
                                <summary className={`flex items-center w-full p-3 hover:bg-[#fe4d00] origin-center text-black hover:text-white rounded-md cursor-pointer transition-all duration-500 gap-2 `}>
                                    <span class="shrink-0 " >
                                        <MdOutlineManageAccounts size={24} />
                                    </span>
                                    <span class={`text-xl  font-medium ${open ? "" : "hidden scale-0"}  origin-center `}> Account </span>
                                </summary>

                                <ul class=" space-y-1 px-4 py-2">
                                    <li className={` w-full ${open ? "" : "hidden scale-0 transition-all ease-in-out duration-700"} `}>
                                        <Link to={"/personalInfo"} class="flex items-center  rounded-lg  w-full py-2 text-[18px] font-medium text-gray-500 hover:bg-white hover:text-[#fe4d00]" >
                                            < VscAccount className="mr-2 ml-2" /> Personal Info
                                        </Link>
                                    </li>

                                    <li className={` w-full ${open ? "" : "hidden scale-0 transition-all ease-in-out duration-700"} `}>
                                        <Link to={"/Finds"} class="flex items-center  rounded-lg  w-full py-2 text-[18px] font-medium text-gray-500 hover:bg-white hover:text-[#fe4d00]" >
                                            <MdOutlineAccountBalance className="mr-2 ml-2" /> Withdraw Funds
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        {/* <li
                            className={`flex items-center text-black gap-x-4  rounded-md cursor-pointer transition-all duration-500 hover:bg-[#fe4d00] hover:text-white mt-4`}
                        >
                            <button
                                onClick={() => handleLogout()}
                                className={`origin-left w-full h-full flex gap-2 items-center`}
                            >
                                <BiLogOutCircle size={24} />
                                <p
                                    className={`${open ? "" : "hidden"
                                        } origin-center transition-opacity delay-500`}
                                >
                                    Logout
                                </p>
                            </button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DpMenu;