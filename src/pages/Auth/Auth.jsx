import "./Auth.css";
import Logo from "../../assets/img/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmPass, setconfirmPass] = useState(true);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setconfirmPass(false);
    } else {
      dispatch(login(data));
    }
  };

  const resetForm = () => {
    setconfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="Webname">
          <h1>ZH Social Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="infoInput"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="infoInput"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="infoInput"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="infoInput"
              onChange={handleChange}
              value={data.password}
            />

            {isSignUp && (
              <input
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="infoInput"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>

          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm password is not same
          </span>

          <div>
            <span
              style={{ fontSize: "13px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account? Login!"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button type="submit" className="button infoButton">
            {isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

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
