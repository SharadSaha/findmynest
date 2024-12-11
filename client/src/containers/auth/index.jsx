import { useDispatch, useSelector } from "react-redux";
import { authFormActions } from "../../store/slices/auth-form";
import toast from "react-hot-toast";
import FMNTextBox from "../../components/generic/textBox";
import FMNButton from "../../components/generic/button";
import { useState } from "react";
import {
  useLoginUserMutation,
  useSignupUserMutation,
} from "../../services/login";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const [signupUser, { isLoading: signupLoading }] = useSignupUserMutation();

  const [error, setError] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const store = {
    name: useSelector((state) => state.authForm.name),
    username: useSelector((state) => state.authForm.username),
    email: useSelector((state) => state.authForm.email),
    password: useSelector((state) => state.authForm.password),
  };

  const handleSetLoginOrSignUp = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleChange = (name, value) => {
    switch (name) {
      case "name": {
        setError((prev) => ({
          ...prev,
          name: "",
        }));
        dispatch(authFormActions.setName(value));
        break;
      }
      case "username": {
        setError((prev) => ({
          ...prev,
          username: "",
        }));
        dispatch(authFormActions.setUserName(value));
        break;
      }
      case "email": {
        setError((prev) => ({
          ...prev,
          email: "",
        }));
        dispatch(authFormActions.setEmail(value));
        break;
      }
      case "password": {
        setError((prev) => ({
          ...prev,
          password: "",
        }));
        dispatch(authFormActions.setPassword(value));
        break;
      }
    }
  };

  const handleLoginOrSignup = () => {
    // login
    if (isLogin) {
      if (!store.username || !store.password) {
        setError((prev) => ({
          ...prev,
          username: store.username ? "" : "Username is required",
          password: store.password ? "" : "Password is required",
        }));
        return;
      }

      loginUser({
        username: store.username,
        password: store.password,
      })
        .unwrap()
        .then((res) => {
          dispatch(authFormActions.setUser(res.data.profile));
          toast.success("Login successful");
          navigate("/nests");
        })
        .catch(() => {
          toast.error("Invalid credentials");
        });
      return;
    }

    // signup
    if (!store.name || !store.username || !store.email || !store.password) {
      setError((prev) => ({
        ...prev,
        name: store.name ? "" : "Name is required",
        username: store.username ? "" : "Username is required",
        email: store.email ? "" : "Email is required",
        password: store.password ? "" : "Password is required",
      }));
      return;
    }

    // TODO : Uncomment later
    // const emailValidated = emailSchema.test(store.email);
    // const passwordValidated = passwordSchema.test(store.password);

    // if (!emailValidated || !passwordValidated) {
    //   setError((prev) => ({
    //     ...prev,
    //     email: emailValidated ? "" : "Invalid email address",
    //     password: passwordValidated
    //       ? ""
    //       : "Password must contain minimum 8 characters, one uppercase, one number and one special character",
    //   }));
    //   return;
    // }
    signupUser({
      name: store.name,
      username: store.username,
      email: store.email,
      password: store.password,
    })
      .unwrap()
      .then((res) => {
        dispatch(authFormActions.setUser(res.data.profile));
        toast.success("Sign up successful");
        navigate("/nests");
      })
      .catch(() => {
        toast.error("Sign up failed");
      });
  };

  return (
    <div className="flex flex-col space-y-4 w-1/3 justify-center ">
      <div className="text-xl font-semibold text-gray-700 text-center">
        {isLogin ? "Login to findmyNest" : "Create an account"}
      </div>

      {!isLogin && (
        <FMNTextBox
          value={store.name}
          setValue={(value) => handleChange("name", value)}
          label="Name"
          error={error.name}
        />
      )}

      <FMNTextBox
        required
        value={store.username}
        setValue={(value) => handleChange("username", value)}
        label="Username"
        error={error.username}
      />

      {!isLogin && (
        <FMNTextBox
          value={store.email}
          setValue={(value) => handleChange("email", value)}
          label="Email"
          required
          error={error.email}
        />
      )}

      <FMNTextBox
        value={store.password}
        setValue={(value) => handleChange("password", value)}
        label="Password"
        required
        type="password"
        error={error.password}
      />
      <div className="flex justify-center w-full">
        <FMNButton
          className="w-1/2"
          onClick={handleLoginOrSignup}
          isLoading={loginLoading || signupLoading}
        >
          Submit
        </FMNButton>
      </div>
      <div className="text-center mt-4">
        <span className="text-gray-400 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <a
            href="/login"
            className="text-gray-500 hover:underline"
            onClick={handleSetLoginOrSignUp}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Auth;
