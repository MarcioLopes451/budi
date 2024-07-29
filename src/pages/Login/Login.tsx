import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="bg-Pink">
      <div className="flex justify-center items-center flex-col gap-10 pt-[30px] px-[24px]">
        <p className="text-Rojo font-Recoleta text-5xl">Login</p>
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
            type="text"
            className="w-[300px] rounded-xl bg-Thistle py-2 border-black border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-Rojo rounded-xl py-2 px-4 text-white font-Recoleta text-2xl">
            Login
          </button>
        </div>
        <div>
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
