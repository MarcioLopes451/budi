import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../util/api/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (email.trim() === "") {
      setMessage("Email field empty...");
    } else if (password.trim() === "") {
      setMessage("Password field empty...");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login successful");
        setTimeout(() => {
          navigate("/budi/");
        }, 3000);
      } catch (error) {
        setMessage("login details not found");
        console.log(error);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-Pink">
      <div className="flex justify-center items-center flex-col gap-10 pt-[30px] px-[24px]">
        <p className="text-Rojo font-Recoleta text-5xl">Login</p>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <label className="text-Rojo font-Recoleta text-2xl">Email</label>
            <input
              type="text"
              className="w-[300px] rounded-xl bg-Thistle py-2 border-black border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <label className="text-Rojo font-Recoleta text-2xl">Password</label>
            <input
              type="password"
              className="w-[300px] rounded-xl bg-Thistle py-2 border-black border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-Rojo rounded-xl py-2 px-4 text-white font-Recoleta text-2xl"
              onClick={handleSignIn}
            >
              Login
            </button>
          </div>
        </div>
        {message && <p>{message}</p>}
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-Rojo rounded-xl py-2 px-4 text-white font-Recoleta text-2xl"
            onClick={handleGoogleSignIn}
          >
            Login with google
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/budi/register" className="font-Recoleta text-Rojo">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
