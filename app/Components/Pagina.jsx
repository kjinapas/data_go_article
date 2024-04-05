import React, { useState } from 'react';

const Pagina = ({ data, itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
      <button className='m-2' onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagina;
