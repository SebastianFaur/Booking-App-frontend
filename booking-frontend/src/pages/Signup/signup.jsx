import './Signup.css';  
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <input placeholder="Username" />
      <br />
      <input placeholder="Email" />
      <br />
      <input placeholder="Password" type="password" />
      <br />
      <button type="submit">Sign Up</button>

      <p className="login-text">
        Already have an account? <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
