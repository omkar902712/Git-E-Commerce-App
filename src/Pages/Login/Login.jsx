import React, { useContext, useRef, useState } from "react";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

// auth - AuthContext
import { AuthContext } from "../../auth/AuthContext";

// Login validation schema
const loginSchema = z
  .object({
    emailOrPhone: z
      .string()
      .min(1, "Email or Phone is required"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })

  // Check email or phone format
  .refine(
    (data) => {
      const value = data.emailOrPhone;

      const isEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      const isPhone =
        /^\d{10}$/.test(value);

      return isEmail || isPhone;
    },

    {
      message: "Enter valid email or 10 digit phone number",
      path: ["emailOrPhone"],
    }
  );

const Login = () => {
  const navigate = useNavigate();

  // Get login function from AuthContext
  const { login } = useContext(AuthContext);

  // Get input values using useRef
  const emailPhoneRef = useRef();
  const passwordRef = useRef();

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Form submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Login form data
    const loginData = {
      emailOrPhone: emailPhoneRef.current.value,
      password: passwordRef.current.value,
    };

    // Zod validation
    const result = loginSchema.safeParse(loginData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // Get registered user data from LocalStorage
    const registeredUser = JSON.parse(
      localStorage.getItem("userData")
    );

    if (!registeredUser) {
      alert("Please register first");
      return;
    }

    // Compare login data with registered data
    if (
      (
        loginData.emailOrPhone === registeredUser.email ||
        loginData.emailOrPhone === registeredUser.phone
      )
      &&
      loginData.password === registeredUser.password
    ) {

      // user login object
      const user = {
        name: registeredUser.fullName,
        email: registeredUser.email,
        phone: registeredUser.phone
      };

      // save login user in AuthContext
      login(user);

      alert("Login Successfull");
      navigate("/");
    }
    else {
      alert("Invalid Email/Phone or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="stars"></div>

      <form onSubmit={handleSubmit}>
        <h1 className="title"> Login </h1>

        {/* Input Email / Phone, And Error */}
        <div className="form-group">
          <input type="text"
            placeholder="Enter Email Or Phone"
            ref={emailPhoneRef} />

          <div className="errorStyle">
            {errors.emailOrPhone && (
              <small style={{ color: "red" }}>
                {errors.emailOrPhone}
              </small>
            )}
          </div>

        </div>

        {/* Input Password, And Error */}
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter Password"
            ref={passwordRef}
          />

          <div className="errorStyle">
            {errors.password && (
              <small style={{ color: "red" }}>
                {errors.password}
              </small>
            )}
          </div>
        </div>

        <button type="submit"> Login </button>

        <br /> <br />

        <div className="row">
          <h4> Don't Have Account? &nbsp;
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Register
            </Link>
          </h4>
        </div>

      </form>
    </div>
  );
};

export default Login;