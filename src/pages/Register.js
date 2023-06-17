import { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import '../styles/RegisterStyles.css';

function Register() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // const navigate = useNavigate();


  const signupFn = async (e) => {
    e.preventDefault();
    const body = {
      name: userName,
      email: userEmail,
      password: password,
    };
    try{
      let data = await axios.post("http://localhost:8080/crm/api/v1/auth/signup", body);
          console.log("Data is " + JSON.stringify(data));
      }catch(err){
      console.log(err)
      }
  };


  return (
    <div>
      <div className="bg-info d-flex justify-content-center align-items-center vh-100">
        <div className="card card-signin m-5 p-5 shadow-lg rounded-4">
          <div className="row m-2">
            <div>
              <h4 className="text-center">
            Sign Up
              </h4>
              <form onSubmit = {signupFn}>
                  
                    <div className="input-group m-1">
                      <input
                        type="userName"
                        className="form-control"
                        placeholder="User Name"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-group m-1">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
                    </div>
                <div>
                  <input
                    type="password"
                    className="form-control m-1"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group my-2 ms-1">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value='Sign Up'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;