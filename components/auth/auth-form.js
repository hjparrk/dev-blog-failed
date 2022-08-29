import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
const axios = require("axios");

// const createUser = async (username, password) => {
//   const user = { username, password };

//   if (
//     !username ||
//     username.trim().length < 5 ||
//     !password ||
//     password.trim().length < 8
//   ) {
//     res.status(422).json({ message: "Invalid inputs" });
//     return;
//   }

//   const response = await axios.post("/api/auth/signup", user);

//   if (response.status !== 201) {
//     throw new Error(response.message || "Something went wrong");
//   }

//   const data = response.data;

//   return data;
// };

const AuthForm = () => {
  const usernameInputRef = useRef();
  const passwordInputref = useRef();

  // const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputref.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      username: enteredUsername,
      password: enteredPassword,
    });
    router.replace("/admin");

    // if (isLogin) {
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     username: enteredUsername,
    //     password: enteredPassword,
    //   });
    //   router.replace("/admin");
    // } else {
    //   try {
    //     const response = await createUser(enteredUsername, enteredPassword);
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <section>
      {/* <h1 className="text-3xl">{isLogin ? "Log in" : "Sign up"}</h1> */}
      <form onSubmit={submitHandler}>
        <div className="m-5">
          <label htmlFor="username" className="m-5">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            placeholder="type your username"
            ref={usernameInputRef}
          ></input>
        </div>
        <div className="m-5">
          <label htmlFor="password" className="m-5">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            placeholder="type your password"
            ref={passwordInputref}
          ></input>
        </div>
        <div className="m-5">
          {/* <button type="submit" className="m-5">
            {isLogin ? "Log in" : "Sign up"}
          </button> */}
          <button type="submit" className="m-5">
            Log in
          </button>
        </div>
        {/* <div className="m-5">
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Already have an account?"}
          </button>
        </div> */}
      </form>
    </section>
  );
};

export default AuthForm;
