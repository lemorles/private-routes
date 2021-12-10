import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth(true);
    return navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
