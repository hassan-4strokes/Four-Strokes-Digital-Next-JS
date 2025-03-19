"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/Context";
import Sidebar from "@/utils/sidebar/Sidebar";
import Loader from "@/utils/loader/Loader";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateUserInfo = () => {
  const { username } = useParams();

  const router = useRouter();

    const { user, fullSidebar } = useAppContext();

    const [userDetails, setUserDetails] = useState({});
    const [name, setName] = useState("");
    const [userUsername, setUserUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdateUserInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.put(
          `/api/v1/users/update-user/${username}`,
          {
            name,
            userUsername,
            email,
            role
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success(response.data.message);
        setName("");
        setUserUsername("");
        setEmail("");
        setRole("");
        setLoading(false);
        router.push("/admin/users");
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      }
    };

    useEffect(() => {
      const fetchCategoryDetails = async () => {
        try {
          const response = await axios.get(
            `/api/v1/users/get-user-details/${username}`,
            {
              withCredentials: true,
            }
          );
          setUserDetails(response.data.user);
          setName(response.data.user.name);
          setUserUsername(response.data.user.username);
          setEmail(response.data.user.email);
          setRole(response.data.user.role);
        } catch (error) {
          console.error("Some Error Occured While Fetching Users", error);
        }
      };
  
      fetchCategoryDetails();
    }, []);

  return (
    <>
      <div className="update-user-info w-full h-screen flex flex-col lg:flex-row items-center bg-[#5DD1FF]">
        <Sidebar />
        <div
          className={`right h-full w-full ${
            fullSidebar && "lg:w-[80%]"
          } py-10 px-5 md:px-10 overflow-y-scroll`}
        >
          <div className="auth w-full h-full flex items-center justify-center">
            <div className="max-w-sm w-full form-area flex flex-col gap-5 rounded-lg bg-white shadow-md shadow-gray-400 p-6">
              <div className="flex flex-col gap-10">
                <div className="heading-area">
                  <h2 className="text-center text-xl font-semibold">
                    Update User Info
                  </h2>
                </div>
                <div className="input-area flex flex-col gap-5">
                  <input
                    className="outline-none text-sm sm:text-base border-b-[1px] border-[#5DD1FF] px-4 py-2"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                  />
                  <input
                    className="outline-none text-sm sm:text-base border-b-[1px] border-[#5DD1FF] px-4 py-2"
                    type="text"
                    onChange={(e) => setUserUsername(e.target.value)}
                    value={userUsername}
                    placeholder="Username"
                  />
                  <input
                    className="outline-none text-sm sm:text-base border-b-[1px] border-[#5DD1FF] px-4 py-2"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                  {/* {user && user.role == "Admin" && ( */}
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
                  {/* )} */}
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleUpdateUserInfo}
                    className={`flex items-center justify-center gap-3 text-sm sm:text-base outline-none cursor-pointer text-white border-[1px] border-[#5DD1FF] rounded-lg px-4 py-2 ${
                      loading ? "bg-[#5DD1FF]" : "bg-[#5DD1FF]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader size={6} />
                        <span>Updating...</span>
                      </>
                    ) : (
                      "Update Info"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUserInfo;
