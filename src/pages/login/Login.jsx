import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [typeStatus, setTypeStatus] = useState(false);
  const { signInWithEmail, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire("SingIn Successful!", "", "success");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error?.message}`,
          text: "Please try again!",
        });
      });
  };

  const googleSinIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire("SingIn Successful!", "", "success");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: `${error?.message}`,
          text: "Please try again!",
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/Jrz4JX5/loginbg1.png')]">
      <div className="justify-self-end w-full max-w-xl pe-8">
        <div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
          </div>
          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <label className="label">
              <span className="label-text text-white text-xl">Email</span>
            </label>

            <input
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-orange-500">This field is required</span>
            )}
            <label className="label">
              <span className="label-text text-white text-xl">Password</span>
            </label>
            <div className="join ">
              <input
                defaultValue="12345A%"
                className="input input-bordered join-item w-full"
                type={typeStatus ? "text" : "password"}
                {...register("password", { required: true })}
              />

              <span
                onClick={() => setTypeStatus(!typeStatus)}
                className="btn join-item"
              >
                <FaEye />
              </span>
            </div>

            {errors.password && (
              <span className="text-orange-500">This field is required</span>
            )}

            <input className="btn mt-4" type="submit" value="Login" />
          </form>

          <label className="label">
            <Link to="/registration" className="text-white text-xl">
              Do not have an account? Register now!
            </Link>
          </label>
          <div className="divider">or</div>
          <p className="my-3 font-medium text-center text-white">SignUp With</p>
          <div className="grid flex-grow place-items-center">
            <button
              onClick={googleSinIn}
              className="btn text-3xl w-full bg-white"
            >
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
