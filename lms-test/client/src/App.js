import "./App.css";
import SignUpForm from "./components/signup/SignUpForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Router, Routes } from "react-router-dom";
import HomeNav from "./components/home/HomeNav";
import LoginForm from "./components/login/LoginForm";
import ApplyLeaveForm from "./components/applyLeave/ApplyLeaveForm";
import ApplyLeave from "./pages/ApplyLeave";
import AddUser from "./pages/AddUser";
import Policy from "./pages/Policy";

function App() {
  // const [listOfOrganisation, setlistOfOrganisation] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/api/signup").then((response) => {
  //     setlistOfOrganisation(response.data);
  //   });
  // }, []);

  return (
    <div>
      <header>
        <HomeNav />
      </header>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/apply-leave" element={<ApplyLeave/>}></Route>
          <Route path="/users" element={<AddUser/>}></Route>
          <Route path="/policies" element={<Policy/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
