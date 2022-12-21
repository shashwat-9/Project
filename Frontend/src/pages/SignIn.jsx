import React, { useState } from "react";
import Login from "./login/Login";
import Register from "./login/Register";

function SignIn() {
  const [signIn, setSignIn] = useState(false);

  return signIn ? (
    <Register setSignIn={() => setSignIn(false)} />
  ) : (
    <Login setSignIn={() => setSignIn(true)} />
  );
}

export default SignIn;
