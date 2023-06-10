import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateClass = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [updateClassData, setUpdateClassData] = useState({});

  //   const { data: updateClassData = [] } = useQuery({
  //     queryKey: ["updateClassData"],
  //     queryFn: async () => {
  //       const res = await axios.get(
  //         `http://localhost:5000/updateClassData/${id}`
  //       );
  //       return res.data;
  //     },
  //   });

  useEffect(() => {
    fetch(`http://localhost:5000/updateClassData/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateClassData(data);
      });
  }, [id]);

  //   console.log(updateClassData);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.price = Number(data.price);
    data.seats = Number(data.seats);
    console.log(data);

    fetch(`http://localhost:5000/class/update-class-data/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="hero min-h-screen py-16 bg-[#2F2F2F]">
      <div className="justify-self-center w-full max-w-xl px-2">
        <div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">
              Update Class Details
            </h1>
          </div>
          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            <label className="label">
              <span className="label-text text-white text-sm">Class name</span>
            </label>
            <input
              className="input input-bordered"
              defaultValue={updateClassData?.className}
              placeholder="Enter your class name"
              {...register("className", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Class Image</span>
            </label>
            <input
              type="url"
              className="input input-bordered"
              defaultValue={updateClassData?.classPhoto}
              placeholder="Enter your class image"
              {...register("classPhoto", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">
                Instructor Name
              </span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Enter your email"
              defaultValue={user?.displayName}
              readOnly
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
              defaultValue={user?.email}
              readOnly
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
              defaultValue={updateClassData?.seats}
              type="number"
              {...register("seats", { required: true })}
            />
            <label className="label">
              <span className="label-text text-white text-sm">Price</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Price"
              defaultValue={updateClassData?.price}
              type="number"
              {...register("price", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            <p className="text-orange-500">
              {errors.exampleRequired && <span>This field is required</span>}
            </p>

            <input className="btn mt-3" type="submit" value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateClass;
