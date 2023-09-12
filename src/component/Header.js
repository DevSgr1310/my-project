import React, { useState, useEffect } from "react";
import logo from "./image/everidoor logo svg 5 (1).png";
// import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { LuIndianRupee } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

export default function Header() {
    const [nav, setNav] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        setUsername(sessionStorage.getItem("username")?.split("@")[0]);
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/Signup");
    };
    return (
        <div>
            <div className="h-[14vh] bg-white border flex items-center justify-end overflow-hidden ">
                <div className="flex gap-5 ">
                    <div className="mr-10">
                        <div
                            className={`flex px-4 py-2 rounded-[10px] cursor-pointer bg-white items-center w-auto`}
                            onClick={() => {
                                setNav(!nav);
                            }}
                        >
                            <div className="items-center flex gap-2 justify-between  ">
                                <div className="flex items-center gap-2">
                                    <div className="">
                                        <img
                                            className="h-10  w-10 rounded-full"
                                            src="https://cdn-icons-png.flaticon.com/512/236/236832.png?w=740&t=st=1690788839~exp=1690789439~hmac=4d4fa9ad6657c9817da41cf0e72d2857df6e1f320bfc8a6e75333d25bc8546b8"
                                            alt="user"
                                        />
                                    </div>
                                    <h1>{username}</h1>
                                </div>
                                <div>
                                    <button type="button">
                                        <FiChevronDown
                                            size={24}
                                            className={`${nav ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {nav ? (
                    <div className="z-[100] absolute shadow-lg rounded-[10px] bg-white right-[5.5rem] top-28 w-[210px] h-36 p-4">
                        <ul className="text-lg text-left">
                            <li
                                className={` flex items-center justify-start text-black gap-x-4 p-2 rounded-md cursor-pointer transition-all duration-500 hover:bg-[#fe4d00] hover:text-white`}
                            >
                                <BiSupport size={26} />
                                Support
                            </li>
                            <li
                                className={` flex items-center justify-start text-black gap-x-4 p-2 rounded-md cursor-pointer transition-all duration-500 hover:bg-[#fe4d00] hover:text-white`}
                                onClick={() => handleLogout()}
                            >
                                <BiLogOutCircle size={26} />
                                Logout
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    );
}