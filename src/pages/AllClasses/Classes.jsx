import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: allClass = [], refetch } = useQuery(["allClass"], async () => {
    const res = await axios.get(
      "https://dance-studio-server-seven.vercel.app/classes"
    );
    return res.data;
  });

  const { data: allUsers = [] } = useQuery(["allUsers"], async () => {
    const res = await axios.get(
      "https://dance-studio-server-seven.vercel.app/allUsers"
    );
    return res.data;
  });

  const loggedInUser = allUsers.find((u) => u?.email == user?.email);

  const handleEnroll = (id) => {
    if (!user) {
      Swal.fire("You need to login first!", "", "Error");
      navigate("/login");
      return;
    }

    const enrollData = { classId: id, enrolledBy: user.email };

    fetch(`https://dance-studio-server-seven.vercel.app/enroll-class`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(enrollData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Enrolled Successful!", "", "success");
          refetch();
        }
      });
  };

  return (
    <div className="instructor-bg py-8">
      <div className="w-11/12 mx-auto  pt-14">
        <h1 className="my-4 text-4xl text-center text-white">All Classes</h1>
        <div className="grid lg:grid-cols-4 gap-3">
          {/* show all class approved by admin */}
          {allClass.map((cla, i) => (
            <div
              key={i}
              className={`rounded-lg card-compact  flex flex-col justify-between text-white h-[350px] ${
                cla?.seats == 0 ? "bg-red-500" : "bg-[#ff81c8aa]"
              } `}
            >
              <figure>
                <img
                  className="h-[200px] w-[100%] rounded-lg"
                  src={cla.classPhoto}
                  alt="dance"
                />
              </figure>
              <div className="card-body ">
                <h2 className="text-xl font-bold">{cla?.className}</h2>
                <div className="card-actions flex-col">
                  <div className="flex justify-between w-full">
                    <p className="font-bold">Price: ${cla?.price}</p>
                    <p className="">Available Seats: {cla?.seats}</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="">Instructor: {cla?.instructorName}</p>
                    <button
                      disabled={
                        (cla?.seats == 0 && true) ||
                        (loggedInUser?.role == "admin" && true) ||
                        (loggedInUser?.role == "instructor" && true)
                      }
                      onClick={() => handleEnroll(cla?._id)}
                      className="btn btn-primary btn-sm"
                    >
                      Enroll Class
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
