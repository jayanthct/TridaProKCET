import React, { useState } from "react";
import PaginationRounded from "../../PaginationRounded";
import TableNotFound from "../../../../TableNotFound";
import {
  FaBuilding,
  FaFlask,
  FaLaptopCode,
  FaMicrochip,
  FaCog,
  FaAtom,
  FaRocket,
  FaGlobe,
  FaWrench,
  FaRobot,
  FaBolt,
  FaGraduationCap,
} from "react-icons/fa";

const iconMap = {
  "Chemical Engineering": <FaFlask />,
  "Computer Science and Information Technology": <FaLaptopCode />,
  "Computer Engineering": <FaLaptopCode />,
  "Ceramics and Cement Technology": <FaBuilding />,
  "Computer Science And Engineering": <FaLaptopCode />,
  "Construction Technology and Management": <FaWrench />,
  "Computer Science Engineering - Cyber Security": <FaLaptopCode />,
  "Computer Science Engineering - Data Science": <FaLaptopCode />,
  "Electronics and Communication Engineering": <FaMicrochip />,
  "Electrical And Electronics Engineering": <FaBolt />,
  "Electronics and Instrumentation Engineering": <FaMicrochip />,
  "Environmental Engineering": <FaGlobe />,
  "Electrical and Computer Engineering": <FaBolt />,
  "Electronics and Computer Engineering": <FaMicrochip />,
  "Electronics and Telecommunication Engineering": <FaMicrochip />,
  "Internet of Things, Cyber Security (Blockchain Tech)": <FaLaptopCode />,
  "Information Science and Engineering": <FaLaptopCode />,
  "Industrial Engineering Management": <FaCog />,
  "Computer Science Engineering - Internet of Things": <FaLaptopCode />,
  "Industrial and Production Engineering": <FaWrench />,
  "Instrumentation Technology": <FaMicrochip />,
  "Mathematics and Computing": <FaAtom />,
  "Medical Electronics": <FaMicrochip />,
  "Mechanical Engineering": <FaCog />,
  "Mechanical and Smart Manufacturing": <FaCog />,
  "Artificial Intelligence and Data Science": <FaLaptopCode />,
  "Marine Engineering": <FaGlobe />,
  "Mechatronics Engineering": <FaRobot />,
  "Artificial Intelligence and Machine Learning": <FaLaptopCode />,
  "Aeronautical Engineering": <FaRocket />,
  Architecture: <FaBuilding />,
  "Automotive Engineering": <FaCog />,
  "Automobile Engineering": <FaCog />,
  "Petroleum Engineering": <FaGlobe />,
  "Polymer Science and Technology": <FaAtom />,
  "Automation and Robotics Engineering": <FaRobot />,
  "Aerospace Engineering": <FaRocket />,
  "Computer Science and System Engineering": <FaLaptopCode />,
  "Telecommunication Engineering": <FaMicrochip />,
  "Textile Technology": <FaBuilding />,
  Planning: <FaBuilding />,
  "Computer and Communication Engineering": <FaLaptopCode />,
};

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
  { value: "CS", label: "Computer Science And Engineering" },
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

const ResultTable = ({ eligible_colleges = [] }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedColleges = eligible_colleges.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {eligible_colleges.length === 0 ? (
        <TableNotFound />
      ) : (
        <div className="overflow-x-auto px-[16px] md:px-[4%] py-[2%] w-full">
          <div className="heading mb-6 font-medium text-[21px]">
            As per the data obtained from &nbsp;
            <span className="font-bold text-secondary text-[24px]">
              KCET 2022
            </span>
            ,&nbsp; you might get:
          </div>
          <table className="w-full border-collapse">
            <tbody>
              {displayedColleges.map((college, index) => {
                const branch = college["Branch"];
                const displaybranch = branches.filter((e) => {
                  return e.value == branch;
                });
                const collegeName = college["College"];
                const cetCode = college["CETCode"];
                const icon = iconMap[displaybranch[0].label] || (
                  <FaGraduationCap />
                );

                return (
                  <tr
                    key={`college-${startIndex + index}`} // Ensure unique key
                    className={`${
                      index % 2 === 0 ? "bg-[#fff2fc]" : "bg-white"
                    } border-t-1 border-t-[#c5c8cc]`}
                  >
                    <td className="p-4 font-semibold">
                      {startIndex + index + 1}
                    </td>
                    <td className="p-4 text-secondary font-bold">
                      {collegeName}
                    </td>
                    <td className="p-4 font-medium">{cetCode}</td>{" "}
                    {/* CETCode Column */}
                    <td className="p-4 flex items-center gap-4 font-medium">
                      <span className="text-secondary sm:flex hidden text-xl w-[52px] h-[52px] rounded-full bg-[#901D7822] justify-center items-center">
                        {icon}
                      </span>
                      {displaybranch[0].label}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center mt-6">
            <PaginationRounded
              count={Math.ceil(eligible_colleges.length / itemsPerPage)}
              page={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResultTable;
