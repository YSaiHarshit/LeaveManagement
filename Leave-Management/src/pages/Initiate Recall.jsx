function InitiateRecall(props){

    const { employee , removeEmployee } = props;
    return(

        <div className="fixed inset-0  bg-gray-400 border-gray-400 shadow-lg flex  items-center justify-center bg-opacity-70">
            <div className="bg-white text-white p-9 rounded-md shadow-lg border-gray-400">
            <i className="fa-solid fa-thumbs-up my-3 px-44 text-9xl fill-current text-blue-700"></i>
            <h2 className="text-2xl px-44 font-bold text-blue-500">Great Job!</h2>
            <h2 className="text-2xl ml-8 px-8 font-bold text-blue-500 "> {employee?.name} has been sent a</h2>
            <h2 className="text-2xl ml-28 px-6 font-bold text-blue-500 ">leave recall email.</h2>
            <button className="bg-blue-500 text-white text-center w-72 mt-3 p-2 ml-24 rounded-md" onClick={() => removeEmployee(employee.id)}>Close</button>
        </div>
        <div>   
        </div>
        </div>
    )
}

export default InitiateRecall;