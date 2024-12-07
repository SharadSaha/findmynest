import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/slices/login";
import toast from "react-hot-toast";
import { postActions } from "../../store/slices/post";
import FMNTextBox from "../../components/generic/textBox";
import FMNButton from "../../components/generic/button";
import { useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const store = {
    name: useSelector((state) => state.login.name),
    username: useSelector((state) => state.login.username),
    email: useSelector((state) => state.login.email),
    password: useSelector((state) => state.post.password),
  };

  const handleSetLoginOrSignUp = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col space-y-4 w-1/3 justify-center ">
      <div className="text-xl font-semibold text-gray-700 text-center">
        {isLogin ? "Login to findmyNest" : "Create an account"}
      </div>

      {!isLogin && (
        <FMNTextBox
          value={store.name}
          setValue={(value) => dispatch(loginActions.setName(value))}
          label="Name"
        />
      )}

      <FMNTextBox
        required
        value={store.username}
        setValue={(value) => dispatch(loginActions.setUserName(value))}
        label="Username"
      />

      {!isLogin && (
        <FMNTextBox
          value={store.email}
          setValue={(value) => dispatch(loginActions.setEmail(value))}
          label="Email"
          required
        />
      )}

      <FMNTextBox
        value={store.password}
        setValue={(value) => dispatch(postActions.setPassword(value))}
        label="Password"
        required
      />
      <div className="flex justify-center w-full">
        <FMNButton
          className="w-1/2"
          onClick={() => toast.success("Form submitted")}
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
