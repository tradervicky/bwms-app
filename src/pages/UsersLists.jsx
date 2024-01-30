import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
import { TiUserAddOutline } from "react-icons/ti";
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { MdOutlineAddBox } from "react-icons/md";
import { IoMdEye, IoMdTrash } from "react-icons/io";
import AddAdv from "../components/AddAdv";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "advId",
    headerName: "Advertisement No",
    width: 150,
    editable: true,
  },
  {
    field: "advTitle",
    headerName: "Advertisement title",
    width: 550,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    type: "number",
    width: 200,
    editable: false,
  },
  {
    field: "nodalOfficers",
    headerName: "Nodal Officers",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
  },

  {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <div className="flex gap-2">
        <button
          className="bg-blue-950 text-white px-2 py-1 rounded-md hover:bg-white hover:text-black"
          onClick={() => handleViewClick(params.id)}
        >
          <IoMdEye size={18} />
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-white hover:text-red-500"
          onClick={() => handleDeleteClick(params.id)}
        >
          <IoMdTrash size={18} />
        </button>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    advId: "07/2020 & 08/2020",
    advTitle: "Assistant Engineer, Civil/Mechanical Competitive Examinations",
    age: 14,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 2,
    advId: "01~17/2024",
    advTitle:
      "	Results: Drug Inspector Written (Objective) Competitive Examination.",
    age: 31,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 3,
    advId: "Lannister",
    advTitle:
      "Invitation Letters: For candidates appearing in Document Verification",
    age: 31,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 4,
    advId: "25/2023",
    advTitle: "Final Result: Assistant Audit Officer Competitive Examination",
    age: 11,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 5,
    advId: "05/2021",
    advTitle:
      "Final Result: District Arts & Culture Officer Competitive Examination",
    age: null,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 6,
    advId: "01/2021",
    advTitle:
      "AImportant Notice: For Examinees of Integrated 69th Combined Main (Written) Competitive Examinationndre",
    age: 150,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 7,
    advId: "Clifford",
    advTitle: "Ferrara",
    age: 44,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 8,
    advId: "Frances",
    advTitle: "Rossini",
    age: 36,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
  {
    id: 9,
    advId: "Roxie",
    advTitle: "Harvey",
    age: 65,
    date: "24-01-2023",
    nodalOfficers: 2,
  },
];

const USersLists = () => {
  const navigate = useNavigate();
  const [isAddAdvModalOpen, setIsAddAdvModalOpen] = useState(false);

  const handleAddAdvClick = () => {
    setIsAddAdvModalOpen(true);
  };

  const closeAddAdvModal = () => {
    setIsAddAdvModalOpen(false);
  };

  return (
    <div className="flex bg-[#b5c2ca] min-h-screen">
      <div className="flex flex-col justify-between  w-1/6 p-4 bg-[#f0f3f4] m-5 mr-2 rounded-lg">
        <div className="mb-4">
          <div className="mb-8 flex flex-col items-center ">
            {/* <img
              src="/images/logo.png"
              alt="logo"
              className="w-32 h-20 object-contain cursor-pointer"
            /> */}
            {/* <h2 className="text-3xl font-bold text-blue-950 cursor-pointer">BWMS</h2> */}
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
            <p onClick={()=>navigate('/addusers')} className="text-gray-700 flex gap-8 items-center text-lg font-medium cursor-pointer py-2 pl-2 hover:bg-blue-950  hover:text-white hover:rounded-2xl duration-300 ease-in-out">
              <HiOutlineUserAdd size={28} /> Add Users 
            </p>
            <p onClick={()=>navigate('/userslist')} className="text-gray-700 flex gap-8 items-center text-lg font-medium cursor-pointer py-2 pl-2 hover:bg-blue-950  hover:text-white hover:rounded-2xl duration-300 ease-in-out">
              <FiUsers size={28} /> Users List
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

      <div className="flex-1 p-4 h-[80%] ">
        <div className="flex items-center  h-20 bg-[#f0f3f4] mb-4 border mt-2 rounded-lg">
          <div>
            <button
              onClick={handleAddAdvClick}
              className="bg-blue-950 flex items-center justify-center gap-2 text-white px-4 py-2 my-4 mx-4 rounded-2xl hover:bg-white hover:border hover:border-black hover:text-black ease-in-out duration-300 "
            >
              <MdOutlineAddBox size={24} />
              Add Adv.
            </button>
          </div>
          <p onClick={()=>navigate('/userslist')} className="mx-auto text-3xl text-blue-950 font-bold p-shadow">
            Users Lists
          </p>
          
        </div>

        <DataGrid
          className="bg-white p-5 "
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </div>
      <AddAdv isOpen={isAddAdvModalOpen} onClose={closeAddAdvModal} />
    </div>
  );
};

export default USersLists;
