import { useState, useEffect } from "react";
import Recall from "./Recall";
import InitiateRecall from './Initiate Recall'

function LeaveRecall() {

    const [leaveRecall, setleaveRecall] = useState([]);
    const [isEditLeaveRecallVisible, setisEditLeaveRecallVisible] = useState(false);
    const [selectedLeave, setSelectedLeave] = useState(null);
    const [isInitiateRecall, setisInitiateRecall] = useState(false);
    const [recalledEmployees, setRecalledEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
        localStorage.removeItem("recalledEmployees");
    }, []);

    const getAllEmployees = async () => {

        const recallData = [
            
            { id: 1, name: "John Steve Doe", duration: "5", startDate: "22/04/2025", endDate: "26/04/2025", type: "Casual", reason: "Personal" },
            { id: 2, name: "Barry Jhayson", duration: "6", startDate: "01/04/2025", endDate: "06/04/2025", type: "Casual", reason: "Personal" },
            { id: 3, name: "Tiwa Cawage", duration: "4", startDate: "24/03/2025", endDate: "27/03/2025", type: "Maternity", reason: "Child Care" },
            { id: 4, name: "Jake Thawson", duration: "4", startDate: "15/04/2025", endDate: "18/04/2025", type: "Paternity", reason: "Personal" },
            { id: 5, name: "Troy Dawage", duration: "4", startDate: "12/04/2025", endDate: "15/04/2025", type: "Compensatory", reason: "Personal" },
            { id: 6, name: "Emily Rose Parker", duration: "3", startDate: "05/04/2025", endDate: "07/04/2025", type: "Sick", reason: "Personal" },
            { id: 7, name: "Mira Lawsen", duration: "4", startDate: "02/04/2025", endDate: "05/04/2025", type: "Sick", reason: "Personal" },
            { id: 8, name: "Sienna Rawage", duration: "5", startDate: "06/04/2025", endDate: "10/04/2025", type: "Compensatory", reason: "Perrsonal" }
        ];

        localStorage.removeItem("recallData");

        localStorage.setItem("recallData", JSON.stringify(recallData));
    
        setleaveRecall(recallData);
    }

    const removeEmployee = (id) => {
        const updateRecalled = [...recalledEmployees, id];
        setRecalledEmployees(updateRecalled);
        localStorage.setItem("recalledEmployees", JSON.stringify(updateRecalled));
        setisInitiateRecall(false);

    };

    return (

        <div className="flex flex-col bg-gray-200 h-screen max-h-[74vh]">
            <div className="bg-white rounded-xl ml-14 p-3">

                <div className="flex  ml-6 py-2 rounded-lg ">
                    <h2 className="text-2xl font-semibold mt-2 text-black">Ongoing Leave Applications</h2>
                </div>

                <div className="overflow-x-auto  ml-2 mr-4 mt-1">
                    <table className="w-full">
                        <thead className="bg-blue-100">
                            <tr className="ml-4">
                                <th className=" px-4 py-3 text-left">Name(s)</th>
                                <th className=" px-4 py-3 text-left">Duration(s)</th>
                                <th className=" px-4 py-3 text-left">Start Date</th>
                                <th className=" px-4 py-3 text-left">End Date</th>
                                <th className=" px-6 py-3 text-left">Type</th>
                                <th className=" px-4 py-3 text-left">Reason(s)</th>
                                <th className=" px-9 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaveRecall?.filter((employee) => !recalledEmployees.includes(employee.id)).map((employee) => (
                                <tr key={employee.id}>
                                    <td className="px-4 py-1 text-left">{employee.name}</td>
                                    <td className="px-11 py-1 text-left">{employee.duration}</td>
                                    <td className="px-3 py-1 text-left">{employee.startDate}</td>
                                    <td className="px-3 py-1 text-left">{employee.endDate}</td>
                                    <td className="px-5 py-1 text-left">{employee.type}</td>
                                    <td className="px-5 py-1 text-left">{employee.reason}</td>
                                    <td className=" mr-6 py-1 text-left">
                                        <button className="bg-red-500 hover:bg-red-800 w-32 px-3 py-1  rounded-md" onClick={() => { setisEditLeaveRecallVisible(true); setSelectedLeave(employee) }}>
                                            <span className=" text-xl text-center ml-2 text-white" >Recall</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isEditLeaveRecallVisible && < Recall setisEditLeaveRecallVisible={setisEditLeaveRecallVisible} leave={selectedLeave} setisInitiateRecall={setisInitiateRecall} />}

            {isInitiateRecall && <InitiateRecall setisInitiateRecall={setisInitiateRecall} employee={selectedLeave} removeEmployee={removeEmployee} />}

        </div>
    )
}

export default LeaveRecall;