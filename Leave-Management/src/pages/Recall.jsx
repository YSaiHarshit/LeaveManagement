function Recall(props){

    const { setisLeaveRecall } = props;
    return(

        <div className=" fixed inset-0 bg-gray-600 opacity-90 rounded-md flex items-center justify-center ">
            <form action="" className="w-full max-w-2xl p-4 rounded-md bg-gray-100">
                <h2 className="text-4xl text-black ml-12 pt-4 "><i class="fa-solid fa-phone"></i></h2>
                <h2 className="text-3xl font-bold p-2 ml-6">Leave Recall</h2>
                <h2 className="text-sm font-normal px-8 ">Fill in the Required Details to recall this employee</h2>

                <div className="block">
                    <h2 className="text-base font-normal px-8 py-2">Employee Name</h2>
                    <input type="text" className=" w-96 border border-gray-400 rounded-md  ml-7 mt-1 px-4 py-1 " name="" id="" placeholder="Enter Your Name" />

                    <h2 className="text-base font-normal px-8 py-2">Department</h2>
                    <input type="text" className=" w-96 border border-gray-400 rounded-md  ml-7 mt-1 px-4 py-1 " name="" id="" placeholder="Sales and Marketing" />

                </div>
            </form>
        </div>
    )
}

export default Recall;