import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function LeaveManagementDetails() {

    const [activeSubtab, setActiveSubtab] = useState(
        localStorage.getItem("activeSubtab") || "image"
    );
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem("activeSubtab", activeSubtab);
    }, [activeSubtab]);

    useEffect(() => {
        
        const path = location.pathname.split("/").pop();

        if(path === "leave-management"){
            setActiveSubtab("image");
        } else {
            setActiveSubtab(path);
        }
    }, [location.pathname]);

    return (

        <div className="bg-gray-200 min-h-screen">
            <div className="container items-center justify-center px-20 space-x-4 ">
                <i className="fa-solid fa-book-open text-2xl"></i>
                <span className=" text-2xl font-semibold">Leave Management</span>
            </div>

            <div className="flex ml-16 space-x-10 mt-3">
                <Link to="leave-settings">
                    <button className={`ml-6 rounded-md w-56 text-center font-semibold px-4 py-2  ${activeSubtab === "leave-settings" ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"} hover:bg-yellow-400 hover:text-black`} onClick={() => setActiveSubtab("leave-settings")}>Leave Settings</button>
                </Link>

                <Link to="leave-recall">
                    <button className={`rounded-md w-56 text-center font-semibold px-4 py-2  ${activeSubtab === "leave-recall" ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"} hover:bg-yellow-400 hover:text-black `} onClick={() => setActiveSubtab('leave-recall')}>Leave Recall</button>
                </Link>

                <Link to="leave-history">
                    <button className={`rounded-md w-56 text-center font-semibold px-4 py-2 ${activeSubtab === "leave-history" ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"} hover:bg-yellow-400 hover:text-black`} onClick={() => setActiveSubtab('leave-history')}>Leave History</button>
                </Link>

                <Link>
                    <button className=" bg-blue-700 text-white rounded-md w-56 text-center font-semibold px-4 py-2 hover:bg-yellow-400 hover:text-black">Relief Officers</button>
                </Link>
            </div>

            <div className="mt-5 ml-16">
                {activeSubtab === "image" && (
                    <div>
                        <img src="/Leave Applications.jpg" alt="leave applications" className="cursor-pointer rounded-md h-[300px]" />
                    </div>
                )}
            </div>

            < Outlet />
        </div>
    )
}

export default LeaveManagementDetails;