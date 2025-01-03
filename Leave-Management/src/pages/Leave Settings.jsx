import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from 'react-hook-form';


function LeaveSettings() {

    const [isdropdownopen, setisdropdownOpen] = useState(false);

    const [isSelectedoption, setisSelectedoption] = useState('Select option from Dropdown');

    const options = ["Select option from dropdown", "Yes", "No"];

    const [isdropdownopen1, setisdropdownOpen1] = useState(false);

    const [isSelectedoption1, setisSelectedoption1] = useState('Select option from Dropdown');

    const options1 = ["Select option from dropdown", "Yes", "No"];

    const [isdropdownopen2, setisdropdownOpen2] = useState(false);

    const [isSelectedoption2, setisSelectedoption2] = useState('Select option from Dropdown');

    const options2 = ["Senior Level", "Junior Level"];

    const handleClick2 = (option2) => {

        setisSelectedoption2(option2);
        setisSelectedoption2(false);
    };

    const handleClick1 = (option1) => {

        setisSelectedoption1(option1);
        setisSelectedoption1(false);
    };


    const handleClick = (option) => {
        setisSelectedoption(option);
        setisdropdownOpen(false);
    };

    const { register , handleSubmit , formState: {errors} , watch } = useForm();
    

    return (

        <div className="flex min-h-screen bg-gray-200">
            <div className="bg-white p-4 w-1/2 ml-3 rounded-lg mt-3 mb-5 mr-4">
                <h2 className="text-2xl text-black font-bold ml-3 mt-4">Create Leave Settings</h2>

                <form>
                    <div className="flex space-x-10 shadow-sm mt-4 ml-3">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-base text-gray-700 font-medium mb-2 ">Leave Plan Name</label>
                            <input type="text" name="" id="" className="w-64 px-2 py-1 border border-gray-200 bg-blue-200 focus:outline-none text-black focus:ring-blue-400 focus:border-blue-800 rounded-md" placeholder="Maternity"
                             />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-base text-gray-700 font-medium mb-2 ">Duration(days)</label>
                            <input type="number" name="" id="" className="w-64 px-2 py-1 border border-gray-200 bg-blue-200 focus:outline-none text-black focus:ring-blue-200 focus:border-blue-800 rounded-md" placeholder="100" />
                        </div>
                    </div>

                    <div className="flex flex-col mt-4   ml-3">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Do you want to Activate Leave Recall for this plan ?</label>

                        <button onClick={() => setisdropdownOpen(!isdropdownopen)} className="flex  items-center  px-4 py-2 w-full bg-blue-200 text-black rounded-md hover:bg-blue-400 mt-2">
                            {isSelectedoption}
                            <span className="flex flex-col ml-auto">
                                <i className={`fa-solid ${isdropdownopen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </span>
                        </button>

                        {isdropdownopen && (

                            <ul className="w-full border border-gray-200">
                                {options.map((option, index) => (
                                    <li onClick={() => handleClick(option)} key={index} className="w-full bg-blue-300 text-white px-4 py-1 text-xl hover:bg-blue-600 cursor-pointer"> {option} </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex">
                        <div className="flex flex-col mt-4   ml-3">
                            <label htmlFor="" className="text-base font-medium text-gray-700">Would you like to Activate Leave Bonus</label>
                            <button onClick={() => setisdropdownOpen1(!isdropdownopen1)} className="flex  items-center  px-4 py-2 w-96 bg-blue-200 text-black rounded-md hover:bg-blue-400 mt-3">
                                {isSelectedoption1}
                                <span className="flex flex-col ml-auto">
                                    <i className={`fa-solid ${isdropdownopen1 ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                </span>
                            </button>

                            {isdropdownopen1 && (
                                <ul className="w-full border border-gray-200">
                                    {options1.map((option1, index) => (
                                        <li onClick={() => handleClick1(option1)} key={index} className="w-full bg-blue-300 text-white px-4 py-1 text-xl hover:bg-blue-600 cursor-pointer"> {option1} </li>
                                    ))}
                                </ul>)}
                        </div>

                        <div className="flex flex-col space-x-4 mt-4  ">
                            <label htmlFor="" className="ml-4 text-base font-medium text-gray-700 ">How much percentage of leave bonus?</label>
                            <input type="number" name="" id="" className="w-72 mt-3 px-4 py-2 border border-gray-200 bg-blue-200 focus:outline-none text-black  focus:ring-blue-400 px-8 focus:border-blue-800 rounded-md " placeholder="Percentage(%)" />
                        </div>
                    </div>

                    <div className="flex flex-col mt-4   ml-3">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Select Leave Allocation</label>
                        <button onClick={() => setisdropdownOpen2(!isdropdownopen2)} className="flex  items-center  px-4 py-2 w-full bg-blue-200 text-black rounded-md hover:bg-blue-400 mt-3">
                                {isSelectedoption2}
                                <span className="flex flex-col ml-auto">
                                    <i className={`fa-solid ${isdropdownopen2 ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                </span>
                            </button>

                            {isdropdownopen2 && (
                                <ul className="w-full border border-gray-200">
                                    {options2.map((option2, index) => (
                                        <li onClick={() => handleClick2(option2)} key={index} className="w-full bg-blue-300 text-white px-4 py-1 text-xl hover:bg-blue-600 cursor-pointer"> {option2} </li>
                                    ))}
                                </ul>)}
                    </div>

                    <div className="flex flex-col mt-4 ml-3">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Reason for Recall</label>
                        <textarea name="" id="" rows="4" cols="100" className="w-full mt-3 border border-gray-400"></textarea>
                    </div>

                    <div className="flex mt-3">
                        <button className="text-base px-2 py-2 w-full bg-green-500 text-white font-semibold rounded-md"><span>Create</span></button>
                    </div>
                </form>
            </div>

            

            <div className="bg-white p-4 w-1/2 ml-3 rounded-lg mt-3 mb-5 mr-4">

                <div className="flex items-center justify-between mt-4 ">
                    <h2 className="text-2xl text-black font-bold ml-3">Manage Leave Settings</h2>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>

                <div className="mt-10 rounded">

                    <table className="overflow-x-auto w-full">
                        <thead>
                            <tr className=" bg-blue-200">
                                <td className=" px-4 py-4 font-bold text-left">Leave Plan(s)</td>
                                <td className=" px-2 py-4 font-bold text-left">Duration(s)</td>
                                <td className=" px-4 py-4 font-bold text-left">Recall/Autorenew</td>
                                <td className=" px-7 py-4 font-bold text-left ml-4">Actions</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="">
                                <td className=" px-4 py-5 font-bold text-left">Maternity</td>
                                <td className=" px-8 py-4 font-bold text-left">60</td>
                                <td className=" px-12 py-4 font-bold text-left">No/No</td>
                                <td className=" mr-10 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center font-semibold  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button>
                                </td>
                            </tr>

                            <tr className="bg-blue-200">
                                <td className=" px-4 py-5 font-bold text-left">Sick</td>
                                <td className=" px-8 py-4 font-bold text-left">14</td>
                                <td className=" px-12 py-4 font-bold text-left">No/Yes</td>
                                <td className=" mr-10 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center font-semibold  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className=" px-4 py-5 font-bold text-left">Compassionate</td>
                                <td className=" px-8 py-4 font-bold text-left">30</td>
                                <td className=" px-12 py-4 font-bold text-left">No/No</td>
                                <td className=" mr-10 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center font-semibold  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td className=" px-4 py-5 font-bold text-left">Exam</td>
                                <td className=" px-8 py-4 font-bold text-left">20</td>
                                <td className=" px-12 py-4 font-bold text-left">No/No</td>
                                <td className=" mr-10 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center font-semibold  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className=" px-4 py-5 font-bold text-left">Paternity</td>
                                <td className=" px-8 py-4 font-bold text-left">60</td>
                                <td className=" px-12 py-4 font-bold text-left">No/No</td>
                                <td className=" mr-10 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center font-semibold  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button>
                                </td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td className=" px-4 py-5 font-bold text-left">Casual</td>
                                <td className=" px-8 py-4 font-bold text-left">10</td>
                                <td className=" px-12 py-4 font-bold text-left">Yes/No</td>
                                <td className=" mr-10 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center font-semibold  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className=" px-4 py-5 font-bold text-left">Exam</td>
                                <td className=" px-8 py-4 font-bold text-left">20</td>
                                <td className=" px-12 py-4 font-bold text-left">No/No</td>
                                <td className=" mr-10 py-2 text-left">
                                    <button className="bg-blue-800  px-3 py-2  rounded-md ">
                                        <span className=" text-xl text-center font-semibold  text-white ">Actions</span>
                                        <Link to=""> <i className="fa-solid fa-chevron-down bg-white rounded-full ml-3 p-1"></i>   </Link>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LeaveSettings;