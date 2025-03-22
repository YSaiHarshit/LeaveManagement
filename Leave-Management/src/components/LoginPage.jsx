import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailerror] = useState("");
    const [passwordError, setPassworderror] = useState("");
    const [ SigninError , setSigninError ] = useState("");

    const Users = [
        { email:"alice.johnson@gmail.com" , password:"Jhonsons@123"},
        { email:"y.saiharshith@gmail.com" , password:"Harshith@123"},
        { email:"jake.thawson@gmail.com" , password:"Jthawsons@123"}
    ]

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setSigninError("");

        if (!value) {
            setEmailerror("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailerror("Please enter a valid email address.")
        } else {
            setEmailerror("");
        }
    }

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        setSigninError("");

        const uppercaseFirstLetter = /^[A-Z]/;
        const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
        const number = /\d/;

        if (!value) {
            setPassworderror("Password is required");
        } else if (value.length < 8) {
            setPassworderror("Password must be atleast 8 characters long");
        } else if (!uppercaseFirstLetter.test(value)) {
             setPassworderror("Password must start with an uppercase letter");
        } else if (!specialCharacter.test(value)) {
            setPassworderror("In Password atleast one special character should be there");
        } else if (!number.test(value)) {
            setPassworderror("In Password atleast one number should be there");
        } else {
            setPassworderror("");
        }
    }

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();

        handleEmail({ target: { value: email } });
        handlePassword({ target: { value: password } });    

        if (!email) {
            setEmailerror("Email is required");
            return;
        }
        if (!password) {
            setPassworderror("Password is required");
            return;
        }
        if (emailError || passwordError) {
            navigate("/dashboard/board");
            return;
        }

        const user = Users.find(user => user.email === email && user.password === password);

        if(user){
            navigate("/dashboard/board");
        }else{
            setSigninError("Incorrect email or password");
        }
    }

    return (

        <div className="relative min-h-screen bg-blue-500 flex justify-center items-center">
            <Link to="/">
            <img src="src\assets\Kris.png" alt="kris" className="absolute top-5 left-4 px-24" />
            </Link>
            <div className=" text-center mt-6 bg-green-500 border-4 border-gray-500 rounded-lg w-[600px] pt-6 pb-12 px-10">
                <h2 className="text-3xl text-zinc-50 font-semibold">Login</h2>
                <h4 className=" text-zinc-50 font-semibold mt-2">Login to your account</h4>

               <form onSubmit={signIn} >
               <div className="mt-54">
                    <div className="text-left">
                    <h2 className="mt-5 mr-72 text-zinc-50 font-semibold">Email Address</h2>
                    <input type="email" name="email" id="email" onChange={handleEmail} value={email} placeholder="Enter your email.." className={`w-full mt-2 px-4 py-2 rounded border focus:ring-indigo-300 focus:border-blue-500  ${emailError ? "border-red-500" : "border-gray-300"}`} />
                    {emailError && <p className="text-red-500 text-md font-medium ml-1 mt-1">{emailError}</p>}
                    </div>
                    <div className="text-left">
                    <h2 className="mt-3 mr-80 text-zinc-50 font-semibold">Password</h2>
                    <input type="password" name="password" id="password" onChange={handlePassword} value={password} placeholder="Enter your password.." className={`w-full mt-2 px-4 py-2 border focus:ring-indigo-300 focus:border-blue-500 rounded  ${passwordError ? "border-red-500" : "border-gray-300"}`
                    } />
                    {passwordError && <p className="text-red-500 text-md font-medium mt-1 mr-16">{passwordError}</p>}
                    </div>

                    {SigninError && <p className="text-red-500 text-md font-medium mt-2">{SigninError}</p>}

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 mt-2 cursor-pointer border-gray-300 bg-gray-300 focus:ring-blue-300 focus:ring-2 " />
                        <label htmlFor="" className="mt-2 mr-64 ml-2 text-md text-zinc-50">Remember Me</label>
                        </div>
                        <Link>
                            <label htmlFor="" className=" text-md ml-2 text-zinc-50 underline">Reset Password?</label>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <button type="submit" className="text-center w-full bg-yellow-500 hover:bg-yellow-600 rounded font-semibold py-2 cursor-pointer text-black"
                            disabled={emailError || passwordError}
                        >  Sign in
                       </button>
                    </div>
                </div>
               </form>
            </div>
        </div>

    )
}

export default Login;