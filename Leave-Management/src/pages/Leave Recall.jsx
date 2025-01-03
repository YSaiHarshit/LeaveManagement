import { Link } from "react-router-dom";
import { useState } from "react";
import Recall from "./Recall";

function LeaveRecall() {

    const [isLeaveRecall , setisLeaveRecall] = useState(false);

    return (

        <div className="flex flex-col bg-gray-200 min-h-screen">
            <div className="bg-white rounded-xl mt-10 ml-32 mr-24 p-2  ">

                <div className="flex  ml-6  mb-2 py-4 rounded-lg ">
                    <h2 className="text-2xl font-semibold mt-2 text-black">Ongoing Leave Applications</h2>
                </div>

                <div className="overflow-x-auto  ml-2 mr-4 ">
                    <table className="w-full">
                        <thead className="bg-blue-100  ">
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
                            <tr >
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1  rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Recall</span>
                                    </button></td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">Barry Jhayson</td>
                                <td className="px-11 py-2 text-left">7</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">30/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Recall</span>
                                    </button></td>
                            </tr>

                            <tr>
                                <td className="px-4 py-2 text-left">Tiwa Cavage</td>
                                <td className="px-9 py-2 text-left">120</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Recall</span>
                                    </button></td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Recall</span>
                                    </button></td>
                            </tr>

                            <tr >
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Recall</span>
                                    </button></td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Recall</span>
                                    </button></td>
                            </tr>

                            <tr >
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1 rounded-md ">
                                        <span className=" text-xl text-center ml-2 text-white ">Recall</span>
                                    </button></td>
                            </tr>

                            <tr className="bg-blue-100">
                                <td className="px-4 py-2 text-left">John Steve Doe</td>
                                <td className="px-11 py-2 text-left">5</td>
                                <td className="px-3 py-2 text-left">22/04/2025</td>
                                <td className="px-3 py-2 text-left">28/04/2025</td>
                                <td className="px-5 py-2 text-left">Casual</td>
                                <td className="px-5 py-2 text-left">Personal</td>
                                <td className=" mr-6 py-2 text-left">
                                    <button className="bg-red-500 w-32  px-3 py-1 rounded-md ">
                                        <span className=" text-xl text-center ml-2  text-white ">Recall</span>
                                    </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>





            </div>

         { < Recall / >}
        </div>
    )
}

export default LeaveRecall;