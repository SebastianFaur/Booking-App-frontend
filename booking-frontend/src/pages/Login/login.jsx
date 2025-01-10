import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
      <div className="form-container">  
        <h1>Login </h1>
        <input placeholder="Username" />
        <br />
        <input placeholder="Password" />
        <br />
        <button type="submit">Login</button>

        <p className='singup'>Don't have an account? <Link to="/signup">Sing up</Link></p>
      </div>
    
    );
  };
  
  export default Login;
  