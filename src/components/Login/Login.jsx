import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      setError(undefined);
      // const autentificareEmailUser=`select mail from users where mail=${email}`;
    } catch (err) {
      setError(err.message);
    }
  };

  const login = () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    logInWithEmailAndPassword(email, password);
  };

  return (
    <form>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <button onClick={login} type="submit">
        Login
      </button>
      {error && (
        <div style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>
          {error}
        </div>
      )}
    </form>
  )
}