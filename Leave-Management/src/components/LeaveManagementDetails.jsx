import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";


function LeaveManagementDetails(){

    return(
             
            <div className="flex flex-col min-h-screen  bg-gray-200">
            <div className=" items-center w-[20%] bg-blue-900 ">
                            <div className=" ml-12 p-3">
                                <img src="src\assets\Kris.jpg" alt="kris" />
                            </div>
            
                            <div className="flex items-center mt-1 ">
                                {/* <div className="p-3"> */}
                                <i className="fa-regular fa-circle-user text-5xl ml-8  "></i>
                                {/* </div> */}
            
                                <div className="ml-4 text-white">
                                    <h2 className="text-2xl text-white font-semibold ml-2">Kris Admin</h2>
                                    <p className="text-sm ml-2 text-white">Admin</p>
                                </div>
                            </div>
            
                            <div>
                                <h2 className="text-sm text-white font-normal mt-5 ml-6">Features</h2>
                                <ul className="">
                                    <Link to="/board" ><li className="mt-1 text-white font-semibold hover:bg-yellow-400 rounded-md  px-2 py-2 pl-12 ml-6 cursor-pointer ">
                                        <span>Dashboard</span>
                                    </li>
                                    </Link>
            
                                    <li className=" ml-6 hover:bg-yellow-400 rounded-md font-semibold  pl-4 px-2 py-1">
                                        <Link to="" className="text-white" >
                                            <span className="font-extrabold text-2xl"><i class="fa-regular fa-envelope"></i></span>
                                            <span htmlFor="" className="ml-2 text-sm text-gray-100 cursor-pointer">Messages</span>
                                            <span className="ml-32   bg-red-600 text-white rounded-full px-2 py-1 ">13</span>
                                        </Link>
                                    </li>
                                </ul>
                                <h2 className="ml-6 mt-1 text-white text-xs">Recruitement</h2>
                                <ul>
                                    <Link to="">
                                        <li className="ml-6 hover:bg-yellow-400 text-white rounded-md font-semibold pl-4 p-1">
                                            <span className="text-2xl"><i class="fa-solid fa-briefcase "></i></span>
                                            <span htmlFor="" className="ml-3 text-sm cursor-pointer">Jobs</span>
                                        </li>
                                    </Link>
            
            
                                    <Link to="">
                                        <li className=" text-white hover:bg-yellow-400 rounded-md font-semibold pl-3 px-2 ml-4 p-1">                               
                                             <span className="text-2xl ml-2"><i class="fas fa-users"></i></span>
                                            <span htmlFor="" className="ml-2 text-sm cursor-pointer">Candidates</span>
                                        </li>
                                    </Link>
            
                                    <Link to="">
                                        <li className="text-white hover:bg-yellow-400 rounded-md font-semibold pl-3 px-2 ml-4 p-1">                                
                                            <span className="text-2xl ml-4"><i class="fa-regular fa-file"></i></span>
                                            <span htmlFor="" className="text-sm ml-4 cursor-pointer">Resumes</span>
                                        </li>
                                    </Link>
            
            
                                    <h2 className="ml-6 mt-2 text-white text-xs">Organization</h2>
            
                                    <Link to="">
                                        <li className="text-white mt-1 hover:bg-yellow-400 rounded-md font-semibold px-2 py-1   ml-4">
                                            <span className="text-2xl ml-4"><i class="fa-solid fa-user"></i></span>
                                            <span htmlFor="" className="text-sm ml-2 cursor-pointer">Employee Management</span>
                                        </li>
                                    </Link>
            
                                    <Link to="/leavemanagement">
                                        <li className="text-white hover:bg-yellow-400 rounded-md font-semibold px-2 py-1 ml-4" >
                                            <span className="text-2xl ml-8"><i class="fa-solid fa-book-open"></i></span>
                                            <span htmlFor="" className="text-sm ml-2 cursor-pointer">Leave Management</span>
                                        </li>
                                    </Link>
            
                                    <Link to="">
                                        <li className="text-white mt-1  hover:bg-yellow-400 rounded-md font-semibold px-2 py-1 ml-4  ">
                                            <span className="text-2xl ml-3"><i class="fa-solid fa-scale-unbalanced-flip"></i></span>
                                            <span htmlFor="" className="text-sm ml-2 cursor-pointer">Performance Management</span>
                                        </li>
                                    </Link>
            
            
                                    <h2 className="mt-2 text-white font-semibold ml-6">Kris Pay</h2>
            
                                    <Link to="">
                                        <li className="text-white mt-1 hover:bg-yellow-400 rounded-md font-semibold  px-2 py-1 ml-4 ">
                                            <span className="text-2xl ml-3"><i class="fa-solid fa-money-bill-wave"></i></span>
                                            <span htmlFor="" className="text-sm ml-3 ">Payroll Management</span>
                                        </li>
                                    </Link>
            
                                    <Link to="/">
                                        <li className="mt-2 text-white bg-red-500 rounded-md font-semibold px-2 py-1  text-center ml-8  mr-8">
                                            <span className="text-xl"><i class="fa-solid fa-power-off"></i></span>
                                            <button  htmlFor="" className="text-xl ml-3 cursor-pointer font-bold ">Log Out</button>
                                        </li>
                                    </Link>
            
            
                                </ul>
                            </div>
                        </div>
          <div className="ml-56 w-[80%]">
               <div className="container items-center justify-center pl-20 space-x-4  my-10">
            <i className="fa-solid fa-book-open text-2xl ml-1"></i>
            <span className=" text-2xl font-semibold">Leave Management</span>
            </div>

            <div className="flex ml-6">
                <Link to="/leavemanagement/leavesettings" className="ml-14 bg-blue-700 rounded-md w-64 text-center px-4 py-2 hover:bg-yellow-400">
                   <span><button className="text-gray-100">Leave Settings</button></span> 
                </Link>
                <Link to="/leavemanagement/leaverecall" className="ml-6 bg-blue-700 rounded-md w-64 text-center px-4 py-2 hover:bg-yellow-400">
                   <span ><button className="text-gray-100">Leave Recall</button></span> 
                </Link>
                <Link to="/leavemanagement/leavehistory" className="ml-6 bg-blue-700 rounded-md w-64 text-center px-4 py-2 hover:bg-yellow-400">
                   <span><button className="text-gray-100">Leave History</button></span> 
                </Link>
                <Link className="ml-6 bg-blue-700 rounded-md w-64 text-center px-4 py-2 hover:bg-yellow-400">
                   <span><button className="text-gray-100"> Relief Officers</button></span> 
                </Link>
            </div>

            {/* <div className="mt-12 ml-16 ">
               <Link to=""> <img src="src\assets\Leave Applications.jpg" alt="leave" className="rounded-lg h-72 ml-4" />
               </Link>
            </div> */}
               </div>               
            
        </div>
    )
}

export default LeaveManagementDetails;