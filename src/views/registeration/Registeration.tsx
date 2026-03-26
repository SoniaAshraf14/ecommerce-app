import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import { useNavigate, Link } from "react-router-dom";

import Button from "../../sharedComponents/Button";
import TextInput from "../../sharedComponents/TextInput";
import type { RootState, AppDispatch } from "../../app/store";
import { registerUser } from "../../features/auth/login/loginService";
import { clearMessages } from "../../features/auth/login/loginSlice";
import { UserRole } from "../../../shared/types/enums";
import type { RegisterDto } from "../../../shared/types/auth";
import {validationSchema} from "../../validation/registerationValidation"

interface RegisterProps {
  className?: string;
}

export default function Register({ className = "" }: RegisterProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector(
    (state: RootState) => state.auth
  );

  const initialValues: RegisterDto = {
    name: "",
    email: "",
    password: "",
    role: UserRole.USER,
  };

 

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => dispatch(clearMessages()), 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

  const handleSubmit = (
    values: RegisterDto,
    helpers: FormikHelpers<RegisterDto>
  ) => {
    console.log("Submitting registration with values:", values);
    dispatch(registerUser(values));
    helpers.setSubmitting(false);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-[#020716] ${className}`}>
      <div className="w-full max-w-[480px] p-8 rounded-xl border border-[#ffffff15] bg-[#020b1d]">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-5">
            <TextInput
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your name"
            />

            <TextInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />

            <TextInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />

            <div>
              <label className="block mb-2 text-[#89939E]">Role</label>
              <select
                name="role"
                className="w-full rounded-lg p-3 bg-[#020716] text-white border border-[#ffffff26] focus:border-green-500 outline-none"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <Button
              text={loading ? "Registering..." : "Register"}
              type="submit"
              className="rounded-lg"
            />
          </Form>
        </Formik>

        {success && (
          <p className="text-green-500 text-center mt-4">{success}</p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        <div className="mt-6 text-center">
          <p className="text-[#89939E]">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}