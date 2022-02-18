import "./App.css";
import Login from "./components/login/login";
import SignUpForm from "./components/signup/SignUpForm";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [listOfOrganisation, setlistOfOrganisation] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/signup").then((response) => {
      setlistOfOrganisation(response.data);
    });
  }, []);

  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}

export default App;
