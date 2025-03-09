import { useState } from "react";

import Select from "react-select";

import close from "./Assets/close.svg"

const branches = [
  { value: "AD", label: "Artificial Intelligence And Data Science" },
  { value: "AE", label: "Aeronautical Engineering" },
  { value: "AI", label: "Artificial Intelligence and Machine Learning" },
  { value: "AR", label: "Architecture" },
  { value: "AT", label: "Automotive Engineering" },
  { value: "AU", label: "Automobile Engineering" },
  { value: "BC", label: "BTech Computer Technology" },
  { value: "BD", label: "Computer Science Engineering-Big Data" },
  { value: "BE", label: "Bio-Electronics Engineering" },
  { value: "BI", label: "BTech Information Technology" },
  { value: "BM", label: "Bio Medical Engineering" },
  { value: "BT", label: "Bio Technology" },
  { value: "CB", label: "Computer Science and Business Systems" },
  { value: "CC", label: "Computer and Communication Engineering" },
  { value: "CE", label: "Civil Engineering" },
  { value: "CH", label: "Chemical Engineering" },
  { value: "CI", label: "Computer Science and Information Technology" },
  { value: "CO", label: "Computer Engineering" },
  { value: "CR", label: "Ceramics and Cement Technology" },
  { value: "CS", label: "Computers Science And Engineering" },
  { value: "CT", label: "Construction Technology and Management" },
  { value: "CY", label: "Computer Science Engineering-Cyber Security" },
  { value: "DS", label: "Computer Science Engineering-Data Sciences" },
  { value: "EC", label: "Electronics and Communication Engineering" },
  { value: "EE", label: "Electrical And Electronics Engineering" },
  { value: "EI", label: "Electronics and Instrumentation Engineering" },
  { value: "EN", label: "Environmental Engineering" },
  { value: "ER", label: "Electrical and Computer Engineering" },
  { value: "ES", label: "Electronics and Computer" },
  { value: "ET", label: "Electronics and Telecommunication" },
  {
    value: "IC",
    label: "Internet of Things, Cyber Security(Block Chain Tech)",
  },
  { value: "IE", label: "Information Science and Engineering" },
  { value: "II", label: "Elec. and Communication- Industrial Integrated" },
  { value: "IM", label: "Industrial Engineering Management" },
  { value: "IO", label: "Computer Science Engineering-Internet of Things" },
  { value: "IP", label: "Industrial and Production Engineering" },
  { value: "IT", label: "Instrumentation Technology" },
  { value: "LC", label: "Computer Science Engineering-Block Chain" },
  { value: "MC", label: "Mathematics and Computing" },
  { value: "MD", label: "Medical Electronics" },
  { value: "ME", label: "Mechanical Engineering" },
  { value: "MM", label: "Mechanical and Smart Manufacturing" },
  { value: "MR", label: "Marine Engineering" },
  { value: "MT", label: "Mechatronics Engineering" },
  { value: "OP", label: "Computer Science Engineering-Dev Ops" },
  { value: "PL", label: "Petroleum Engineering" },
  { value: "PT", label: "Polymer Science and Technology" },
  { value: "RO", label: "Automation and Robotics Engineering" },
  { value: "SE", label: "Aero Space Engineering" },
  { value: "SS", label: "Computer Science and System Engineering" },
  { value: "ST", label: "Silk Technology" },
  { value: "TC", label: "Telecommunication Engineering" },
  { value: "TX", label: "Textile Technology" },
  { value: "UP", label: "Planning" },
  { value: "UR", label: "Planning" },
];

const categories = [
  { value: "GM", label: "GM" },
  { value: "GMK", label: "GMK" },
  { value: "GMR", label: "GMR" },
  { value: "1G", label: "1G" },
  { value: "1K", label: "1K" },
  { value: "1R", label: "1R" },
  { value: "2AG", label: "2AG" },
  { value: "2AK", label: "2AK" },
  { value: "2AR", label: "2AR" },
  { value: "2BG", label: "2BG" },
  { value: "2BK", label: "2BK" },
  { value: "2BR", label: "2BR" },
  { value: "3AG", label: "3AG" },
  { value: "3AK", label: "3AK" },
  { value: "3AR", label: "3AR" },
  { value: "3BG", label: "3BG" },
  { value: "3BK", label: "3BK" },
  { value: "3BR", label: "3BR" },
  { value: "SCG", label: "SCG" },
  { value: "SCK", label: "SCK" },
  { value: "SCR", label: "SCR" },
  { value: "STG", label: "STG" },
  { value: "STK", label: "STK" },
  { value: "STR", label: "STR" },
];
const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    height: "52px",
    marginTop: "-0.5rem",
    padding: "8px 16px",
    borderWidth: "1px",
    boxShadow: "0px 1px 12px 0px rgba(144, 29, 120, 0.08)",
    borderColor: state.isFocused ? "#901D78a0" : "#161b2d29",
    borderRadius: "6px",
    backgroundColor: "white",
    cursor: "pointer",
    outline: state.isFocused ? "2px solid #901D78a0" : "none",
    "&:hover": {
      outline: "1px solid #901D7862",
    },
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "white",
    borderRadius: "6px",
    boxShadow: "0px 1px 12px 0px rgba(144, 29, 120, 0.08)",
    padding: "5px 0",
  }),
  option: (base, state) => ({
    ...base,
    padding: "10px 15px",
    backgroundColor: state.isSelected
      ? "#901D78"
      : state.isFocused
      ? "#901D78"
      : "white",
    color: state.isSelected ? "white" : "[#161b2d]",
    transition: "all 150ms ease-in",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#901D78",
      color: "white",
    },
  }),

  multiValue: () => ({
    display: "none", // This removes selected values from inside the select box
  }),
};
const DynamicSelect = ({ formData, setFormData, showBranches }) => {
  const options = showBranches ? branches : categories;

  const handleChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      [showBranches ? "branch" : "category"]: selectedOptions || [],
    }));
  };

  const handleRemoveBranch = (branchToRemove) => {
    setFormData((prev) => ({
      ...prev,
      branches: prev.branches.filter(
        (branch) => branch.value !== branchToRemove.value
      ),
    }));
  };

  return (
    <div className="w-full">
      {/* Label */}
      <label className="block text-sm font-bold text-primary mb-4">
        {showBranches ? "Branch" : "Category"}{" "}
        <span className="text-[#FF4E59]">*</span>
      </label>

      {/* Select Box */}
      <Select
        styles={customStyles}
        options={options}
        isMulti={showBranches}
        placeholder={
          showBranches
            ? formData.branch?.length > 0
              ? ""
              : "Select Branch"
            : formData.category?.length > 0
            ? ""
            : "Select Category"
        }
        value={showBranches ? formData.branch : formData.category}
        onChange={handleChange}
        getOptionLabel={(e) => (
          <div className="flex items-center">
            <span>{e.label}</span>
          </div>
        )}
      />

      {/* Tag Display Section */}
      {showBranches && formData.branch?.length > 0 && (
        <div className="mt-3 bg-white p-3 rounded-lg">
          <div className="flex flex-wrap gap-2">
            {formData.branch.map((branch) => (
              <div
                key={branch.value}
                className="bg-secondary font-semibold text-white text-[12px] px-4 py-2 rounded-full flex items-center justify-center"
              >
                {branch.label}
                <button
                  className="ml-2 text-white font-bold cursor-pointer flex justify-center items-center w-fit"
                  onClick={() => handleRemoveBranch(branch)}
                >
                  <img src={close} alt="" className="cross w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicSelect;
