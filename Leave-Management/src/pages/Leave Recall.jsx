import { useState , useEffect } from "react";
import axios from "axios";
import Recall from "./Recall";
import InitiateRecall from "./Initiate Recall";

function LeaveRecall(){

    const [leaveRecall, setleaveRecall] = useState([]);

    const [isEditLeaveRecallVisible, setisEditLeaveRecallVisible] = useState(false);

    // const [ selectedEmployee , setSelectedEmployee ] = useState({});

    const [ selectedLeave , setSelectedLeave ] = useState([]);


    useEffect(() => {

        getAllEmployees();
        

    }, [isEditLeaveRecallVisible])

    const getAllEmployees = async () => {

        try {

            const response = await axios.get('http://localhost:3001/leaveRecall')
            setleaveRecall(response.data);
            
        } catch (error) {

        }
    }

    return(

        <div className="flex flex-col bg-gray-200 min-h-screen">
            <div className="bg-white rounded-xl ml-14 p-2  ">

                <div className="flex  ml-6  mb-2 py-4 rounded-lg ">
                    <h2 className="text-2xl font-semibold mt-2 text-black">Ongoing Leave Applications</h2>
                </div>

                <div className="overflow-x-auto  ml-2 mr-4 ">
                    <table className="w-full">
                        <thead className="bg-blue-100">
                            <tr className="ml-4">
                                <th className=" px-4 py-4 text-left">Name(s)</th>
                                <th className=" px-4 py-4 text-left">Duration(s)</th>
                                <th className=" px-4 py-4 text-left">Start Date</th>
                                <th className=" px-4 py-4 text-left">End Date</th>
                                <th className=" px-6 py-4 text-left">Type</th>
                                <th className=" px-4 py-4 text-left">Reason(s)</th>
                                <th className=" px-9 py-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaveRecall?.map(leave => (
                                <tr>
                                    <td className="px-4 py-2 text-left">{leave.name}</td>
                                    <td className="px-11 py-2 text-left">{leave.duration}</td>
                                    <td className="px-3 py-2 text-left">{leave.startDate}</td>
                                    <td className="px-3 py-2 text-left">{leave.endDate}</td>
                                    <td className="px-5 py-2 text-left">{leave.type}</td>
                                    <td className="px-5 py-2 text-left">{leave.reason}</td>
                                    <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 hover:bg-red-800 w-32  px-3 py-1  rounded-md" onClick={() =>{setisEditLeaveRecallVisible(true) ; setSelectedLeave(leave)}}>
                                       <span className=" text-xl text-center ml-2 text-white" >Recall</span>
                                    </button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isEditLeaveRecallVisible && < Recall setisEditLeaveRecallVisible={setisEditLeaveRecallVisible} leave={selectedLeave} />}

            {/* <InitiateRecall /> */}
            
        </div>
    )
}

export default LeaveRecall;