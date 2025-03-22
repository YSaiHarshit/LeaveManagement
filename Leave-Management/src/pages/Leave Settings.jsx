import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';

function LeaveSettings() {

    const [LeaveSettings, setLeaveSettings] = useState([]);
    const [dropdownOpen, setdropdownOpen] = useState(null);
    const [subMenu, setSubMenu] = useState(null);
    const [isOption, setisOption] = useState({});
    const [dropdown, setDropdown] = useState({});
    const dropdownOptions = {

        leaveRecall: ["Yes", "No"],
        leaveBonus: ["Yes", "No"],
        leaveAllocation: ["Junior Level", "Senior Level", "Executive"]
        
    }

    const Items = [
        { label: "Actions" },
        { label: "Approve" },
        { label: "Decline" },
        {
            label: "View Details",
            suboptions: [{ label: "Extensions" }]
        },
    ];

    const toggle = (name) => {
        setDropdown((prev) => ({ ...prev, [name]: !prev[name] }));
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if (LeaveSettings.length === 0) {

            const leaves = [
                { name: "Maternity", duration: 60, recall: "Yes", autoRenew: "No" },
                { name: "Sick", duration: 20, recall: "Yes", autoRenew: "Yes" },
                { name: "Compensatory", duration: 40, recall: "No", autoRenew: "Yes" },
                { name: "Compassionate", duration: 30, recall: "Yes", autoRenew: "No" }
            ];
            
            setLeaveSettings(leaves);  
        }
    }, []);
    

    const registerCustomer = (formValues) => {
        console.log("New Leave Setting added:", formValues);
        setLeaveSettings((prev) => [...prev, { ...formValues, duration: Number(formValues.duration) }]);
        reset();
    };

    


    function optionClicking(row, label) {
        setisOption((prev) => ({ ...prev, [row]: label }));
        setdropdownOpen(null);
        setSubMenu(null);
    }

    return (

        <div className="flex h-[90vh] bg-gray-200 w-full gap-2">

            {/* Create Leave Settings */}

            <div className="bg-white p-4 ml-3 w-1/2 rounded-lg mb-4">
                <h2 className="text-2xl text-black font-bold ml-3 mt-2">Create Leave Settings</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(registerCustomer)(e);
                    }}>
                    <div className="flex space-x-10 shadow-sm">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-base text-gray-700 font-medium mt-2">Leave Plan Name</label>
                            <input type="text" name="" id="" className="w-64 px-2 py-1 border border-gray-200 bg-blue-200 focus:outline-none text-black focus:ring-blue-400 focus:border-blue-800 rounded-md" placeholder="Maternity"
                                {...register('name', {
                                    required: { value: true, message: 'Field is Mandatory' },
                                    minLength: { value: 3, message: 'Minimum 3 Characters' },
                                    maxLength: { value: 16, message: 'Minimum 16 Characters' }
                                })}
                            />

                            <p className="text-red-600 ml-2 min-h-[10px]">{errors['name']?.message}</p>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-base text-gray-700 font-medium mb-2 ">Duration(days)</label>
                            <input type="number" name="" id="" className="w-64 px-2 py-1 border border-gray-200 bg-blue-200 focus:outline-none text-black focus:ring-blue-200 focus:border-blue-800 rounded-md" placeholder="100"
                                {...register('duration', {
                                    required: { value: true, message: 'Field is Mandatory' },
                                    minLength: { value: 2, message: 'Minimum 2 Numbers' },
                                    maxLength: { value: 3, message: 'Minimum 2 Numbers' }
                                })}
                            />
                            <p className="text-red-600 ml-2 min-h-[10px]">{errors['duration']?.message}</p>
                        </div>
                    </div>

                    <div className="flex flex-col relative">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Do you want to Activate Leave Recall for this plan ?</label>

                        <div className="relative">
                            <select className="flex items-center appearance-none  px-4 py-1 w-full bg-blue-200 text-black rounded-md hover:bg-blue-400 cursor-pointer mt-1"
                                onClick={() => toggle("recall")}
                                {...register("recall", {
                                    required: "This Field is Required"
                                })}
                            >
                                <option value="">Select an option from dropdown</option>
                                {dropdownOptions.leaveRecall.map((option, index) => (
                                    <option key={index} value={option} className="w-full bg-blue-300 text-white px-4 py-1 text-xl hover:bg-blue-600 cursor-pointer"> {option} </option>
                                ))}
                            </select>
                            <span className="absolute inset-y-0 right-3 mt-1 flex items-center">
                                <i className={`fa-solid ${dropdown.recall ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </span>
                        </div>
                        {errors.recall && <p className="text-red-500 px-2 min-h-[20px]">{errors.recall.message}</p>}
                    </div>

                    <div className="flex">
                        <div className="flex flex-col mt-2">
                            <label htmlFor="" className="text-sm mt-1 ml-2 font-medium text-gray-700">Would you like to Activate Leave Bonus</label>
                            <div className="relative">
                                <select className="flex items-center appearance-none  px-4 py-1 w-72 bg-blue-200 text-black rounded-md hover:bg-blue-400 cursor-pointer mt-2"
                                    onClick={() => toggle("autoRenew")}
                                    {...register("autoRenew", {
                                        required: "This Field is Required"
                                    })}
                                >
                                    <option value="">Select an option from dropdown</option>
                                    {dropdownOptions.leaveBonus.map((option, index) => (
                                        <option key={index} value={option} className=" w-full bg-blue-300 text-white px-4 py-1 text-lg hover:bg-blue-600 cursor-pointer"> {option} </option>
                                    ))}
                                </select>
                                <span className="absolute inset-y-0 right-3 mt-2 flex items-center">
                                    <i className={`fa-solid ${dropdown.autoRenew ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                </span>
                            </div>
                            {errors.autoRenew && <p className="text-red-500 px-2 min-h-[20px]">{errors.autoRenew.message}</p>}
                        </div>

                        <div className="flex flex-col mt-1">
                            <label htmlFor="" className=" text-sm ml-4 mt-2 font-medium text-gray-700 ">How much percentage of leave bonus?</label>
                            <input type="number" name="" id="" className="w-full ml-2 mt-2 px-8 py-1 border border-gray-200 bg-blue-200 focus:outline-none text-black  focus:ring-blue-400  focus:border-blue-800 rounded-md " placeholder="Percentage(%)"
                                {...register('percentage', {
                                    required: { value: 2, message: 'This Field is Required' },
                                    minLength: { value: 2, message: 'Minimum 2 Numbers' },
                                    maxLength: { value: 3, message: 'Minimum 3 Numbers' }
                                })}
                            />

                            {errors.percentage && <p className="text-red-600 pl-2 min-h-[20px]">{errors['percentage']?.message}</p>}

                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="" className="text-base font-medium ml-2 text-gray-700">Select Leave Allocation</label>
                        <div className="relative">
                            <select className="flex items-center appearance-none  px-4 py-1 w-full bg-blue-200 text-black rounded-md hover:bg-blue-400 cursor-pointer mt-2"
                                onClick={() => toggle("leaveAllocation")}
                                {...register("leaveAllocation", {
                                    required: "This Field is Required"
                                })}
                            >
                                <option value="">Select an option from dropdown</option>
                                {dropdownOptions.leaveAllocation.map((option, index) => (
                                    <option key={index} value={option} className="w-full bg-blue-300 text-white px-4 py-1 text-xl hover:bg-blue-600 cursor-pointer"> {option} </option>
                                ))}
                            </select>
                            <span className="absolute inset-y-0 right-3 mt-2 flex items-center">
                                <i className={`fa-solid ${dropdown.leaveAllocation ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            </span>
                        </div>
                        {errors.leaveAllocation && <p className="text-red-500 px-2 min-h-[20px]">{errors.leaveAllocation.message}</p>}
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="" className="text-base font-medium text-gray-700">Reason for Recall</label>
                        <textarea type="text" name="" id="" rows="3" cols="100" className="w-full focus:ring-blue-500 focus:border-blue-500  mt-1 border px-4 pt-2 border-gray-400" placeholder="Write a Reason Here..."
                            {...register('reason', {
                                required: { value: 3, message: 'Field is Mandatory' },
                                minLength: { value: 10, message: 'Minimum 10 Characters' },
                                maxLength: { value: 300, message: 'Minimum 16 Characters' }
                            })}
                        ></textarea>

                        <p className="text-red-600 ml-1 min-h-[20px]">{errors['reason']?.message}</p>
                    </div>

                    <div className="flex">
                        <button type="submit" className="text-base px-2 py-2 w-full bg-green-500 text-white font-semibold rounded-md"><span>Create</span></button>
                    </div>
                </form>
            </div>

            {/* Manage Leave Settings */}

            <div className="bg-white px-3 py-4  rounded-lg mb-4">

                <div className="flex items-center justify-between mt-4 ">
                    <h2 className="text-2xl text-black font-bold ml-3">Manage Leave Settings</h2>
                    <i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
                </div>

                <div className="mt-4 rounded">

                    <table className="overflow-x-auto w-full">
                        <thead>
                            <tr className=" bg-blue-200">
                                <td className=" px-4 py-3 font-bold">Leave Plan(s)</td>
                                <td className=" px-2 py-3 font-bold">Duration(s)</td>
                                <td className=" px-4 py-3 font-bold">Recall/Autorenew</td>
                                <td className=" px-5 py-3 font-bold">Actions</td>
                            </tr>
                        </thead>

                        <tbody>
                            {LeaveSettings.map((plan, index) => (
                                <tr key={index} >
                                    <td className=" px-4 py-1 font-bold">{plan.name}</td>
                                    <td className=" px-8 py-1 font-bold">{plan.duration}</td>
                                    <td className=" px-12 py-1 font-bold">{plan.recall}/{plan.autoRenew}</td>
                                    <td className="py-1 w-36 relative ">
                                        <button className="bg-blue-800 hover:bg-blue-900 text-white flex px-3 py-2  rounded-md  items-center" onClick={() => setdropdownOpen(dropdownOpen === index ? null : index)}>
                                            {isOption[index] || "Actions"}
                                            <span className="flex flex-col bg-white text-black px-1 py-1 rounded-2xl mt-1 ml-6 ">
                                                <i className={`fa-solid ${dropdownOpen === index ? "fa-chevron-up" : "fa-chevron-down"} cursor-pointer`}></i>
                                            </span>
                                        </button>
                                        {dropdownOpen === index && (
                                            <div className="absolute right-0 mt-2 w-48 bg-blue-600 border border-gray-300  shadow-lg rounded-lg z-50">
                                                <ul className="py-2">
                                                    {Items.map((item, index1) => (
                                                        <li key={index1} className="relative group">
                                                            {item.suboptions ? (
                                                                <div className="relative">
                                                                    <div className="px-3 py-2 flex items-center justify-center w-full hover:bg-blue-300 font-semibold cursor-pointer">
                                                                        <span className="bg-white rounded-full px-2 py-1  flex items-center"><i className="fa-solid fa-chevron-right"></i></span>
                                                                        <span className="flex-1 ml-4"> {item.label} </span>                                                                    
                                                                   </div>
                                                                    <div className="absolute right-full top-0 mt-0 w-40 bg-blue-600 border border-gray-300 shadow-lg rounded-lg z-50 hidden group-hover:block">
                                                                        <ul className="py-2">
                                                                            {item.suboptions.map((subItem, subIndex) => (
                                                                                <li key={subIndex} className="px-4 py-2 hover:bg-blue-300 cursor-pointer" onClick={() => optionClicking(index, subItem.label)}>
                                                                                    {subItem.label}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <button className="px-4 py-2 w-full  text-center hover:bg-blue-300 font-semibold cursor-pointer" onClick={() => { optionClicking(index, item.label); setdropdownOpen(null) }}>
                                                                    {item.label}
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

export default LeaveSettings;