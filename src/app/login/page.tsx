"use client";
import React, { useState } from "react";
import DotBackground from "@/components/DotBackground";
import Image from "next/image";
import placeholderImage from "../../../public/light kgts icons/android-chrome-512x512.png";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    if (!validateForm()) {
      await delay(5000);
      setErrors({});
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        if (data.errors) {
          const apiErrors: { [key: string]: string } = {};
          data.errors.forEach((error: { param: string; msg: string }) => {
            apiErrors[error.param] = error.msg;
          });
          setErrors(apiErrors);
        } else if (data.error) {
          setErrors({ apiError: data.error });
        } else if (data.message) {
          setErrors({ apiError: data.message });
        } else {
          setErrors({ apiError: "Login failed" });
        }
        setSuccess("");
      } else {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userName", data.userName);
        setSuccess("Logged in successfully! Redirecting to home...");
        setErrors({});

        // Redirect to home after a delay
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (err) {
      setErrors({
        apiError: "An unexpected error occurred. Please try again.",
      });
      setSuccess("");
    }
  };

  return (
    <div className="flex min-h-screen relative bg-gray-900">
      <DotBackground />

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-2/3 text-background p-8 relative z-10">
        <form
          onSubmit={handleLogin}
          className="bg-[#555555] text-foreground p-10 rounded-xl shadow-2xl w-full max-w-md"
        >
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Log In
          </h2>

          {Object.values(errors).map((error, index) => (
            <div
              key={index}
              className="bg-red-100 text-red-700 p-4 rounded mb-4 text-sm"
            >
              {error}
            </div>
          ))}

          {success && (
            <div className="bg-green-100 text-green-700 p-4 rounded mb-4 text-sm">
              {success}
            </div>
          )}

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-black border-secondary rounded-lg focus:ring-2 focus:ring-primary shadow-sm"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-black border-secondary rounded-lg focus:ring-2 focus:ring-primary shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-secondary transition"
          >
            Log In
          </button>

          <div className="mt-6 text-center text-sm">
            <p>
              Don’t have an account?{" "}
              <a href="/signup" className="text-primary hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Society Image */}
      <div className="hidden md:flex w-1/3 justify-center items-center">
        <div className="rounded-full overflow-hidden w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center bg-gray-700">
          <Image
            src={placeholderImage}
            alt="Signup Image"
            layout="intrinsic"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
