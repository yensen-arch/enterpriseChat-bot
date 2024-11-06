import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import axios from "axios";
function App() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const authorizationCode = urlParams.get("code");
  // const getToken = async (authorizationCode) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/token",
  //       {
  //         code: authorizationCode,
  //       }
  //     );
  //     const token = response.data;
  //     console.log(token)
  //     localStorage.setItem("token", token);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // getToken(authorizationCode)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
