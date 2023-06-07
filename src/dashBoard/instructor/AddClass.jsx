import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero min-h-screen pt-16 bg-lime-950">
      <div className="justify-self-center w-full max-w-xl pe-8">
        <div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Add A Class</h1>
          </div>
          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <label className="label">
              <span className="label-text text-white text-sm">Class name</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your class name"
              {...register("example", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Class Image</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your class image"
              {...register("example", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">
                Instructor Name
              </span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your email"
              type="text"
              {...register("example", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">
                Instructor Email
              </span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your password"
              type="email"
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

export default AddClass;
