import { useNavigate } from "react-router-dom";

export const Dashboard = ({ setAuth }) => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth(false);
    return navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Dashboard</h1>

      <button type="submit">Logout</button>
    </form>
  );
};
