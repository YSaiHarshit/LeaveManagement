

function EditUser(){

    return(

        <div className=" fixed inset-0 bg-gray-600 opacity-90 rounded-md flex items-center justify-center">
            <form action="" className="w-full max-w-2xl p-4 rounded-md bg-gray-100 ">
                <h2 className="text-4xl text-black ml-16 pt-4 "><i class="fa-solid fa-phone"></i></h2>
                <h2 className="text-3xl font-bold p-2 ml-6">Leave Recall</h2>
                <h2 className="text-sm font-normal px-8 ">Fill in the Required Details to recall this employee</h2>

                <div className="block">
                    <h2 className="text-base font-normal px-8 py-2">Employee Name</h2>
                    <input type="text" className="w-96 border border-gray-400 rounded-md  ml-7 mt-1 px-4 py-1 focus:ring-2 focus:ring-blue-200 " name="" id="" placeholder="Enter Your Name" />

                    <h2 className="text-base font-normal px-8 py-2 mt-3">Department</h2>
                    <input type="text" className="w-96 border border-gray-400 rounded-md  ml-7 mt-1 px-4 py-1 focus:ring-2 focus:ring-blue-200 " name="" id="" placeholder="Sales and Marketing" />
                </div>

              <div className="flex space-x-6 mt-5 ml-8">
               <div className="flex flex-col">
               <h2 className="text-base font-normal ">Start Date</h2>
                <input type="date" name="" id="" className="w-72 px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md cursor-pointer " />
               </div>
                <div className="flex flex-col">
                <h2 className="text-base font-normal">End Date</h2>
                <input type="date" name="" id="" className="w-72 px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md cursor-pointer" />
                </div>
              </div>

              <div className="flex space-x-6 mt-5 ml-8">
               <div className="flex flex-col">
               <h2 className="text-base font-normal "> Days Remaining</h2>
                <input type="number" name="" id="" className="w-72 px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md cursor-pointer " />
               </div>
                <div className="flex flex-col">
                <h2 className="text-base font-normal"> New Resumption Date</h2>
                <input type="date" name="" id="" className="w-72 px-4 py-1 mt-2 bg-gray-200 border border-gray-400 rounded-md cursor-pointer" />
                </div>
              </div>

              <div className="block mt-5 ml-8">
                <h2 className="text-base font-normal">Relief Officer(s)</h2>
                <input type="text" name="" id="" className="w-full px-4 py-2 mt-3 border border-gray-400 focus:ring-2 focus:ring-blue-200 rounded-md " placeholder="James Dory" />
              </div>

              <div className="mt-4 ml-8 space-x-10">

                <button className="bg-green-500 hover:bg-green-700 text-white text-2xl text-center font-semibold p-16 py-3 rounded-lg"> Initiate Recall</button>

                <button className="border border-red-500 hover:bg-red-500 text-red-500 hover:text-white font-semibold px-24 py-4 text-center rounded-lg" onClick={() => setisLeaveRecall()}>Cancel</button>
              </div>

            </form>
        </div>
    )
}

export default EditUser;