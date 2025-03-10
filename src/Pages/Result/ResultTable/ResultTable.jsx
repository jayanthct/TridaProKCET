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
  FaGraduationCap
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
  "Architecture": <FaBuilding />,
  "Automotive Engineering": <FaCog />,
  "Automobile Engineering": <FaCog />,
  "Petroleum Engineering": <FaGlobe />,
  "Polymer Science and Technology": <FaAtom />,
  "Automation and Robotics Engineering": <FaRobot />,
  "Aerospace Engineering": <FaRocket />,
  "Computer Science and System Engineering": <FaLaptopCode />,
  "Telecommunication Engineering": <FaMicrochip />,
  "Textile Technology": <FaBuilding />,
  "Planning": <FaBuilding />,
  "Computer and Communication Engineering": <FaLaptopCode />,
};
const ResultTable = ({ eligible_colleges =[]}) => {
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
        <div className="overflow-x-auto px-[16px] md:px-[10%] py-[2%] w-full">
          <div className="heading mb-6 font-medium text-[21px]">
            As per the data obtained from &nbsp;
            <span className="font-bold text-secondary text-[24px]">
              KCET 2022
            </span>
            ,&nbsp; you might get:
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 text-left font-semibold">#</th>
                <th className="p-4 text-left font-semibold">College</th>
                <th className="p-4 text-left font-semibold">CET Code</th>
                <th className="p-4 text-left font-semibold">Branch</th>
              </tr>
            </thead>
            <tbody>
              {displayedColleges.map((college, index) => {
                const branch = college["Branch"];
                const collegeName = college["College"];
                const cetCode = college["CETCode"];
                const icon = iconMap[branch] || <FaGraduationCap />;

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
                      {branch}
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
