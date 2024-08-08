import { useDispatch } from "react-redux";
import { clearStore } from "../store/actions/formActions";

const ErrorPageTemplate = ({
  firstText = "Oops, Something went wrong! Click",
  secondText = "to navigate back",
  navigateUrl = "/",
}) => {
  const dispatch = useDispatch();

  const handleClickHere = () => {
    dispatch(clearStore());
  };

  return (
    <div className="grid h-screen place-items-center bg-gradient-to-r from-slate-900 to-slate-700 p-5 pt-6">
      <p className="font-semiboldbold text-center text-5xl text-white">
        {firstText}{" "}
        <a
          className="cursor-pointer text-[#c4c4c4] underline"
          onClick={handleClickHere}
          href={navigateUrl}
        >
          here
        </a>{" "}
        {secondText}
      </p>
    </div>
  );
};

export default ErrorPageTemplate;
