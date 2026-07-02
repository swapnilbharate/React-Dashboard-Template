import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "") {
      toast.error("Username is required");
      return;
    }

    if (password.trim() === "") {
      toast.error("Password is required");
      return;
    }

    if (password.length < 4) {
      toast.error("Password must be at least 4 characters");
      return;
    }

    let role = "user";

    if (username.toLowerCase() === "admin") {
      role = "admin";
    }

    dispatch(login({ user: username, role }));

    toast.success(`Welcome ${username}!`);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h3 className="text-center mb-4">Dashboard Login</h3>

        <div className="form-group mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label">Password</label>

          <div className="input-group">
            <input
              type={showPass ? "text" : "password"}
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="btn btn-outline-secondary"
              onClick={() => setShowPass(!showPass)}
              type="button"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button className="btn btn-dark w-100" onClick={handleLogin}>
          Login
        </button>

        <p className="text-center mt-3 small">
          Tip: use username <b>admin</b> for admin role
        </p>
      </div>
    </div>
  );
}
