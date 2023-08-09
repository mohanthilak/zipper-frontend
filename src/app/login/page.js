import Navbar from "../navbar/page";
import "./Login.css";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login_container">
          <h3>Sign in to zipper</h3>
          <button  className="login-with-google-btn">
            Sign in with Google
          </button>
          <div className="email_signin">
          <span>or signin with email</span>
          </div>
          <form >
            <div className="login_input">
              <label className="gg" htmlFor="">Username or email</label><br />
              <input type="text" /> 
            </div>
            <div className="login_input">
              <label htmlFor="">Password</label><br />
              <input type="text" /> <br />
              <p>

              forgot Password !!
              </p>
            </div>
            <div className="signin_button">
              SIGN IN
            </div>
          </form>
          <div className="signup_to">
          Don’t have an account? Sign up
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
