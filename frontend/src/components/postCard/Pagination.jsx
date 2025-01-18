export function Pagination({ onPageChange, currPage, posts, pageSize }) {
  const totalPage = Math.ceil(posts.length / pageSize);

  // Base classes for styles
  const baseButton =
    'relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset focus:z-20 focus:outline-offset-0';
  const hoverEffect = 'hover:bg-gray-50 dark:hover:bg-gray-800';
  const activeButton =
    'bg-indigo-600 text-white dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
  const disabledButton =
    'text-gray-400 bg-gray-100 dark:text-gray-500 dark:bg-gray-700 cursor-not-allowed';
  const notActiveButton = 'text-gray-900 dark:text-white ring-gray-300';

  const navButtonBase =
    'rounded-md px-2 py-2 text-gray-800 dark:text-white ring-gray-300';

  const renderPaginationLinks = () =>
    Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNumber) => (
      <li key={pageNumber}>
        <button
          className={`${baseButton} ${
            currPage === pageNumber
              ? activeButton
              : `${notActiveButton} ${hoverEffect}`
          }`}
          onClick={() => onPageChange(pageNumber)}
          disabled={currPage === pageNumber}
        >
          {pageNumber}
        </button>
      </li>
    ));

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      {/* Mobile View Pagination */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => onPageChange(currPage - 1)}
          disabled={currPage === 1}
          className={`${baseButton} ${navButtonBase} ${
            currPage === 1 ? disabledButton : hoverEffect
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currPage + 1)}
          disabled={currPage === totalPage}
          className={`${baseButton} ${navButtonBase} ${
            currPage === totalPage ? disabledButton : hoverEffect
          }`}
        >
          Next
        </button>
      </div>

      {/* Desktop View Pagination */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        >
          <button
            onClick={() => onPageChange(currPage - 1)}
            disabled={currPage === 1}
            className={`${baseButton} rounded-l-md ${
              currPage === 1
                ? disabledButton
                : `${notActiveButton} ${hoverEffect}`
            }`}
          >
            Previous
          </button>
          <ul className="flex">{renderPaginationLinks()}</ul>
          <button
            onClick={() => onPageChange(currPage + 1)}
            disabled={currPage === totalPage}
            className={`${baseButton} rounded-r-md ${
              currPage === totalPage
                ? disabledButton
                : `${notActiveButton} ${hoverEffect}`
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
