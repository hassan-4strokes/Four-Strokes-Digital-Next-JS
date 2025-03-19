"use client";

import { useEffect, useState } from "react";
import Loader from "@/utils/loader/Loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";

const Auth = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [routePush, setRoutePush] = useState(false);

  // useEffect(() => {
  //   if (session) {
  //     router.push("/admin");
  //   }
  // }, [session, router]);

  const handleLogin = async () => {
    setLoading(true);
    if (!username || !password) {
      toast.error("All Fields Are Required");
      setLoading(false);
      return;
    }

    if (username.length < 3) {
      toast.error("Username Should Have Atleast 3 Characters");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      toast.error("Password Should Have Atleast 8 Characters");
      setLoading(false);
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    })
      .then((res) => {
        toast.success("User Logged In Successfully");
        router.push("/admin");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

    if (res?.error) {
      setLoading(false);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="section w-full h-screen flex items-center justify-center py-10 px-5 md:px-10 bg-[#5DD1FF]">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
          <div className="flex flex-col gap-5">
            <h2 className="text-center text-lg sm:text-xl font-semibold">
              Sign In
            </h2>
            <input
              className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
            />
            <div className="w-full flex items-center justify-between border-b-[1px] border-[#5DD1FF]">
              <input
                className="w-full text-sm sm:text-base outline-none px-4 py-2"
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
              {show ? (
                <i
                  onClick={() => setShow(false)}
                  className="fa-regular fa-eye cursor-pointer text-[#5DD1FF]"
                ></i>
              ) : (
                <i
                  onClick={() => setShow(true)}
                  className="fa-regular fa-eye-slash cursor-pointer text-[#5DD1FF]"
                ></i>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              onClick={handleLogin}
              className={`flex items-center justify-center gap-3 text-sm sm:text-base outline-none cursor-pointer text-white border-[1px] border-[#5DD1FF] rounded-lg px-4 py-2 ${
                loading ? "bg-[#5DD1FF]" : "bg-[#5DD1FF]"
              }`}
            >
              {loading ? (
                <>
                  <Loader size={6} />
                  <span>Logging in...</span>
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
