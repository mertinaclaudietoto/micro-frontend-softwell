import { useNavigate } from "react-router-dom";
const LogOut =()=>{
    const navigate = useNavigate();
    localStorage.removeItem("token");
    navigate("/login");
}
export default LogOut;