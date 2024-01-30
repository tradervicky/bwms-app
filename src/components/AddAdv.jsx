import { Button } from "@mui/material";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import './addAdv.css'
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const AddAdv = ({ isOpen, onClose }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";
  const handleInputClick = (event) => {
    event.stopPropagation();
  };
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",

    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div
      className={`modal ${modalClasses} bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm`}
    >
      <div className="modal-content bg-white p-8 rounded-lg ">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-blue-950 mb-4">
            Add Advertisement
          </h1>
          <RxCross2
            onClick={onClose}
            className="text-3xl font-bold cursor-pointer  text-red-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 p-4 overflow-y-auto max-h-[60vh] scrollbar">
          <input
            type="text"
            placeholder="Advertisement No"
            className="mb-2 p-2 border rounded-md"
            onClick={handleInputClick}
          />
          <input
            type="text"
            placeholder="Advertisement title"
            className="mb-2 p-2 border rounded-md"
            onClick={handleInputClick}
          />
          <div className="  flex gap-5 items-center justify-between px-2 ">
            <label className=" text-black">Advertisement File</label>
            <div className="">
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                file
                <VisuallyHiddenInput className="text-lg" type="file" />
              </Button>
            </div>
          </div>
          <input
            type="file"
            placeholder="File Upload"
            className="mb-2 p-2 border rounded-md"
            onClick={handleInputClick}
          />
         <div className="border px-4 py-2 rounded">
          <p>Stages</p>
          <ol>
            <li className="flex justify-between items-center mb-3 hover:bg-gray-200 px-4 ">Pre <button className="my-1 bg-red-500 px-2 py-1 rounded-md text-white hover:bg-gray-50  hover:text-red-500"><MdDelete size={20} /></button></li>
            <li className="flex justify-between mb-3 items-center hover:bg-gray-200 px-4 ">Mains <button className="my-1 bg-red-500 px-2 py-1 rounded-md text-white hover:bg-gray-50  hover:text-red-500"><MdDelete size={20} /></button></li>
            <li className="flex justify-between mb-3 items-center hover:bg-gray-200 px-4  ">Interview <button className="my-1 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-gray-50 hover:text-red-500 "><MdDelete size={20} /></button></li>
          </ol >
          <div className="flex justify-end">
          <button className="px-2 py-1  bg-blue-950 rounded-md text-white ml-auto hover:bg-white hover:outline hover:text-blue-950">add stage</button>
          </div>
          
         </div>
         
        
         
          
          
        </div>
        <div className="flex justify-end mt-2">
          <button className="px-4 py-2 border bg-blue-950 rounded-lg text-white ml-auto hover:bg-white hover:outline hover:text-blue-950">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAdv;
