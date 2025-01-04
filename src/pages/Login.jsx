import React, { useState } from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Section from "../components/Section";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    try {
      // Your login logic here
      // After successful login:
      localStorage.setItem("token", "your-auth-token");

      // Check for redirect URL
      const redirectUrl = sessionStorage.getItem("redirectAfterLogin");
      sessionStorage.removeItem("redirectAfterLogin"); // Clear the stored URL

      // Navigate to stored URL or default dashboard
      navigate(redirectUrl || "/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Handle successful form submission here
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Section
          className="pt-[12rem] -mt-[5.25rem]"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="hero"
        >
          <div className="container min-h-screen px-4 mx-auto">
            <div className="max-w-md mx-auto mt-12 mb-2">
              <div className="  bg-[#1B1B1B] rounded-2xl shadow-xl p-10">
                <h1 className="text-4xl font-bold text-center mb-8">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1B1B1B] border border-[#3A3A3A] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1B1B1B] border border-[#3A3A3A] rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                      placeholder="Create a password"
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {errors.acceptTerms && (
                    <p className="text-sm text-red-500">{errors.acceptTerms}</p>
                  )}
                  <div className="flex justify-end">
                    <Button px="px-3" type="submit">
                      Log In{" "}
                    </Button>
                  </div>
                  <div className="text-center mt-14">
                    <p className="text-sm text-gray-600">
                      New user ?{" "}
                      <Link
                        to="/signup"
                        className="text-white  underline font-medium"
                      >
                        Create an account now
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <ButtonGradient />
    </>
  );
};

export default Login;
