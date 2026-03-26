import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import { useNavigate, Link } from "react-router-dom";

import Button from "../../sharedComponents/Button";
import TextInput from "../../sharedComponents/TextInput";
import { clearMessages } from "../../features/auth/login/loginSlice";
import { loginUser } from "../../features/auth/login/loginService";
import type { RootState, AppDispatch } from "../../app/store";
import type { LoginDto } from "../../../shared/types/auth";
import { LoginSchema } from "../../validation/loginValidation";

export default function LogIn() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, success, error, token } = useSelector(
    (state: RootState) => state.auth
  );

  const initialValues: LoginDto = { email: "", password: "" };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => dispatch(clearMessages()), 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  useEffect(() => {
  console.log("token:", token);
  console.log("success:", success);
}, [token, success]);

 useEffect(() => {
  if (token) {
    localStorage.setItem("token", token)
    navigate("/");
  }
}, [token]);

const handleSubmit = (
  values: LoginDto,
  helpers: FormikHelpers<LoginDto>
) => {
  dispatch(loginUser(values));
  helpers.setSubmitting(false);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020716]">
      <div className="w-full max-w-[480px] p-8 rounded-xl border border-[#ffffff15] bg-[#020b1d]">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-5">
            <TextInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter email"
            />

            <TextInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter password"
            />

            {/* <Link
              to="/forgot-password"
              className="text-sm text-green-400 text-right"
            >
              Forgot Password?
            </Link> */}

            <Button
              text={loading ? "Logging in..." : "Login"}
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
            Don’t have an account?{" "}
            <Link to="/registeration" className="text-white font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}