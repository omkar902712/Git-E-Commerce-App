import React, { useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import "./Register.css";

const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Full name must be at least 3 characters"),

    gender: z
      .string()
      .min(1, "Please select gender"),

    phone: z
      .string()
      .regex(/^\d{10}$/, "Phone number must be 10 digits"),

    email: z
      .email("Invalid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    console.log("Valid Data:", formData);
    alert("Registration Successful");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Register</h1>

        <form onSubmit={handleSubmit} className="register-form">

          {/* Full Name */}
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <div className="errorStyle">
              {errors.fullName && (
                <small style={{ color: "red" }}>
                  {errors.fullName}
                </small>
              )}
            </div>

          </div>

          {/* Gender */}
          <div className="form-group">
            <div className="gender-box">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>

            <div className="errorStyle">
              {errors.gender && (
                <small style={{ color: "red" }}>
                  {errors.gender}
                </small>
              )}
            </div>

          </div>

          {/* Phone */}
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <div className="errorStyle">
              {errors.phone && (
                <small style={{ color: "red" }}>
                  {errors.phone}
                </small>
              )}
            </div>

          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="errorStyle">
              {errors.email && (
                <small style={{ color: "red" }}>
                  {errors.email}
                </small>
              )}
            </div>

          </div>

          {/* Password */}
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="errorStyle">
              {errors.password && (
                <small style={{ color: "red" }}>
                  {errors.password}
                </small>
              )}
            </div>

          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="errorStyle">
            {errors.confirmPassword && (
              <small style={{ color: "red" }}>
                {errors.confirmPassword}
              </small>
            )}
            </div>

          </div>

          {/* Button - Submit */}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <br />

        {/* Link - Go To Home Page, Login */}
        <div className="row">
          <div className="col-sm-4">
            <Link to="/">
              <h5>Go To Home Page</h5>
            </Link>
          </div>

          <div className="col-sm-6"></div>

          <div className="col-sm-2">
            <Link to="/login">
              <h5>Login</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;