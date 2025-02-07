function InitiateRecall(){

    return(

        <div className="fixed inset-0 min-h-screen bg-gray-600 bg-opacity-95 border-black flex items-center justify-center w-full">
            <div className="bg-white p-9 rounded-md  border-gray-400">
            <i className="fa-regular fa-thumbs-up my-3 px-44 text-9xl   text-blue-500"></i>
            <h2 className="text-2xl px-44 font-bold text-blue-500">Great Job!</h2>
            <h2 className="text-2xl ml-32 px-8 font-bold text-blue-500 "> John Dory has been sent a</h2>
            <h2 className="text-2xl ml-32 px-6 font-bold text-blue-500 ">leave recall email.</h2>
            <button className="bg-blue-500 text-white text-center w-72 mt-3 p-2 ml-24 rounded-md">Close</button>
        </div>
        <div>
        </div>
        </div>
    )
}

export default InitiateRecall;