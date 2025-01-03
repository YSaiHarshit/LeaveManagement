import { useState } from "react";
import Board from "../pages/Board";
import { Link } from "react-router-dom";

function Header(){

    const [ isOpen ,setisOpen ] = useState(false);

    const [ selectedOption, setSelectedoption ] = useState('All Candidates');

    const options = [ "All Candidates" , "Candidates" , "Employees" , "April PayRolls"]

    const handleClick = (option) => {
        setSelectedoption(option);
        setisOpen(false);
    };

    return(

        <div className="w-[80%]">
            <header className="flex">
                        <div className="mt-4 ml-6">
                            <button>
                                <i className="fa-solid fa-bars-staggered text-3xl"></i>
                            </button>
                        </div>

                        <div className="flex">
                            <div className="items-center">
                                <div className=" relative  ml-52 mt-6">
                                    <button onClick={() =>setisOpen(!isOpen)} className=" flex items-center  px-4 py-2 bg-blue-700 text-white text-xl rounded-l-md focus:outline-none ">
                                        {selectedOption}
                                        <span className="flex flex-col ml-8">
                                            <i className={`fa-solid ${isOpen ? "fa-chevron-up": "fa-chevron-down" }`}></i>
                                        </span>
                                    </button>

                                    {isOpen && (

                                        <ul className="w-52  bg-white border border-gray-200 rounded-l-xl  shadow-lg">

                                            {options.map((option) => (
                                                <li key={option} onClick={() => handleClick(option)} className="px-4 py-1 bg-blue-700 text-white text-xl hover:bg-blue-800 cursor-pointer " > {option} </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col mt-6">
                                <input type="text" name="text" id="text" className="bg-white px-4 py-2 flex items-center w-96 rounded-r-lg focus:ring-green-500 text-gray-800 text-xl border-gray-400 h-11 " placeholder="Search.." />

                                <button className="absolute ml-72 my-2 text-2xl">
                                    <i className="fa-solid fa-magnifying-glass ml-12 text-gray-400"></i>
                                </button>
                            </div>
                        </div>

                        <div className=" flex space-x-5 ">

                            <div className="relative bg-blue-700 px-4 py-3 rounded-full h-14 ml-20 mt-4">
                                <button className="text-white text-xl ">
                                    <i class="fa-regular fa-bell"></i>
                                </button>

                                <span className="absolute -top-1 -right-4 bg-red-500 text-white rounded-full px-2 py-1 border-gray-500">
                                    13
                                </span>
                            </div>

                            <div className="relative bg-yellow-500 px-4 h-14 mt-4  py-3 rounded-full ">
                                <button className="text-black text-xl">
                                    <i class="fa-solid fa-wrench"></i>
                                </button>
                            </div>

                            <div className="relative bg-green-600 px-4 py-3 h-14 mt-4 rounded-full">
                                <button className="text-white text-xl">
                                    <i class="fa-regular fa-envelope"></i>
                                </button>

                                <span className="absolute -top-1 -right-5 bg-red-500 text-white rounded-full px-3 py-1 border-white">
                                    6
                                </span>
                            </div>

                        </div>
                    </header>

                    <div className="mt-16 ml-16">
                <div className="ml-7">
                    <h2 className="text-xl text-black font-semibold">Dashboard</h2>
                </div>

                <div className="flex ml-5">
                    <div>
                        <button className=" flex bg-yellow-400 p-6 rounded-lg cursor-pointer  w-56 mt-4">
                            <i className="fa-solid fa-envelope text-6xl text-black -rotate-12"></i>
                            <div className="flex flex-col">
                                <p className="ml-10 font-bold text-4xl">138</p>
                                <p className="text-xl font-semibold ml-6">Messages</p>
                            </div>
                        </button>
                    </div>
                    <div className="my-4 bg-blue-600 p-3 w-70 rounded-lg ml-8">
                        <Link to="">
                            <button className="flex mr-6 pt-2 pb-2">
                                <span className="text-2xl"><i class="fa-solid fa-briefcase text-7xl ml-4 text-white -rotate-12"></i></span>

                                <div className="flex flex-col text-white items-center justify-center">
                                    <span className="text-5xl ml-12 font-bold">50</span>
                                    <span className="text-2xl font-semibold ml-14">Jobs</span>
                                </div>
                            </button>
                        </Link>
                    </div>

                    <div className="my-4 bg-green-600 p-3 w-70 rounded-lg ml-8">
                        <Link to="">
                            <button className="flex mr-6 pt-2 pb-2">
                                <span className="text-2xl ml-2"><i class="fas fa-users text-white text-7xl ml-2"></i></span>

                                <div className="flex flex-col text-white items-center justify-center">
                                    <span className="text-5xl ml-4 font-bold">100</span>
                                    <span className="text-2xl font-semibold ml-6    ">Candidates</span>
                                </div>
                            </button>
                        </Link>
                    </div>

                    <div className="my-4 bg-black text-white p-3 w-70 rounded-lg ml-8">
                        <Link to="">
                            <button className="flex mr-6 pt-2 pb-2">
                                <span className="text-7xl ml-4 text-white"><i class="fa-regular fa-file"></i></span>

                                <div className="flex flex-col text-white items-center justify-center">
                                    <span className="text-5xl ml-8 font-bold">50</span>
                                    <span className="text-2xl font-semibold ml-8">Resumes</span>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className=" flex ml-1 mr-8">
                    <div className=" bg-white rounded-lg m-4  w-4/6 mb-14 h-80  px-4 ">
                        <div className=" flex justify-between items-center mt-6 ml-10 pt-2">
                            <h1 className="text-lg font-bold ">Applied Jobs</h1>
                            <div className="text-gray-700 mr-2">
                                <Link to=""><i class="fa-solid fa-ellipsis-vertical text-lg"></i></Link>
                            </div>
                        </div>

                        <div className="flex bg-blue-200 p-4 items-center  ml-6 my-4  rounded-2xl">
                            <Link to=""> <img src="src\assets\Sales Executive - Applied Jobs.jpg" alt="sales" className="cursor-pointer" />
                            </Link>
                            <div className="ml-4 flex-grow">
                                <h2 className=" flex  text-xl font-bold">Sales Executive</h2>
                                <p className=" mt-2 text-sm text-gray-950">Access Bank</p>
                            </div>
                            <p className="text-sm text-gray-600 mt-12">20 min ago</p>
                        </div>
                        <div className="flex bg-blue-200 p-4 items-center  ml-6 my-4  rounded-2xl">
                            <Link to=""> <img src="src\assets\User Experience - Leave Management.jpg" alt="user" className="cursor-pointer" />
                            </Link>
                            <div className="ml-4 flex-grow">
                                <h2 className=" flex  text-xl font-bold">User Exerience Design</h2>
                                <p className=" mt-2 text-sm text-gray-950">Paystack</p>
                            </div>
                            <p className="text-sm text-gray-600 mt-12">10 min ago</p>

                        </div>

                    </div>

                    <div className="w-4/6 bg-white  rounded-lg  m-4 ml-10  p-8 h-80 px-4">
                        <div className="">
                            <div className="flex justify-between items-center ">
                                <h2 className="text-lg font-bold ml-8">Employees</h2>

                                <div className="cursor-pointer text-gray-700 mr-2">
                                    <i class="fa-solid fa-ellipsis-vertical text-lg"></i>
                                </div>
                            </div>

                            <div className="flex bg-blue-200 p-4 items-center  ml-6 my-4  h-24 rounded-2xl">
                                <Link to=""> <i className="fa-regular fa-circle-user cursor-pointer text-yellow-400 text-5xl" ></i>
                                </Link>
                                <div className="ml-4 flex-grow">
                                    <h2 className=" flex  text-xl font-bold">John Doe</h2>
                                    <p className=" mt-1 text-sm text-gray-950">Role:Product Manager</p>
                                </div>

                                <div className="flex flex-col mr-4">
                                    <p className="text-sm font-semibold ">View</p>
                                    <i className="fa-regular fa-eye  text-white bg-green-500 p-2 rounded-md mt-1  cursor-pointer"></i>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm font-semibold">Download</p>
                                    <i className="fa-solid fa-download   text-white bg-blue-500 p-2 mr-5 ml-3 rounded-md mt-1  cursor-pointer"></i>
                                </div>
                            </div>

                            <div className="flex bg-blue-200 p-4 items-center  ml-6 my-4 h-24 rounded-2xl">
                                <Link to=""> <i className="fa-regular fa-circle-user cursor-pointer text-blue-400 text-5xl" ></i>
                                </Link>
                                <div className="ml-4 flex-grow">
                                    <h2 className=" flex  text-xl font-bold">Ginna Loe</h2>
                                    <p className=" mt-1 text-sm text-gray-950">Role: Sales Executive</p>
                                </div>

                                <div className="flex flex-col mr-4">
                                    <p className="text-sm font-semibold ">View</p>
                                    <i className="fa-regular fa-eye  text-white bg-green-500 p-2 rounded-md mt-1  cursor-pointer"></i>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-sm font-semibold">Download</p>
                                    <i className="fa-solid fa-download   text-white bg-blue-500 p-2 mr-5 ml-3 rounded-md mt-1  cursor-pointer"></i>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            
                    </div>
    )
}

export default Header;