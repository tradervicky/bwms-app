// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
import { TiUserAddOutline } from "react-icons/ti";
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const AddUsers = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-[#b5c2ca] min-h-screen">
      <div className="flex flex-col justify-between  w-1/6 p-4 bg-[#f0f3f4] m-5 mr-2 rounded-lg">
        <div className="mb-4">
          <div className="mb-8 flex flex-col items-center ">
            <img
              src="/images/bwmslogo.svg"
              alt="logo2"
              className="w-36 h-36 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p onClick={()=>navigate('/dashboard')} className="text-gray-700 flex gap-8 items-center  text-lg font-medium cursor-pointer py-2 pl-2 hover:bg-blue-950  hover:text-white hover:rounded-2xl duration-300 ease-in-out">
              <MdOutlineSpaceDashboard size={28} /> Dashboard
            </p>
            <p className="text-gray-700 flex gap-8 items-center text-lg font-medium cursor-pointer py-2 pl-2 hover:bg-blue-950  hover:text-white hover:rounded-2xl duration-300 ease-in-out">
              <TiUserAddOutline size={28} /> Users
            </p>
            <p className="text-gray-700 flex gap-8 items-center text-lg font-medium cursor-pointer py-2 pl-2 hover:bg-blue-950  hover:text-white hover:rounded-2xl duration-300 ease-in-out">
              <GrUserSettings size={28} />
              Role
            </p>
          </div>
        </div>

        <div className="flex flex-col  gap-5 mb-4 ">
          <div className="flex flex-col gap-5">
            <p className="text-gray-700 justify-center flex items-center gap-4">
              John Doe
            </p>
            <p className="text-gray-700  flex justify-center items-center gap-4">
              john@email.in
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-950 flex items-center justify-center gap-5 text-white px-4 py-2 w-[90%] rounded-2xl hover:bg-white hover:border hover:border-black hover:text-black ease-in-out duration-300 "
            >
              <IoIosLogOut size={32} /> Logout
            </button>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-3 ml-2">
        <div className=" flex items-center h-20 bg-[#f0f3f4] mb-4 border mt-2 rounded-lg ">
          {/* <button className="bg-blue-950 flex items-center justify-center gap-2 text-white px-4 py-2 my-4 mx-4 rounded-2xl hover:bg-white hover:border hover:border-black hover:text-black ease-in-out duration-300 "><MdOutlineAddBox size={24}/>Add Adv.</button> */}
          <p className=" mx-auto text-3xl text-blue-950 font-bold p-shadow ">
            Register New User
          </p>
        </div>
        {/* <div className=" h-[80vh] bg-white grid grid-cols-2 p-4">
            <div className=" h-12 border border-red-500">
            <select name="" id="" className="">
                <option value="">select section</option>
                <option value="it">IT - Section</option>
                <option value="education">Education</option>
                <option value="others">Others</option>
            </select>
            </div>
            <div className=" h-12">
            <input type="text" placeholder="Enter Officers Name" className="w-11/12 border h-full rounded-lg px-4 py-2"/>
            </div>

            <div className=" h-12">
            <input type="email" placeholder="Enter Officers email" className="w-11/12 border h-full rounded-lg px-4 py-2"/>
            </div>

            <div className=" h-12">
            <input type="text" placeholder="Enter Officers number" className="w-11/12 border h-full rounded-lg px-4 py-2"/>
            </div>

            <div className=" h-12">
            <input type="text" placeholder="BPSC Employee ID" className="w-11/12 border h-full rounded-lg px-4 py-2"/>
            </div>

            


            
            
            
            <div>
            <select name="" id="">
                <option value="">select Role</option>
                <option value="it">Super Admin</option>
                <option value="education">Admin</option>
            </select>
            </div>
            <div className=" h-12">
            <input type="text" placeholder="BPSC Employee Designation" className="w-11/12 border h-full rounded-lg px-4 py-2"/>
            </div>
            

        </div> */}
        <div className="grid grid-cols-2  h-[82vh] bg-white rounded-lg p-10">
          <div className=" h-12">
            <select
              name=""
              id=""
              className=" border h-12 rounded-lg px-4 py-2 w-11/12"
            >
              <option value="">Select Section</option>
              <option value="it">IT - Section</option>
              <option value="education">Education</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className=" h-12">
            <input
              type="text"
              placeholder="Enter Officer's Name"
              className="w-11/12 border h-12 rounded-lg px-4 py-2"
            />
          </div>

          <div className=" h-12">
            <input
              type="email"
              placeholder="Enter Officer's Email"
              className="w-11/12 border h-12 rounded-lg px-4 py-2"
            />
          </div>

          <div className=" h-12">
            <input
              type="text"
              placeholder="Enter Officer's Number"
              className="w-11/12 border h-12 rounded-lg px-4 py-2"
            />
          </div>

          <div className=" h-12">
            <input
              type="text"
              placeholder="BPSC Employee ID"
              className="w-11/12 border h-12 rounded-lg px-4 py-2"
            />
          </div>

          <div className=" h-12">
            <select name="" id="" className="border h-12 rounded-lg px-4 py-2 w-11/12">
              <option value="">Assign Role</option>
              <option value="super-admin">Super Admin</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className=" h-12">
            <input
              type="text"
              placeholder="BPSC Employee Designation"
              className="w-11/12 border h-12 rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex justify-end mr-10 h-20 ">
          <button className="bg-blue-950 flex items-center justify-center gap-2 text-white px-8 py-2 my-4 mx-4 rounded-2xl hover:bg-white hover:border hover:border-black hover:text-black ease-in-out duration-300 ">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
