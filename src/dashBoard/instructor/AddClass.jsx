import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero min-h-screen py-16 bg-sky-700">
      <div className="justify-self-center w-full max-w-xl px-2">
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
              {...register("className", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Class Image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-info"
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
              {...register("instructorName", { required: true })}
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
              {...register("instructorEmail", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">
                Available seats
              </span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Available seats"
              type="number"
              {...register("seats", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Price</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Price"
              type="number"
              {...register("price", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            <p className="text-orange-500">
              {errors.exampleRequired && <span>This field is required</span>}
            </p>

            <input className="btn mt-3" type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
