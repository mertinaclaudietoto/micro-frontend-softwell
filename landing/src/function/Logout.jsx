import { useNavigate } from "react-router-dom";

function useLogout() {
    console.log("djeijdejdiejdie");
  const navigate = useNavigate();
  const logout = () => {
    // supprimer les informations de session
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("access");
   
    navigate("/");
  };

  return logout;
}

export default useLogout;