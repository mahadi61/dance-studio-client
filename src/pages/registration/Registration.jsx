import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/Jrz4JX5/loginbg1.png')]">
      <div className="justify-self-end w-full max-w-xl pe-8">
        <div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Register now!</h1>
          </div>
          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <label className="label">
              <span className="label-text text-white text-sm">Name</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your name"
              {...register("example", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Photo URL</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your photo URL"
              {...register("example", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Email</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your email"
              type="email"
              {...register("example", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Password</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your password"
              type="password"
              {...register("exampleRequired", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">
                Confirm Password
              </span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your password"
              type="password"
              {...register("exampleRequired", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            <p className="text-orange-500">
              {errors.exampleRequired && <span>This field is required</span>}
            </p>

            <input className="btn mt-3" type="submit" value="Register" />
          </form>

          <label className="label">
            <Link to="/login" className="text-white text-xl">
              Already have an account? Login now!
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Registration;
