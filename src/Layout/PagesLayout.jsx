import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PagesLayout = () => {
  const { userAuthenticated } = useSelector((state) => state.formReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuthenticated) {
      navigate("/posts");
    } else {
      navigate("/");
    }
  }, [userAuthenticated]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 p-5">
      <Outlet />
    </div>
  );
};

export default PagesLayout;
