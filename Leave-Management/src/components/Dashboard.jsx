import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate ,useLocation } from "react-router-dom";
import { useState } from "react";
import Logout from "../pages/Log Out";
import { Outlet } from "react-router-dom";

function Dashboard() {

    const [activeButton , setactiveButton ] = useState(() => {
        return localStorage.getItem("activeButton" || "dashboard");
    });

    const location = useLocation();

    useEffect(() => {
        localStorage.setItem("activeButton" , activeButton );
    } ,[activeButton])

    const [ isOpen , setisOpen ] = useState(false);

    const [ selectedOption, setSelectedoption ] = useState('All Candidates');

    const options = [ "All Candidates" , "Candidates" , "Employees" , "April PayRolls"]

    const handleClick = (option) => {
        setSelectedoption(option);
        setisOpen(false);
    };

    const Button = () => {

        setactiveButton("true")
    }

    const handleButtonClick = (buttonName) => {
        if ( buttonName === "Dashboard" || buttonName === "Leave Management") {
            setactiveButton(buttonName);
        }
    }; 
    
    const handleInactiveButtonClick = (e) => {

        e.preventDefault();

    };

     const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
        console.log("User Logged Out");
        setisOpen(false);
    }


    return (
        <div className="flex min-h-screen bg-gray-200 ">

            {/* sidebar */}
            <div className=" items-center  bg-blue-900 w-[21%]">
                <div className=" ml-12 p-2">
                    <img src="src/assets/Kris.jpg" alt="kris" />
                </div>

                <div className="flex items-center mt-1 ">
                    <i className="fa-regular fa-circle-user text-5xl ml-8"></i>
                    <div className="ml-4 text-white">
                        <h2 className="text-2xl text-white font-semibold ml-2">Kris Admin</h2>
                        <p className="text-sm ml-2 text-white">Admin</p>
                    </div>
                </div>

                <div className="block">
                    <h2 className="text-sm  text-white font-medium mt-5 ml-6">Features</h2>
                    <ul className="">
                        <Link to="board" >
                        <li className={`mt-1 font-semibold  rounded-md  px-1 py-2 ml-6 cursor-pointer ${activeButton === "Dashboard" ? "bg-yellow-500 text-black": " text-white" } hover:bg-yellow-400  hover:text-black` }
                         onClick={() => handleButtonClick("Dashboard")}>
                            <i className="fas fa-th-large text-2xl mr-2 ml-4 "></i>     
                            <span className="text-xl">Dashboard</span>
                        </li>
                        </Link>

                        <li className={`ml-6 rounded-md hover:bg-yellow-400 font-semibold mt-1 pl-4 px-2 py-1`}>
                            <Link to="" className="text-white " >
                                <li htmlFor="" className={`ml-1 flex text-white hover:text-black cursor-pointer`} onClick={handleInactiveButtonClick}>
                                <i className="fa-regular fa-envelope font-extrabold text-2xl"></i>
                                    <span className=" ml-2 text-lg font-semibold">Messages</span>
                                <span className="ml-32 bg-red-600 rounded-full px-2 py-1 ">13</span>
                               </li>
                            </Link>
                        </li>
                    </ul>
                    <h2 className="ml-6 mt-1 text-white text-sm">Recruitement</h2>
                    <ul>
                        <Link to="">
                            <li className={`ml-6 hover:bg-yellow-400 text-white hover:text-black rounded-md font-semibold pl-4 mt-2 p-1`}>
                                <i className="fa-solid fa-briefcase text-2xl "></i>
                                <button htmlFor="" className="ml-3 text-xl cursor-pointer" onClick={handleInactiveButtonClick}>Jobs</button>
                            </li>
                        </Link>


                        <Link to="">
                            <li className={`text-white hover:text-black hover:bg-yellow-400 rounded-md font-semibold pl-3 px-2 ml-4 p-1`} onClick={handleInactiveButtonClick}>                               
                                 <span className="text-2xl ml-2"><i className="fas fa-users"></i></span>
                                <span htmlFor="" className="ml-2 text-xl cursor-pointer">Candidates</span>
                            </li>
                        </Link>

                        <Link to="">
                            <li className={`text-white hover:text-black hover:bg-yellow-400 rounded-md font-semibold pl-3 px-2 ml-4 p-1 `} onClick={handleInactiveButtonClick}>                                
                                <span className="text-2xl ml-4"><i className="fa-regular fa-file"></i></span>
                                <span htmlFor="" className=" ml-3 text-xl cursor-pointer">Resumes</span>
                            </li>
                        </Link>


                        <h2 className="ml-6 mt-2 text-white text-xs">Organization</h2>

                        <Link to="">
                            <li className={`text-white hover:text-black hover:bg-yellow-400 mt-1 rounded-md font-semibold px-2 py-1 ml-4 mb-1 `} onClick={handleInactiveButtonClick}>
                                <span className="text-2xl ml-4"><i className="fa-solid fa-user"></i></span>
                                <span htmlFor="" className=" ml-2 text-xl cursor-pointer">Employee Management</span>
                            </li>
                        </Link>

                        <Link to="leave-management">
                            <li className={` rounded-md font-semibold px-2 py-1 ml-4 ${activeButton === "Leave Management" ? "bg-yellow-500 text-black": " text-white" } hover:text-black hover:bg-yellow-400 `} onClick={() => setactiveButton("Leave Management")}>
                                <span className="text-2xl ml-3"><i className="fa-solid fa-book-open"></i></span>
                                <span htmlFor="" className=" ml-2 text-xl cursor-pointer" >Leave Management</span>
                            </li>
                        </Link>

                        <Link to="">
                            <li className= {`text-white hover:text-black mt-1 hover:bg-yellow-400 rounded-md font-semibold px-2 py-1 ml-4`} onClick={handleInactiveButtonClick}>
                                <span className="text-2xl ml-3"><i className="fa-solid fa-scale-unbalanced-flip"></i></span>
                                <span htmlFor="" className=" ml-2 text-lg cursor-pointer">Performance Management</span>
                            </li>
                        </Link>


                        <h2 className="mt-2 text-white font-semibold ml-6">Kris Pay</h2>

                        <Link to="">
                            <li className= { ` text-white hover:text-black hover:bg-yellow-400 mt-1 rounded-md font-semibold  px-2 py-1 ml-4`} onClick={handleInactiveButtonClick}>
                                <span className="text-2xl ml-3"><i className="fa-solid fa-money-bill-wave"></i></span>
                                <span htmlFor="" className=" ml-3 text-xl cursor-pointer ">Payroll Management</span>
                            </li>
                        </Link>

                        <Link to="/">
                            <li className="mt-1 text-white bg-red-500 hover:bg-red-700 rounded-md font-semibold px-2 py-1  text-center ml-8 w-64">
                                <span className="text-xl"><i className="fa-solid fa-power-off"></i></span>
                                <button onClick={handleLogout} htmlFor="" className="text-xl ml-3 cursor-pointer font-bold ">Log Out</button>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            
            <div className=" mt-5">

            <header className="flex">
                        <div className="ml-6">
                            <button>
                                <i className="fa-solid fa-bars-staggered text-3xl"></i>
                            </button>
                        </div>

                        <div className="flex">
                            <div className="items-center">
                                <div className=" relative  ml-52 ">
                                    <button onClick={() =>setisOpen(!isOpen)} className=" flex items-center relative  px-4  py-2 bg-blue-700 text-white text-xl rounded-l-md focus:outline-none ">
                                        {selectedOption}
                                        <span className="flex flex-col ml-8">
                                            <i className={`fa-solid ${isOpen ? "fa-chevron-up": "fa-chevron-down" }`}></i>
                                        </span>
                                    </button>

                                    {isOpen && (

                                        <ul className="w-52 absolute bg-white border border-gray-200 rounded-l-xl  shadow-lg">

                                            {options.map((option) => (
                                                <li key={option} onClick={() => handleClick(option)} className="px-4  py-1 bg-blue-700 text-white text-xl hover:bg-blue-800 cursor-pointer " > {option} </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <input type="text" name="text" id="text" className="bg-white px-4 py-2 flex items-center w-96 rounded-r-lg focus:ring-green-500 text-gray-800 text-xl border-gray-400 h-11 " placeholder="Search.." />

                                <button className="absolute ml-72 my-2 text-2xl">
                                    <i className="fa-solid fa-magnifying-glass ml-12 text-gray-400"></i>
                                </button>
                            </div>
                        </div>

                        <div className=" flex space-x-5 ">

                            <div className="relative bg-blue-700 px-4 py-3 rounded-full h-14 ml-20 ">
                                <button className="text-white text-xl ">
                                    <i class="fa-regular fa-bell"></i>
                                </button>

                                <span className="absolute -top-1 -right-4 bg-red-500 text-white rounded-full px-2 py-1 border-gray-500">
                                    13
                                </span>
                            </div>

                            <div className="relative bg-yellow-500 px-4 h-14  py-3 rounded-full ">
                                <button className="text-black text-xl">
                                    <i class="fa-solid fa-wrench"></i>
                                </button>
                            </div>

                            <div className="relative bg-green-600 px-4 py-3 h-14  rounded-full">
                                <button className="text-white text-xl">
                                    <i class="fa-regular fa-envelope"></i>
                                </button>

                                <span className="absolute -top-1 -right-5 bg-red-500 text-white rounded-full px-3 py-1 border-white">
                                    6
                                </span>
                            </div>

                        </div>
                    </header>

                    < Outlet />

                    {/* < Logout /> */}
                    
            </div>

            
        </div >

    )
}

export default Dashboard;