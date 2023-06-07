import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
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
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
          </div>
          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <label className="label">
              <span className="label-text text-white text-xl">Email</span>
            </label>

            <input className="input input-bordered" {...register("example")} />
            <label className="label">
              <span className="label-text text-white text-xl">Password</span>
            </label>

            <input
              className="input input-bordered"
              {...register("exampleRequired", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            <p className="text-orange-500">
              {errors.exampleRequired && <span>This field is required</span>}
            </p>

            <input className="btn mt-4" type="submit" value="Login" />
          </form>

          <label className="label">
            <Link to="/registration" className="text-white text-xl">
              Already have an account? Register now!
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
