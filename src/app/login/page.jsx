import Navbar from "../navbar/page";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="h-20 flex items-center">
          <h1 className="text-5xl font-bold text-[#002379] ml-[5%]">zipper</h1>
      </div>
      <div className="login ">
        <div className="login_container">
          <h3 className="font-bold pb-12  text-xl">Sign in to zipper</h3>
          <button  className="login-with-google-btn border-black-900">
            Sign in with Google
          </button>
          <div className="email_signin  py-6   flex items-center gap-2">
            <div className="w-24 md:w-32 border border-gray-400"></div>
              <span className=" text-sm text-gray-600">or signin with email</span>
            <div className="w-24 md:w-32 h-0 border border-gray-400"></div>
          </div>
          <form >
            <div className="login_input">
              <label className="text-md font-semibold" htmlFor="">Username or email</label><br />
              <input className="rounded-md w-[100%]" type="text" /> 
            </div>
            <div className="login_input">
              <div className="flex justify-between items-center">
                <label className="text-md font-semibold" htmlFor="">Password</label>
                <span className=" text-xs underline font-md p-0" htmlFor="">Forgot Password?</span>
              </div>
              <input className="rounded-md" type="text" /> <br />
            </div>
            <button className="signin_button mb-3 w-full">
              SIGN IN
            </button>
          </form>
          <div className="signup_to text-md hover:underline cursor-pointer">
          Don’t have an account? Sign up
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
