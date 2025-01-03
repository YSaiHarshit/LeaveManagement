import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LeaveHistory() {

    const [ isOpen ,setisOpen ] = useState(false);
    
        const [ selectedOption, setSelectedoption ] = useState('All Candidates');
    
        const options = [ "All Candidates" , "Candidates" , "Employees" , "April PayRolls"];
    
        const handleClick = (option) => {
            setSelectedoption(option);
            setisOpen(false);
        };

        const [isOpen1 , setisOpen1 ] = useState(false);

        const [selectedOption1 , setSelectedoption1 ] = useState('Actions')

        const toggleDropdown = () => {
            
            setisOpen1(!isOpen1);
        }

        const dropDown = (drop) => {

            setSelectedoption1(drop);
            setisOpen1(false);
        }

        const Actions = [ "Approve" , "Decline" , "View Details" , "Extensions"]

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (

        <div className="flex flex-col bg-gray-200 min-h-screen">

            <div className="w-[80%]">
           
            </div>
            
            
                        <div className="bg-white rounded-xl mt-10 ml-32 mr-24 p-2 ">

                <div className="flex  space-x-96 gap-96 py-4 rounded-lg justify-around ">
                    <h2 className="text-2xl font-semibold mt-2 ">Leave History</h2>
                    <div className="mr-24">
                        {/* <i className="fa-solid fa-filter "></i> */}

                        <button  className="bg-green-500 p-2 w-32 rounded-lg mr-4">
                            <span className="text-center text-xl font-semibold ">Export</span>
                            <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                        </button>

                    </div>
                </div>

                <div className="overflow-x-auto  ml-2 mr-4 ">
                    <table className=" w-full">
                        <thead className="bg-blue-100  ">
                            <tr className="ml-4">
                                <th className=" px-4 py-4 text-left">Name(s)</th>
                                <th className=" px-4 py-4 text-left">Duration(s)</th>
                                <th className=" px-4 py-4 text-left">Start Date</th>
                                <th className=" px-4 py-4 text-left">End Date</th>
                                <th className=" px-4 py-4 text-left">Type</th>
                                <th className=" px-4 py-4 text-left">Reason(s)</th>
                                <th className=" px-4 py-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Sick</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className="flex relative mr-6 py-2 text-left ">
                                    <button onClick={toggleDropdown} className="bg-blue-800 flex  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white "> {selectedOption1} </span>
                                        <span className="flex flex-col bg-white rounded-full  p-1 ml-4 mt-1 ">
                                            <i className={`fa-solid ${isOpen1 ? "fa-chevron-up": "fa-chevron-down" }` }></i>
                                        </span>
                                        {/* <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link> */}
                                    </button>

                                    {isOpen1 && (
                                        <ul className="flex flex-col border border-gray-200 z-50 bg-white shadow-lg">
                                            {Actions.map((action) => (
                                         <li key={action} onClick={() =>dropDown(drop)} className="px-4 py-2 bg-blue-400 text-white hover:bg-blue-600 cursor-pointer"> {action} </li>

                                            ))}
                                        </ul>
                                    )}
                                </td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">Barry Jhayson</td>
                                <td className="px-11 py-2 text-left">7</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">30/04/2025</td>
                                <td className="px-5 py-2 text-left">Exam</td>
                                <td className="px-5 py-2 text-left">Examination</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button></td>
                            </tr>

                            <tr>
                                <td className="px-4 py-2 text-left">Tiwa Cavage</td>
                                <td className="px-11 py-2 text-left">120</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Maternity</td>
                                <td className="px-5 py-2 text-left">Child Care</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button></td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Sick</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button></td>
                            </tr>

                            <tr >
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Sick</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button></td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Sick</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button></td>
                            </tr>

                            <tr >
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Sick</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button></td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Sick</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2 rounded-md ">
                                        <span className=" text-xl text-center ml-2  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>





            </div>
        </div>
    )
}

export default LeaveHistory;