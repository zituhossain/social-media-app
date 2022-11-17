import "./Auth.css";
import Logo from "../../assets/img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="Webname">
          <h1>ZH Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
};

// Login form
function LogIn() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Login</h3>

        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "13px" }}>
            Don't have an account? Sign Up!
          </span>
        </div>
        <button type="submit" className="button infoButton">
          Login
        </button>
      </form>
    </div>
  );
}

// Sign Up form
function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
          <input
            type="text"
            name="confirmpass"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "13px" }}>
            Already have an account? Login!
          </span>
        </div>
        <button type="submit" className="button infoButton">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
