import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lotus|Login',
  description: 'Professional Mental Services',
}


const Login = () => {
  return (
    <>
    <LoginPage />
    </>
  );
};

export default Login;