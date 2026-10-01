import { IoIosArrowBack } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsPlayBtn } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FaMeta } from "react-icons/fa6";
import { useState } from "react";






function Sidebar() {

    const [open, setOpen] = useState(true);


    return (
        <>
            <div className="flex">
                <div className={` ${open ? 'w-[16%]' : 'w-[4%]'} duration-300 h-screen bg-indigo-800 relative`}>

                    <IoIosArrowBack size={25} className={`${open ? "rotate-0" : "rotate-180"} absolute top-2 -right-3 bg-white border border-indigo-800 rounded-full cursor-pointer`} onClick={() => setOpen(!open)} />

                    <div>
                        <div className={`mt-10 flex justify-center ${open ? "rotate-[1turn]" : ""} duration-300`}>
                            <FaInstagram size={30} />
                        </div>
                        <h1 className={`${open ? 'opacity-100' : 'opacity-0'} duration-300 flex justify-center font-bold text-2xl`}>Instagram</h1>
                    </div>

                    <div className={`ml-3 mt-5 flex flex-col justify-center ${open ? 'gap-6' : 'gap-12'} duration-300`}>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <GoHomeFill size={30} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-25' : '-left-100'} absolute duration-200  hover:text-white`}>Home</h1>
                        </div>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <BsPlayBtn size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-26' : '-left-100'} absolute duration-200 hover:text-white`}>Reels</h1>
                        </div>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <LuSend size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-18' : '-left-100'} absolute duration-200 hover:text-white`}>Messages</h1>
                        </div>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <FaRegHeart size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-14.5' : '-left-100'} absolute duration-200 hover:text-white`}>Notification</h1>
                        </div>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <FiPlus size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-24.5' : '-left-100'} absolute duration-200 hover:text-white`}>Create</h1>
                        </div>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <HiOutlineChartSquareBar size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-16' : '-left-100'} absolute duration-200 hover:text-white`}>Dashboard</h1>
                        </div>

                        <div className={`flex items-center  cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <IoPeopleCircleSharp size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-24' : '-left-100'} absolute duration-200 hover:text-white`}>Profile</h1>
                        </div>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <IoIosMenu size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-26' : '-left-100'} absolute duration-200 hover:text-white`}>More</h1>
                        </div>

                        <div className={`flex items-center cursor-pointer mr-4 ${open ? 'p-2 hover:bg-indigo-500 rounded-lg' : 'p-0'} `}>
                            <FaMeta size={25} className="duration-200 hover:scale-120" />
                            <h1 className={`${open ? 'right-9' : '-left-100'} absolute duration-200 hover:text-white`}>Also from Meta</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;