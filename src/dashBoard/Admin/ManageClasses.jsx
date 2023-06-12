import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [feedbackId, setFeedbackId] = useState("");
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await axios.get(
        `https://dance-studio-server-seven.vercel.app/admin/allClasses`
      );
      return res.data;
    },
  });

  const handleApproved = (id) => {
    fetch(
      `https://dance-studio-server-seven.vercel.app/approved-classes/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Approved Successful!", "", "success");
          refetch();
        }
      });
  };

  const handleDenied = (id) => {
    fetch(`https://dance-studio-server-seven.vercel.app/denied-classes/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Denied Successful!", "", "success");
          refetch();
        }
      });
  };

  const handleModalOpen = (id) => {
    setFeedbackId(id);
    window.my_modal_2.showModal();
  };

  const handleFeedback = (event) => {
    event.preventDefault();
    const message = event.target.feedback.value;

    const feedback = {
      id: feedbackId,
      message,
    };

    fetch(`https://dance-studio-server-seven.vercel.app/feedback`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          event.target.reset();
          Swal.fire("Feedback Send Successful!", "", "success");
        }
      });
  };

  return (
    <div className="overflow-x-auto bg-[#828382] h-full text-white">
      <h1 className="text-center text-3xl font-bold my-6">Manage Classes</h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-white">S/L</th>
            <th className="text-white">Class Photo</th>
            <th className="text-white">Class Information</th>
            <th className="text-white">Available seats</th>
            <th className="text-white">Price</th>
            <th className="text-white">Status</th>
            <th className="text-white">Approved</th>
            <th className="text-white">Denied</th>
            <th className="text-white">Feedback</th>
            <th className="text-white"></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allClass.map((cla, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-square w-12 h-12">
                    <img src={cla.classPhoto} alt="Class image" />
                  </div>
                </div>
              </td>

              <td>
                <div>
                  <div className="">
                    <span className="font-bold">Class:</span> {cla?.className}
                  </div>
                  <div className="">
                    <span className="font-bold">Instructor:</span>{" "}
                    {cla?.instructorName}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Email:</span>{" "}
                    {cla?.instructorEmail}
                  </div>
                </div>
              </td>
              <td>{cla?.seats}</td>
              <td>{cla?.price}</td>
              <td>{cla?.status}</td>
              <td>
                <button
                  onClick={() => handleApproved(cla._id)}
                  disabled={
                    (cla?.status == "denied" || cla?.status == "approved") &&
                    true
                  }
                  className="btn btn-xs sm:btn-sm md:btn-md btn-info"
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDenied(cla._id)}
                  disabled={
                    (cla?.status == "denied" || cla?.status == "approved") &&
                    true
                  }
                  className="btn btn-xs sm:btn-sm md:btn-md btn-info"
                >
                  Denied
                </button>
              </td>
              <td>
                <Link
                  onClick={() => handleModalOpen(cla?._id)}
                  className="btn btn-xs sm:btn-sm md:btn-md btn-info"
                >
                  Send Feedback
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
      {/* Open the modal for feedback from admin */}

      <dialog id="my_modal_2" className="modal">
        <form
          onSubmit={handleFeedback}
          method="dialog"
          className="modal-box flex flex-col gap-2"
        >
          <textarea
            className="p-2"
            name="feedback"
            id=""
            cols="50"
            rows="5"
          ></textarea>

          <input
            type="submit"
            className="btn btn-xs sm:btn-sm md:btn-md btn-info"
            value={"Send Feedback"}
          />
        </form>
        <form method="dialog" className="modal-bottom">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
