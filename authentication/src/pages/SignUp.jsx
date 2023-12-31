import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../components/Auth";

// import axios from "axios";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 rounded-lg bg-slate-300 "
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="p-3 rounded-lg bg-slate-300 "
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="p-3 rounded-lg bg-slate-300 "
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <Auth />
      </form>
      <div className="flex gap-2 mt-5 ">
        <p> Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
      <p className="text-red-700">
        {error ? error.message || "Something went wrong,please try again!" : ""}
      </p>
    </div>
  );
}
