import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import "./Dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logoutUser();
        navigate("/login");
    };
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};
export default Dashboard;