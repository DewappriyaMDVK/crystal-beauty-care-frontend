import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function registerHandler() {
    // Basic front-end validation
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Simple phone sanity check (digits/plus/minus/space allowed)
    const phoneSanity = /^[0-9+\-\s()]+$/;
    if (!phoneSanity.test(phone) || phone.replace(/\D/g, "").length < 6) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    /* 
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters.");
      return;
    }
    */
    setLoading(true);
    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/`,
        payload
      );

      console.log("Registration successful", res.data);
      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.log("Registration failed", err?.response?.data ?? err.message);
      toast.error(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex">
      <div className="w-[50%] h-full"></div>

      <div className="flex w-[50%] h-full items-center justify-center">
        <div className="w-[450px] h-[700px] backdrop-blur-md shadow-xl rounded-[10px] flex flex-col justify-center items-center">
          <h1 className="text-black text-2xl">Register</h1>

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]"
            type="text"
            placeholder="First Name"
          />

          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]"
            type="text"
            placeholder="Last Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]"
            type="email"
            placeholder="E-mail"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]"
            type="tel"
            placeholder="Phone (e.g. +94 77 123 4567)"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]"
            type="password"
            placeholder="Password"
          />

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]"
            type="password"
            placeholder="Confirm Password"
          />

          <button
            onClick={registerHandler}
            className="w-[400px] h-[45px] bg-green-600 rounded-xl text-white cursor-pointer"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>

          <p className="text-gray-500 mt-[15px]">
            Already have an account?
            <span className="text-blue-600 p-[5px] hover:text-blue-400">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
