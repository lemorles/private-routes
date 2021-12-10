import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Error 404</h1>
      This page doesn't exist. Go <Link to="/">Home</Link>
    </div>
  );
};
