import React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
import { TiUserAddOutline } from "react-icons/ti";
import { GrUserSettings } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: "Andre", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Dashboard = () => {
  return (
    <div className="flex bg-[#b5c2ca] min-h-screen">
      <div className="flex flex-col justify-between  w-1/6 p-4 bg-[#f0f3f4] m-5 rounded-lg">
        <div className="mb-4">
          <div className="mb-8 flex flex-col items-center ">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-32 h-20 object-contain cursor-pointer"
            />
            <h2 className="text-3xl font-bold text-blue-950 cursor-pointer">BWMS</h2>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 flex gap-8 items-center  text-lg font-medium cursor-pointer py-2 pl-2 hover:bg-blue-950  hover:text-white hover:rounded-2xl duration-300 ease-in-out">
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
          <p className="text-gray-700 flex justify-center items-center gap-4">
              john@email.in
          </p>
          </div>
          <div className="flex justify-center">
          <button className="bg-blue-950 flex items-center justify-center gap-5 text-white px-4 py-2 w-[90%] rounded-2xl hover:bg-white hover:border hover:border-black hover:text-black ease-in-out duration-300 ">
          <IoIosLogOut size={32}/> Logout
          </button>
        </div>
        </div>

        
      </div>

      <div className="flex-1 p-4 ">

        <DataGrid
        
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Dashboard;
