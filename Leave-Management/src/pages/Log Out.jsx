import { Link } from "react-router-dom";

function Logout(props) {

    const { setIsLogOutVisible } = props;

    return (

        <div className="fixed inset-0 top-0 bg-opacity-80 min-h-screen flex items-center justify-center bg-white ">
           <Link>
            <div className="bg-blue-400 max-w-xl p-24 border border-gray-300 rounded-lg">
            <div className="ml-20">
                <h2 className="text-xl font-bold">Confirm Log Out</h2>
            </div>
            <div className="mt-4 ml-4">
                <h2 className="text-xl font-semibold">Are you sure you want to log out?</h2>
            </div>
            <div className="mt-6 ml-8 space-x-6">
                <button className="text-2xl font-semibold border border-red-500 rounded-md px-6 py-1 text-red-500 hover:bg-red-500 hover:text-white" onClick={() => setIsLogOutVisible(false)}>Cancel</button>
                <Link to='/'> <button className="text-xl font-bold bg-red-500 border-none rounded-md px-6 py-2 text-white hover:bg-red-700">Log Out</button>
                </Link>
            </div>
            </div>
           </Link>
        </div>
    )
}

export default Logout;