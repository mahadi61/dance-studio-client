import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../../assets/animation/95431-oops-internet-error-train.json";

const ErrorPage = () => {
  const { status, error, statusText } = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl">
        <Lottie
          className="-m-3"
          animationData={errorAnimation}
          loop={true}
        ></Lottie>
      </div>
      <div className="pb-14 text-center">
        <h2 className="text-4xl my-2 font-semibold text-red-600">
          Error: {status} {statusText}
        </h2>
        <h4>{error?.message}</h4>
        <Link to="/" className="btn bg-orange-400 mt-2 border-0">
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
