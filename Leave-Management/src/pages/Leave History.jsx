import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function LeaveHistory() {

    const [leaveHistory, setleaveHistory] = useState([]);
    const [dropdownOpen, setDropdownOpen2] = useState(null);
    const [selectedOption, setselectedOption] = useState({});

    const Actions = [
        { label: "Actions" },
        { label: "Approve" },
        { label: "Decline" },
        {
            label: "View Details",
            suboptions: [{ label: "Extensions" }]
        },
    ];

    const optionClicking = (index, label) => {
        setselectedOption(prev => ({ ...prev, [index]: label }));
        setDropdownOpen2(null);
    }

    useEffect(() => {
        getAllEmployeesHistory();
    }, [])

    const getAllEmployeesHistory = () => {
        
        const defaultHistory = [
            { id: 1, name: "John Steve Doe", duration: "5", startDate: "22/04/2025", endDate: "26/04/2025", type: "Casual", reason: "Personal" },
            { id: 2, name: "Barry Jhayson", duration: "4", startDate: "20/03/2025", endDate: "23/03/2025", type: "Sick", reason: "Examination" },
            { id: 3, name: "Tiwa Cavage", duration: "3", startDate: "10/03/2025", endDate: "12/03/2025", type: "Maternity", reason: "Child Care" },
            { id: 4, name: "Alice Marie Johnson", duration: "4", startDate: "15/04/2025", endDate: "18/04/2025", type: "Compensatory", reason: "Personal" },
            { id: 5, name: "David Michael Smith", duration: "4", startDate: "12/04/2025", endDate: "16/04/2025", type: "Casual", reason: "Personal" },
            { id: 6, name: "Emily Rose Parker", duration: "3", startDate: "05/04/2025", endDate: "07/04/2025", type: "Sick", reason: "Personal" },
            { id: 7, name: "James Robert Wilson", duration: "4", startDate: "02/04/2025	", endDate: "05/04/2025", type: "Sick", reason: "Personal" },
            { id: 8, name: "Sophia Anne Thompson", duration: "4", startDate: "04/04/2025", endDate: "08/04/2025", type: "Sick", reason: "Personal" }
        ];

        localStorage.setItem("leaveHistory", JSON.stringify(defaultHistory));
        setleaveHistory(defaultHistory);
    }

    return (

        <div className="flex flex-col bg-gray-200 h-screen max-h-[74vh]">

            <div className="bg-white rounded-xl ml-10 p-2 pb-2 ">

                <div className="flex  space-x-96 gap-80 py-1 rounded-lg justify-around ">
                    <h2 className="text-2xl font-semibold mt-2 ml-3 ">Leave History</h2>
                    <div className="mr-24">
                        <i className="fa-solid fa-filter mr-10 text-3xl text-black cursor-pointer"></i>

                        <button className="bg-green-500 p-2 w-32 rounded-lg mr-10">
                            <span className="text-center text-xl font-semibold ">Export</span>
                            <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                        </button>

                    </div>
                </div>

                <div className="overflow-x-auto  ml-2 mr-4 ">
                    <table className=" w-full">
                        <thead className="bg-blue-100">
                            <tr className="ml-4">
                                <th className=" px-4 py-3 text-left">Name(s)</th>
                                <th className=" px-4 py-3 text-left">Duration(s)</th>
                                <th className=" px-4 py-3 text-left">Start Date</th>
                                <th className=" px-4 py-3 text-left">End Date</th>
                                <th className=" px-4 py-3 text-left">Type</th>
                                <th className=" px-4 py-3 text-left">Reason(s)</th>
                                <th className=" px-10 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaveHistory?.map((leaves, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-1 text-left">{leaves.name}</td>
                                    <td className="px-11 py-1 text-left">{leaves.duration}</td>
                                    <td className="px-3 py-1 text-left">{leaves.startDate}</td>
                                    <td className="px-3 py-1 text-left">{leaves.endDate}</td>
                                    <td className="px-5 py-1 text-left">{leaves.type}</td>
                                    <td className="px-5 py-1 text-left">{leaves.reason}</td>
                                    <td className="py-1 w-36 relative">
                                        <button className="bg-blue-800 hover:bg-blue-900 text-white flex px-3 py-2  rounded-md justify-center" onClick={() => setDropdownOpen2(dropdownOpen === index ? null : index)}>
                                            {selectedOption[index] || "Actions"}
                                            <span className="flex flex-col bg-white text-black px-1 py-1 rounded-3xl ml-4 ">
                                                <i className={`fa-solid ${dropdownOpen === index ? "fa-chevron-up" : "fa-chevron-down"} cursor-pointer`}></i>
                                            </span>
                                        </button>
                                        {dropdownOpen === index && (
                                            <div className="absolute right-0 mt-2 w-48 bg-blue-600 border border-gray-300 shadow-lg rounded-lg z-50"
                                            style={{
                                                bottom: index >= 4 ? "100%" : "auto",
                                                top: index >= 4 ? "auto" : "100%",   
                                            }}
                                            >
                                                <ul className="py-2">
                                                    {Actions.map((Action, index1) => (
                                                        <li key={index1} className="relative group">
                                                            {Action.suboptions ? (
                                                                <>
                                                                    <div className="px-3 py-2 flex items-center hover:bg-blue-300 cursor-pointer">
                                                                        <span className="bg-white rounded-full px-2 py-1  flex items-center"><i className="fa-solid fa-chevron-right"></i></span>
                                                                        <span  className="flex-1 ml-4">{Action.label}</span>
                                                                    </div>

                                                                    <div className="absolute right-full top-0 mt-0 mr-2 w-40 bg-blue-600 border border-gray-300 shadow-lg rounded-lg z-50 hidden group-hover:block">
                                                                        <ul className="py-2">
                                                                            {Action.suboptions.map((subItem, subIndex) => (
                                                                                <li key={subIndex} className="px-4 py-2  cursor-pointer hover:bg-blue-300" onClick={() => optionClicking(index, subItem.label)}>
                                                                                    {subItem.label}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>

                                                                </>
                                                            ) : (
                                                                <button className="px-4 py-2 w-full text-center hover:bg-blue-300 cursor-pointer" onClick={() => optionClicking(index, Action.label)}>
                                                                    {Action.label}
                                                                </button>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LeaveHistory;