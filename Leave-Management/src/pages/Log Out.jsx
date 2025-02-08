import { useState } from "react";
import { useNavigate } from "react-router-dom";

// const [ isOpen , setisOpen ] = useState(false);

// const navigate = useNavigate();

//     const handleLogout = () => {
//         // navigate('/');
//         console.log("User Logged Out");
//         setisOpen(false);
//     }

function Logout(){

    return(

        <div className=" fixed inset-0 top-0 opacity-90 min-h-screen bg-white ">
           <div>
            <h2>Confirm Log Out</h2>

           </div>
        </div>
    )
}

export default Logout;