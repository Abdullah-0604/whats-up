import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(typeof fname, lname, username, email, password);
      let headersList = {
        "PRIVATE-KEY": "ff9fcb69-cbd6-4fc0-80f2-b0851ff8cfd2",
        "Content-Type": "application/json",
      };

      let reqOptions = {
        url: "https://api.chatengine.io/users/",
        method: "POST",
        headers: headersList,
        data: JSON.stringify({
          username: username,
          secret: password,
          email: email,
          first_name: fname,
          last_name: lname,
        }),
      };
      axios.request(reqOptions).then(function (response) {
        console.log(response.data)
        // console.log(response.data["is_authenticated"]);
        if(response.data["is_authenticated"]){
          toast("successfully created new user.");
        }
      });
      history.push("/");
    } catch (err) {
      setError("Oops, something went wrong.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form sing-up-user">
        <h1 className="title">Create New User</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="input"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="input"
            placeholder="Lat Name"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Display Name"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Email"
            required
          />
          <div align="center">
            <button
              type="submit"
              className="button"
              style={{ height: 40, padding: 0 }}
            >
              <span>Sign Up</span>
            </button>
          </div>
        </form>
        <h6>{error}</h6>
      </div>
    </div>
  );
};

export default SignUp;
