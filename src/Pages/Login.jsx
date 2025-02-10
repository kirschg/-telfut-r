import "bootstrap/dist/css/bootstrap.css";
import '../Style.css';

function Login() {
  async function login(formData){
    let email = formData.get("email");
    let password = formData.get("password");
    if(true)
    {
      console.log(formData);
    }
  } 
  return (
    <div className="App">
        <div className="SignPanel">
            <h1>Login</h1>
            <form className="Form" action={login}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
export default Login;