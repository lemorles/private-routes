import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route element={<PrivateRoute auth={auth} />}>
          <Route path="/dashboard" element={<Dashboard setAuth={setAuth} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
