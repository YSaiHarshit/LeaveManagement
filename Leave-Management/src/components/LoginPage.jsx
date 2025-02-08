import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {

    const[email , setEmail ] = useState("");

    const [ password , setPassword] = useState("");

    const [ emailError , setEmailerror ] = useState("");

    const [ passwordError , setPassworderror] = useState("");
    
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);

        if(!value) {
            setEmailerror("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(value)){
            setEmailerror("Please enter a valid email address.")
        }else{
            setEmailerror("");
        }
    }

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);

        if(!value) {
            setPassworderror("Password is required")
        }else if(value.length < 8){
            setPassworderror("Password must be atleast 8 characters long")
        }else{
            setPassworderror("");
        }
    }


   const navigate = useNavigate();


    const handleSignin = (e) => {
        e.preventDefault();

        if(!email) {
            setEmailerror("Email is required")
        }

        if(!password){
            setPassworderror("Password is required")
        }

        if(!emailError && !passwordError && email && password) {
        navigate("/dashboard")

        }
    }

    return (

        <div className="bg-blue-400">
            <img className="ml-20" src="src\assets\Kris.jpg" alt="kris" />
            <div className=" text-center mt-1 p-4">
                <h2 className="text-3xl text-zinc-50 font-semibold">Login</h2>
                <h4 className=" text-zinc-50 font-semibold mt-2">Login to your account</h4>

                <div className="mt-54">
                    <h2 className="mt-5 mr-72 text-zinc-50 font-semibold">Email Address</h2>
                    <input type="email" name="email" id="email" onChange={handleEmail} value={email} placeholder="Enter your email.." className={`mt-2 mr-1 ml-22 px-2 py-1 focus:ring-indigo-300 focus:border-blue-500 rounded-sm w-96 ${
                        emailError ? "border-red-500" :"border-gray-300"}`} />
                 {emailError && <p className="text-red-500 text-lg mt-1 mr-32">{emailError}</p>}

                    <h2 className="mt-3 mr-80 text-zinc-50 font-semibold">Password</h2>
                    <input type="password" name="" id="" onChange={handlePassword} value={password} placeholder="Enter your password.." className= { `mt-2 mr-1 ml-22 px-2 py-1 focus:ring-indigo-300 focus:border-blue-500 rounded-sm w-96  ${
                        passwordError ? "border-red-500" : "border-gray-300" }`
                    } />

                    {passwordError && <p className="text-red-500 text-lg mt-1 mr-12">{passwordError}</p>}

                    <div className="mt-3">
                        
                            <input type="checkbox" className="w-4 h-4 cursor-pointer border-gray-300 bg-gray-300 focus:ring-blue-300 focus:ring-2 " /> 
                            <label htmlFor="" className="mt-2 mr-32  ml-2 text-md text-zinc-50">Remember Me</label>
                        <Link className="">
                            <label htmlFor="" className=" text-md ml-2 text-zinc-50">Reset Password?</label>
                        </Link>
                    </div>
                    
                    <div className="mt-6">
                        <Link to="/dashboard"><button onClick="{handleSignin}" type="submit" className= { `text-center bg-yellow-500 w-96 hover:bg-yellow-600 rounded-sm py-1 cursor-pointer text-black ${ emailError || passwordError }`}
                            // disabled={ emailError || passwordError}
                            >  Sign in </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Login;