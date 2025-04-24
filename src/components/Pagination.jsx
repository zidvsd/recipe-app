import React from "react";

const Pagination = ({ currentPage, pageNumbers = [], handlePageChange }) => {
  if (pageNumbers.length <= 1) return null;
  return (
    <div>
      {pageNumbers.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1  rounded-md border heading-text cursor-pointer ${currentPage === number ? "bg-custom-peach text-white" : ""}`}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
