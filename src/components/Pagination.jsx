import React from 'react';

const Pagination = ({ total_count, page, setPage }) => {
  const resultsPerPage = 5;
  const pageCount = Math.ceil(total_count / resultsPerPage);
  const atStart = page === 1;
  const atEnd = page === pageCount;

  const pages = Array.from({ length: pageCount }).map((_el, i) => i + 1);
  return (
    <section className="pagination-container">
      <button disabled={atStart} onClick={() => setPage(page - 1)}>
        {'<'}
      </button>
      {pages.map((page) => (
        <button key={page} onClick={() => setPage(page)}>
          {page}
        </button>
      ))}
      <button disabled={atEnd} onClick={() => setPage(page + 1)}>
        {'>'}
      </button>
    </section>
  );
};

export default Pagination;
