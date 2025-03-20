import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../util/api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (email.trim() === "") {
      setMessage("Email field empty...");
      return;
    } else if (password.trim() === "") {
      setMessage("Password field empty...");
      return;
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Register successful");
        setTimeout(() => {
          navigate("/budi/");
        }, 4000);
      } catch (error) {
        console.log(error);
        setMessage("Sign-up faild. Please try again.");
      }
    }
  };

  return (
    <div className="bg-Pink">
      <div className="flex justify-center items-center flex-col gap-10 pt-[30px] px-[24px]">
        <p className="text-Rojo font-Recoleta text-5xl text-center">
          Create an account
        </p>
        <div
          onSubmit={handleSignUp}
          className="flex flex-col gap-2 justify-center items-center"
        >
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
              onClick={handleSignUp}
            >
              Register
            </button>
          </div>
          {message && <p>{message}</p>}
        </div>
        <div>
          <p>
            have an account?{" "}
            <Link to="/budi/login" className="font-Recoleta text-Rojo">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
