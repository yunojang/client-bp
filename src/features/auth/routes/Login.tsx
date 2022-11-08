import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../components";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/app");
        // navigate(0);
    };

    return (
        <AuthLayout title="Login">
            <LoginForm onSuccess={login} />
        </AuthLayout>
    );
};

export default Login;
