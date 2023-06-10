import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: allClass = [], refetch } = useQuery(["allClass"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });

  const { data: allUsers = [] } = useQuery(["allUsers"], async () => {
    const res = await fetch("http://localhost:5000/allUsers");
    return res.json();
  });

  const loggedInUser = allUsers.find((u) => u?.email == user?.email);

  // for button disable
  // const { data: selectedClass = [] } = useQuery(["selectedClass"], async () => {
  //   const res = await fetch(
  //     `http://localhost:5000/my-selected-class/${user?.email}`
  //   );
  //   return res.json();
  // });

  const handleEnroll = (id) => {
    if (!user) {
      Swal.fire("You need to login first!", "", "Error");
      navigate("/login");
      return;
    }

    const enrollData = { classId: id, enrolledBy: user.email };

    fetch(`http://localhost:5000/enroll-class`, {
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
              className={`card-compact ${
                cla?.seats == 0 ? "bg-red-500" : "bg-base-100"
              } `}
            >
              <figure>
                <img
                  className="h-[200px] w-[100%]"
                  src={cla.classPhoto}
                  alt="dance"
                />
              </figure>
              <div className="card-body ">
                <h2 className="text-center text-2xl font-bold">
                  {cla?.className}
                </h2>
                <div className="card-actions items-center justify-between">
                  <p className="text-xl">Price: ${cla?.price}</p>
                  <p className="text-xl">Available Seats: {cla?.seats}</p>
                  <button
                    // disabled={
                    //   selectedClass.find(
                    //     (singleClass) => singleClass._id == cla?._id
                    //   )
                    //     ? true
                    //     : false
                    // }
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
          ))}

          {/* card 1 */}

          {/* card end */}
        </div>
      </div>
    </div>
  );
};

export default Classes;
