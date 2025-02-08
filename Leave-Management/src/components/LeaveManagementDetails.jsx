import { useState, useEffect } from "react";
import { Link , useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function LeaveManagementDetails() {

  const [activeSubtab, setActiveSubtab] = useState("image");
    //   const [activeSubtab, setActiveSubtab] = useState(() => {
    //     return localStorage.getItem("activesubtab") || "image";
    //   });

    //   useEffect(() => {
    //     localStorage.setItem("activesubtab" , activeSubtab);
    //   } , [activeSubtab]);

    const location = useLocation();
    
    const Button = () => {

        setActiveSubtab("true")
    }

    return (

        <div className="bg-gray-200">

            <div className="container items-center justify-center px-20 space-x-4  py-6 mt-4 ">
                <i className="fa-solid fa-book-open text-2xl"></i>
                <span className=" text-2xl font-semibold">Leave Management</span>
            </div>

            <div className="flex ml-16 space-x-10 mt-3">
                <Link to="leave-settings">
                    <button onClick={() => setActiveSubtab("leave-settings")} className={`ml-6 rounded-md w-56 text-center font-semibold px-4 py-2  ${activeSubtab === "leave-settings" ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"} hover:bg-yellow-400 hover:text-black`}>Leave Settings</button>
                </Link>

                <Link to="leave-recall">
                    <button onClick={() => setActiveSubtab('leave-recall')} className={`rounded-md w-56 text-center font-semibold px-4 py-2  ${activeSubtab === "leave-recall" ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"} hover:bg-yellow-400 hover:text-black `}>Leave Recall</button>
                </Link>

                <Link to="leave-History">
                    <button onClick={() => setActiveSubtab('leave-history')} className={`rounded-md w-56 text-center font-semibold px-4 py-2 ${activeSubtab === "leave-history" ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"} hover:bg-yellow-400 hover:text-black`}>Leave History</button>
                </Link>

                <Link>
                    <button className=" bg-blue-700 text-white rounded-md w-56 text-center font-semibold px-4 py-2 hover:bg-yellow-400 hover:text-black">Relief Officers</button>
                </Link>
            </div>

            <div className="mt-3 p-2 ml-16">
                {activeSubtab === "image" && (
                    <div>
                        <img src="/src/assets/Leave Applications.jpg" alt="leave applications" className="cursor-pointer rounded-md h-[300px]" />
                    </div>
                )}  

                {/* {activeSubtab === "leave-settings" && < LeaveSettings/>}
                {activeSubtab === "leave-applications" && < LeaveApplications/>}
                {activeSubtab === "leave-recall" && < LeaveRecall/>}
                {activeSubtab === "leave-history" && < LeaveHistory/>} */}
            </div>
            
            < Outlet />
        </div>
    )
}

export default LeaveManagementDetails;