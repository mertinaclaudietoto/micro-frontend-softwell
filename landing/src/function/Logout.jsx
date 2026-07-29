import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return logout;
}

export default useLogout;