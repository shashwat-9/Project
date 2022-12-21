import "./Login.css";

export default function Login({ setSignIn }) {
  return (
    <div className="login">
      <span className="loginTitle">Log In</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit">
          Log In
        </button>
      </form>
      <button className="loginRegisterButton" onClick={setSignIn}>
        Register
      </button>
    </div>
  );
}
