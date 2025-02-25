"use client";

import { useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";
import { toast } from "react-toastify";
import axios from "axios";

const CreateNewUser = () => {
  const { fullSidebar } = useAppContext();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    if (!name || !username || !email || !password || !role) {
      toast.error("All Fields Are Required");
      setLoading(false);
      return;
    }

    if (name.length < 3) {
      toast.error("Name Should Have Atleast 3 Characters");
      setLoading(false);
      return;
    }

    if (username.length < 3) {
      toast.error("Username Should Have Atleast 3 Characters");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please Enter A Valid Email");
      setLoading(false);
      return;
    }
    
    if (password.length < 8) {
      toast.error("Password Should Have Atleast 8 Characters");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        "/api/v1/users/create-new-user",
        {
          name,
          username,
          email,
          password,
          role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User Created Successfully");
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setRole("");
      setLoading(false);
    } catch (error) {
      console.error("Some Error Occured While Creating New User", error);
      toast.error("User Creation Failed");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="create-new w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-sm w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-lg sm:text-xl font-semibold">
                  Create New User
                </h2>
                <input
                  className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                />
                <input
                  className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="Username"
                />
                <input
                  className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
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
                <select
                  name="role"
                  id="role"
                  className="text-sm sm:text-base outline-none border-b-[1px] border-[#5DD1FF] px-4 py-2"
                  type="text"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                  placeholder="Role"
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                </select>
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleSignUp}
                  className={`flex items-center justify-center gap-3 text-sm sm:text-base outline-none cursor-pointer text-white border-[1px] border-[#5DD1FF] rounded-lg px-4 py-2 ${
                    loading ? "bg-[#5DD1FF]" : "bg-[#5DD1FF]"
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader size={6} />
                      <span>Creating...</span>
                    </>
                  ) : (
                    "Create New User"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewUser;
