import { useEffect, useState } from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import api from "../services/api.interceptor";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { token, setToken } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

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

    // try {
    //   // Your login logic here
    //   // After successful login:
    //   localStorage.setItem("token", "your-auth-token");

    //   // Check for redirect URL
    //   const redirectUrl = sessionStorage.getItem("redirectAfterLogin");
    //   sessionStorage.removeItem("redirectAfterLogin"); // Clear the stored URL

    //   // Navigate to stored URL or default dashboard
    //   navigate(redirectUrl || "/dashboard");
    // } catch (error) {
    //   console.error("Login failed:", error);
    // } finally {
    //   setIsLoading(false);
    // }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = validateForm();
    try {
      if (Object.keys(newErrors).length === 0) {
        await api
          .post("/login", formData)
          .then((res) => {
            console.log(res);
            setToken(res?.data?.result?.token);
            toast.success(res?.data?.message);

            const redirectUrl = sessionStorage.getItem("redirectAfterLogin");
            sessionStorage.removeItem("redirectAfterLogin"); 

            navigate(redirectUrl || "/user-profile");
          })
          .catch((error) => {
            toast.error(error?.response?.data?.message);
          });
      } else {
        setErrors(newErrors);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    } finally {
      setIsSubmitting(false);
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
                    {isSubmitting ? (
                      <Button px="px-3" type="submit">
                        Login
                      </Button>
                    ) : (
                      <Button px="px-3" type="submit">
                        Log In
                      </Button>
                    )}
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
