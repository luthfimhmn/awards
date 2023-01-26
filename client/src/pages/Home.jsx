import logo from "../award_logo.png";
import { useState } from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const buttonSignIn = async (event) => {
    try {
      event.preventDefault();
      const data = await axios.post("/login", {
        email,
      });

      if (data.status === 500) {
        alert("Invalid Email");
      } else {
        alert("Email Good");
        navigate("/awards", {
          state: {
            name: data.data.name,
            email: data.data.email,
          },
        });
      }
    } catch (error) {
      console.log(error.response.data.message, "INI ERRONYA");
      alert(error.response.data.message);
    }
  };
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Award</p>

        <p>Enter your email address to sign in and continue</p>
        <input
          placeholder="Input your email here..."
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <Button variant="primary" onClick={buttonSignIn}>
          Sign in
        </Button>
      </header>
    </div>
  );
}
