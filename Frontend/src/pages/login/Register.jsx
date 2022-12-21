import "./Register.css";

export default function Register({ setSignIn }) {
  const handleSubmit = (e) =>{
        e.preventDefault();
  }
  return (
    <div className="Register">
      <span className="RegisterTitle">Registration</span>
      <form className="RegisterForm">
        <input
          type="text"
          className="RegisterInput"
          placeholder="First Name..."
        />
        <label></label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="Last Name..."
        />
        <label></label>
        <input
          type="email"
          id="email"
          className="RegisterInput"
          placeholder="Email"
        />
        <label></label>

        <input
          type="password"
          className="RegisterInput"
          placeholder="Enter your password..."
        />
        <label></label>
        <input
          className="RegisterInput"
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
        <label></label>

        <button className="RegisterButton" type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
        <button className="RegisterRegisterButton" onClick={setSignIn}>
          Login
        </button>
    </div>
  );
}
