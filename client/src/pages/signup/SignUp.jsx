import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Destructure inputs when calling signup
    await signup(
      inputs.name,
      inputs.username,
      inputs.password,
      inputs.confirmPassword,
      inputs.gender
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl glass-morphism">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Join Us
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Create account on <span className="text-primary font-semibold">ChatApp</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-400 transition-all"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-400 transition-all"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-400 transition-all"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 bg-glass-light border border-glass-border rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-400 transition-all"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <div className="text-right">
            <Link
              to={"/login"}
              className="text-sm text-gray-300 hover:text-primary hover:underline transition-colors"
            >
              Already have an account?
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
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
