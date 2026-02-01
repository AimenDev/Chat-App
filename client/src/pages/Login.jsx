import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl glass-morphism">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Login to <span className="text-primary font-semibold">ChatApp</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-400 transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-400 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-right">
            <Link
              to="/signup"
              className="text-sm text-gray-300 hover:text-primary hover:underline transition-colors"
            >
              {"Don't"} have an account?
            </Link>
          </div>

          <div>
            <button
              className="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
