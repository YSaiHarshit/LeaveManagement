import { Link } from 'react-router-dom'
import Sales from '../assets/Sales Executive - Applied Jobs.jpg';
import User from '../assets/User Experience - Leave Management.jpg';

function Board() {

    return (

        <div className='flex bg-gray-200'>


            <div className="top-0 mt-8 ml-6">
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
                                    <span className="text-2xl font-semibold ml-6">Candidates</span>
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
                            <Link to=""> <img src={Sales} className="cursor-pointer" />
                            </Link>
                            <div className="ml-4 flex-grow">
                                <h2 className=" flex  text-xl font-bold">Sales Executive</h2>
                                <p className=" mt-2 text-sm text-gray-950">Access Bank</p>
                            </div>
                            <p className="text-sm text-gray-600 mt-12">20 min ago</p>
                        </div>
                        <div className="flex bg-blue-200 p-4 items-center  ml-6 my-4  rounded-2xl">
                            <Link to=""> <img src={User} alt="user" className="cursor-pointer" />
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
                                 <i className="fa-regular fa-circle-user cursor-pointer text-yellow-400 text-5xl" ></i>
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

export default Board;