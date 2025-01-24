import React from "react";
import FormLogin from "../../Fragments/FormLogin";

const Login = () => {
  return (
    <>
      <div className="max-w-full h-screen md:flex md:flex-1 mx-auto">
        <div className="bg-blue-500 w-full flex flex-col items-center">
          <div className="m-auto w-4/5">
            <h1 className="text-4xl text-slate-100 font-semibold">
              Welcome Back!
            </h1>
            <p className="mt-2 text-slate-100 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              maxime dicta esse qui rerum voluptates?
            </p>
          </div>
        </div>

        <div className="bg-white w-full flex flex-col items-center">
          <div className="m-auto w-4/5">
            <h1 className="text-4xl text-slate-700 font-semibold">Login</h1>
            <FormLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
