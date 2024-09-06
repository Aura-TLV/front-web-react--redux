//import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>«</button>
      )}
      {[...Array(totalPages).keys()].map(number => (
        <button
          key={number + 1}
          onClick={() => onPageChange(number + 1)}
          style={{
            color: number + 1 === currentPage ? 'blue' : 'black',
            textDecoration: number + 1 === currentPage ? 'underline' : 'none'
          }}
        >
          {number + 1}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>»</button>
      )}
    </div>
  );
};

export default Pagination;
