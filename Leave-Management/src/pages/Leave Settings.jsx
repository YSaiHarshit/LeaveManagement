import { Link } from "react-router-dom";
import { useState, useEffect , useRef } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";


function LeaveSettings() {

    const [LeaveSettings, setLeaveSettings] = useState([]);

    const [dropdownOpen, setdropdownOpen] = useState(null);

    const dropdownRef = useRef(null); // To handle multiple dropdowns

    const toggleDropdown = (index) => {
        setdropdownOpen(dropdownOpen === index ? null : index);
    };
    
    const [leaveAllocation, setLeaveAllocation] = useState("Senior Level")

    const dropdownOptions = {

        leaveRecall: ["Yes", "No"],
        leaveBonus: ["Yes", "No"],
        leaveAllocation: ["Junior Level", "Senior Level", "Executive"]
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const fetchLeaveSettings = async () => {
        try {
            const response = await axios.get('http://localhost:3001/leaveSettings');
            setLeaveSettings(response.data);
        } catch (error) {
            console.error("Error fetching leave settings:", error);
        }
    };


    useEffect(() => {
        
        fetchLeaveSettings();
        reset();
    }, []);

    // useEffect(() => {

    //     function handleClickOutside(event){
    //      if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
    //         setdropdownOpen(false);
    //      }
    //     }

    //     document.addEventListener("mousedown" , handleClickOutside );

    //     return() => {
    //         document.removeEventListener("mousedown" , handleClickOutside );
    //     }
    // }, []);

    const registerCustomer = async (formValues) => {

        console.log(formValues);

        try {
            
            const response = await axios.post('http://localhost:3001/leaveSettings', formValues);

            fetchLeaveSettings();


        } catch (error) {


        }

    }

    return (

        <div className="flex min-h-screen bg-gray-200 w-full gap-3" ref={dropdownRef}>

            {/* Create Leave Settings */}

            <div className="bg-white p-4 ml-3 w-1/2 rounded-lg mb-6">
                <h2 className="text-2xl text-black font-bold ml-3 mt-4">Create Leave Settings</h2>
                <form onSubmit={handleSubmit(registerCustomer)}>
                    <div className="flex space-x-10 shadow-sm mt-4">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-base text-gray-700 font-medium mb-2 ">Leave Plan Name</label>
                            <input type="text" name="" id="" className="w-64 px-2 py-1 border border-gray-200 bg-blue-200 focus:outline-none text-black focus:ring-blue-400 focus:border-blue-800 rounded-md" placeholder="Maternity"
                                {...register('name', {
                                    required: { value: 3, message: 'Field is Mandatory' },
                                    minLength: { value: 10, message: 'Minimum 10 Characters' },
                                    maxLength: { value: 16, message: 'Minimum 16 Characters' }
                                })}
                            />

                            <p className="text-red-600 ml-2">{errors['name']?.message}</p>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-base text-gray-700 font-medium mb-2 ">Duration(days)</label>
                            <input type="number" name="" id="" className="w-64 px-2 py-1 border border-gray-200 bg-blue-200 focus:outline-none text-black focus:ring-blue-200 focus:border-blue-800 rounded-md" placeholder="100"
                                {...register('duration', {
                                    required: { value: 2, message: 'Field is Mandatory' },
                                    minLength: { value: 2, message: 'Minimum 2 Numbers' },
                                    maxLength: { value: 3, message: 'Minimum 2 Numbers' }
                                })}
                            />
                            <p className="text-red-600 ml-2">{errors['duration']?.message}</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Do you want to Activate Leave Recall for this plan ?</label>

                        <select className="flex items-center appearance-none  px-4 py-2 w-full bg-blue-200 text-black rounded-md hover:bg-blue-400 cursor-pointer mt-2"
                            {...register("recall", {
                                required: "This Field is Required"
                            })}
                        >
                            <option value="">Select an option from dropdown</option>
                            {/* <span className="flex flex-col ml-auto">
                                <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </span> */}
                            {dropdownOptions.leaveRecall.map((option, index) => (
                                <option key={index} value={option} className="w-full bg-blue-300 text-white px-4 py-1 text-xl hover:bg-blue-600 cursor-pointer"> {option} </option>
                            ))}
                        </select>
                        {errors.recall && <p className="text-red-500 px-2">{errors.recall.message}</p>}


                    </div>

                    <div className="flex">
                        <div className="flex flex-col mt-5">
                            <label htmlFor="" className="text-sm mt-1 ml-1  font-medium text-gray-700">Would you like to Activate Leave Bonus</label>
                            <select className="flex items-center appearance-none  px-4 py-2 w-full bg-blue-200 text-black rounded-md hover:bg-blue-400 cursor-pointer mt-2"
                                {...register("autoRenew", {
                                    required: "This Field is Required"
                                })}
                            >
                                <option value="">Select an option from dropdown</option>
                                {/* <span className="flex flex-col ml-auto">
                                <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </span> */}
                                {dropdownOptions.leaveBonus.map((option, index) => (
                                    <option key={index} value={option} className=" w-full bg-blue-300 text-white px-4 py-1 text-lg hover:bg-blue-600 cursor-pointer"> {option} </option>
                                ))}
                            </select>
                            {errors.autoRenew && <p className="text-red-500 px-2">{errors.autoRenew.message}</p>}


                        </div>

                        <div className="flex flex-col ml-2 mt-4">
                            <label htmlFor="" className=" text-sm ml-2 mt-2 font-medium text-gray-700 ">How much percentage of leave bonus?</label>
                            <input type="number" name="" id="" className="w-72 mt-2 py-2 border border-gray-200 bg-blue-200 focus:outline-none text-black  focus:ring-blue-400 px-8  focus:border-blue-800 rounded-md " placeholder="Percentage(%)"
                                {...register('percentage', {
                                    required: { value: 2, message: 'This Field is Required' },
                                    minLength: { value: 2, message: 'Minimum 2 Numbers' },
                                    maxLength: { value: 3, message: 'Minimum 3 Numbers' }
                                })}
                            />

                        { errors.percentage && <p className="text-red-600 pl-2">{errors['percentage']?.message}</p> }

                        </div>
                    </div>

                    <div className="flex flex-col mt-3">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Select Leave Allocation</label>
                        <select className="flex items-center appearance-none  px-4 py-2 w-full bg-blue-200 text-black rounded-md hover:bg-blue-400 cursor-pointer mt-2"
                            {...register("leaveAllocation", {
                                required: "This Field is Required"
                            })}
                        >
                            <option value="">Select an option from dropdown</option>
                            {/* <span className="flex flex-col ml-auto">
                                <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </span> */}
                            {dropdownOptions.leaveAllocation.map((option, index) => (
                                <option key={index} value={option} className="w-full bg-blue-300 text-white px-4 py-1 text-xl hover:bg-blue-600 cursor-pointer"> {option} </option>
                            ))}
                        </select>
                        {errors.leaveAllocation && <p className="text-red-500 px-2">{errors.leaveAllocation.message}</p>}

                    </div>

                    <div className="flex flex-col mt-3">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Reason for Recall</label>
                        <textarea type="text" name="" id="" rows="4" cols="100" className="w-full focus:ring-blue-500 focus:border-blue-500  mt-3 border px-4 pt-2 border-gray-400" placeholder="Write a Reason Here..."
                            {...register('reason', {
                                required: { value: 3, message: 'Field is Mandatory' },
                                minLength: { value: 10, message: 'Minimum 10 Characters' },
                                maxLength: { value: 300, message: 'Minimum 16 Characters' }
                            })}
                        ></textarea>

                        <p className="text-red-600 ml-1">{errors['reason']?.message}</p>
                    </div>

                    <div className="flex mt-7">
                        <button className="text-base px-2 py-2 w-full bg-green-500 text-white font-semibold rounded-md"><span>Create</span></button>
                    </div>
                </form>
            </div>

            {/* Manage Leave Settings */}

            <div className="bg-white px-3 py-4  rounded-lg mb-6">

                <div className="flex items-center justify-between mt-4 ">
                    <h2 className="text-2xl text-black font-bold ml-3">Manage Leave Settings</h2>
                    <i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
                </div>

                <div className="mt-7 rounded">

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
                            {LeaveSettings.map((plan, index) => (
                                <tr key={index} className="py-4">
                                    <td className=" px-4 py-1 font-bold text-left">{plan.name}</td>
                                    <td className=" px-8 py-1 font-bold text-left">{plan.duration}</td>
                                    <td className=" px-12 py-1 font-bold text-left">{plan.recall}/{plan.autoRenew}</td>
                                    <td className=" px-1 py-1 text-left ">
                                        <button onClick={() => toggleDropdown(index)} className="bg-blue-800 hover:bg-blue-900 px-3 py-2 rounded-md">
                                            <span className=" text-xl font-semibold text-white ">Actions</span>
                                            <Link to="">
                                                <i className={`fa-solid fa-chevron-down bg-white hover:bg-slate-200 rounded-full transition-transform duration-300 ml-2 p-1 ${dropdownOpen === index ? 'rotate-180' : 'rotate-0'}`}></i>
                                            </Link>
                                            {dropdownOpen === index && (
                                                <ul className="flex flex-col absolute right-0 bg-blue-700 text-white rounded-md w-40 shadow-lg cursor-pointer mt-2">
                                                    <li className="hover:bg-blue-800 text-white font-bold cursor-pointer p-1"><span>Approve</span></li>
                                                    <li className="hover:bg-red-600 text-white font-bold cursor-pointer p-1"><span>Decline</span></li>
                                                    <li className="hover:bg-blue-800 text-white font-bold cursor-pointer p-1"><span>View Details</span></li>
                                                    <li className="hover:bg-blue-800 text-white font-bold cursor-pointer p-1"><span>Extension</span></li>
                                                </ul>
                                            )}
                                        </button>
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

export default LeaveSettings;