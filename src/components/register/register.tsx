import React, { useState } from "react";
import { IUser, UserInputs } from "../../types/user";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


const RegisterComponent = () => {
  const [messages, setMessages] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UserInputs>();

  //const password = watch("password");

  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    // if (data.password !== data.confirmPassword) {
    //   setMessages("Mật khẩu không khớp!");
    //   return;
    // }

    try {
      const response = await axios.post("http://localhost:3000/user/register", data);
      if (response.status === 200) {
        toast.success("Đăng ký thành công!");
        setTimeout(() => {

          navigate("/login"); // Chuyển hướng sau khi đăng ký thành công
        },1000)
      }
    } catch (error) {
      let errorMessage = "Đã xảy ra lỗi, vui lòng thử lại!";
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          errorMessage = "API hiện đang bị lỗi";
        } else if (error.message === "Network Error") {
          errorMessage = "Vui lòng kiểm tra lại kết nối mạng!";
        } else if (error.response) {
          errorMessage = error.response.data.message;
        }
      }
      setMessages(errorMessage);
    }
  };
  return (
    <div className="h-full bg-gradient-to-tl from-[#000000] to-red-700 w-full py-16 px-4">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
        <img src="../src/images/Logo.png" alt="" />
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Register to your account
          </p>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <svg
              width={19}
              height={20}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <div>
            <label className="text-sm font-medium leading-none text-gray-800">
              Name
            </label>
            <input
              role="input"
              type="text"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              {...register("username", { required: "Vui lòng nhập tên!!!" })}
            />
            {errors.username && (
              <small className="text-red-500">{errors.username.message}</small>
            )}
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium leading-none text-gray-800">
              Email
            </label>
            <input
              aria-label="enter email adress"
              role="input"
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              {...register("email", { required: "Vui lòng nhập email!!!" })}
            />
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>
          <div className="mt-6 w-full">
            <label className="text-sm font-medium leading-none text-gray-800">
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                type={showPassword ? "text" : "password"}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("password", { required: "Vui lòng nhập mật khẩu!!!" })}
              />
              <div
                className="absolute right-0 mt-2 mr-3 cursor-pointer"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <svg
                    width={16}
                    height={16}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.333 8c0 2.667 2.667 6 6.667 6s6.667-3.333 6.667-6-2.667-6-6.667-6S1.333 5.333 1.333 8z"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10.667A2.667 2.667 0 108 5.333a2.667 2.667 0 000 5.334z"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width={16}
                    height={16}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.333 8c0 2.667 2.667 6 6.667 6s6.667-3.333 6.667-6-2.667-6-6.667-6S1.333 5.333 1.333 8z"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10.667A2.667 2.667 0 108 5.333a2.667 2.667 0 000 5.334z"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 2l12 12"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            {errors.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
          </div>

          <div className="text-center mx-auto mt-2 text-2xl">
            {messages && (
              <small className="text-red-500 mt-2">{messages}</small>
            )}
          </div>
          <div className="mt-8">
            <button
              role="button"
              aria-label="create my account"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-700 border rounded hover:bg-red-600 py-4 w-full"
              type="submit"
            >
              Create my account
            </button>
          </div>
          <div className="mt-8 text-base font-semibold leading-none text-gray-500">
            Already have an account?{" "}
            <span
              role="link"
              aria-label="Sign up here"
              className="text-base font-semibold leading-none underline text-gray-800 cursor-pointer"
            >
              {" "}
              Login here
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
