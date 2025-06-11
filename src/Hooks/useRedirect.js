import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash && location.hash !== "#") {
      const path = location.hash.slice(1); // Remove the '#' symbol
      navigate(path, { replace: true });
    }
  }, [location, navigate]);
};

export default useRedirect;
