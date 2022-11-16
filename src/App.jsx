import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
