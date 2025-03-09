import React from "react";

function MetaData({percentile,gender,homestate,category}) {
  const title = ["Percentile", "Gender", "Category", "Home State"];
  const value = [percentile, gender, category, homestate];

  return (
    <section
      className="metadata flex flex-wrap p-[36px] border-[2px] w-full gap-[16px] justify-center items-center border-[#161b2d4a] rounded-[12px] bg-white"
      style={{
        boxShadow:
          "-17px 89px 25px 0px rgba(255, 78, 89, 0.00), -11px 57px 23px 0px rgba(255, 78, 89, 0.01), -6px 32px 20px 0px rgba(255, 78, 89, 0.02), -3px 14px 15px 0px rgba(255, 78, 89, 0.03), -1px 4px 8px 0px rgba(255, 78, 89, 0.04)",
      }}
    >
      {title.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          {/* Dynamic title and value */}
          <div className="content flex flex-col items-start">
            <p className="heading font-bold text-secondary">{item}</p>
            <p className="value text-[#161B2D] font-medium">{value[index]}</p>
          </div>

          {/* Add a separator line between elements except the last one */}
          {index !== title.length - 1 && (
            <div className="h-[48px] w-0 border-[2px] border-secondary mx-4"></div>
          )}
        </div>
      ))}
    </section>
  );
}

export default MetaData;
