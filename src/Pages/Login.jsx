import "bootstrap/dist/css/bootstrap.css";
import '../Style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  async function login(formData) {
    let username = formData.get("username");
    let password = formData.get("password");
    var sha256 = require('js-sha256');
    let salt = "";

    axios.post("https://localhost:7106/api/Login/GetSalt/" + username)
      .then((res) => {
        salt = res.data;
        console.log(res.data);
        let hash = sha256(password + salt);
        axios.post("https://localhost:7106/api/Login", { LoginName: username, TmpHash: hash })
          .then(res => {
            localStorage.setItem("Token", res.data.token)
            window.dispatchEvent(new Event('storage'))
            navigate("/");
          })
          .catch(err => console.log(err))
      })
      .catch((err) => console.log(err));

    
    /*
    FelhasznaloNev = loginDTO.LoginName,
    Email = loggedUser.Email,
    Jogosultsag = loggedUser.Jogosultsag,
    Token = token
    */
  }
  return (
    <div className="App">
      <div className="SignPanel">
        <h1>Login</h1>
        <form className="Form" action={login}>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label">Username</label>
            <input type="text" name="username" className="form-control" id="usernameInput" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}
