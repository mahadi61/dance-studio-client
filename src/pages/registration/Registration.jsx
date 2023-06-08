import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
  const { singUpWithEmail, profileUpdate, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photoUrl;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    if (!(password === confirmPassword)) {
      setError("confirmPassword", {
        type: "custom",
        message: "password doesn't match",
      });
      return;
    }

    singUpWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          profileUpdate(name, photo)
            .then(() => {
              const user = { name: name, email: email };
              // save user info in database
              fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    Swal.fire("Register Successful!", "", "success");
                    navigate("/");
                  }
                });
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: `${error?.message}`,
                text: "Please try again!",
              });
            });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err?.message}`,
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
          navigate("/");
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
    <div className="hero min-h-screen pt-16 bg-[url('https://i.ibb.co/Jrz4JX5/loginbg1.png')]">
      <div className="justify-self-end w-full max-w-xl pe-8">
        <div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Register now!</h1>
          </div>
          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <label className="label">
              <span className="label-text text-white text-sm">Name</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your name"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-orange-500">This field is required</span>
            )}
            <label className="label">
              <span className="label-text text-white text-sm">Photo URL</span>
            </label>
            <input
              className="input input-bordered"
              type="url"
              placeholder="Enter your photo URL"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && (
              <span className="text-orange-500">This field is required</span>
            )}
            <label className="label">
              <span className="label-text text-white text-sm">Email</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-orange-500">This field is required</span>
            )}
            <label className="label">
              <span className="label-text text-white text-sm">Password</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="text-orange-500">This field is required</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="text-orange-500">
                must have 6 characters ,a capital letter and a special character
              </p>
            )}

            <label className="label">
              <span className="label-text text-white text-sm">
                Confirm Password
              </span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your password"
              type="password"
              {...register("confirmPassword", { required: true })}
            />

            {errors.confirmPassword &&
              (errors.confirmPassword.message ? (
                <span className="text-orange-500">
                  {errors.confirmPassword.message}
                </span>
              ) : (
                <span className="text-orange-500">This field is required</span>
              ))}

            <div className="flex w-full">
              <div className="grid flex-grow place-items-center">
                <input className="btn w-full" type="submit" value="Register" />
              </div>
              <div className="divider divider-horizontal text-white">OR</div>
              <div className="grid flex-grow place-items-center">
                <button
                  onClick={googleSinIn}
                  className="btn text-3xl w-full bg-white"
                >
                  <FaGoogle />
                </button>
              </div>
            </div>
          </form>
          <label className="label">
            <Link to="/login" className="text-white ">
              Already have an account? Login now!
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Registration;
