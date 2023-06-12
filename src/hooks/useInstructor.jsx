import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useInstructor = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructorLoading", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/allUsers/instructor/${user?.email}`
      );

      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
