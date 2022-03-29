import { cfg } from 'assets/constants/config';
import React from 'react';

interface PaginationProps {
  className?: string;
  totalItems: number;
  pageSize?: number;
  currentPage?: number;
  handlePageChange: (pageNumber: number) => void;
}

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  currentPage = 1,
  className,
  pageSize = cfg.API_ITEMS_PAGINATION_COUNT,
  totalItems,
  handlePageChange,
}) => {
  const pageInput = React.useRef<HTMLInputElement>(null);
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const [inputVal, setIntputVal] = React.useState(
    currentPage?.toString() || '1',
  );

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
      setIntputVal((currentPage - 1).toString());
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
      setIntputVal((currentPage + 1).toString());
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setIntputVal(e.currentTarget.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    let newVal = parseInt(inputVal, 10);

    // Handle too low number
    if (newVal < 1) {
      newVal = 1;
    }

    // Handle too high number
    if (newVal > totalPages) {
      newVal = totalPages;
    }

    handlePageChange(newVal);
    setIntputVal(newVal.toString());

    // Blur input on submit
    pageInput.current?.blur();
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <button
        className="button first btn-primary px-2 text-black hover:text-white dark:text-white"
        onClick={() => {
          handlePageChange(1);
          setIntputVal('1');
        }}
        type={'button'}
        aria-label={'First'}
        disabled={currentPage <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="button prev btn-primary px-2 text-black hover:text-white dark:text-white "
        onClick={handlePrevClick}
        type={'button'}
        aria-label={'Previous'}
        disabled={currentPage <= 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </svg>
      </button>
      <input
        className="w-12 rounded-lg border border-gray-500 bg-gray-200 px-2 text-center dark:bg-gray-800"
        type="number"
        value={inputVal}
        onChange={handleInputChange}
        ref={pageInput}
        min={1}
      />
      <span className="text">of {totalPages}</span>
      <button
        className="button next btn-primary px-2 text-black hover:text-white dark:text-white"
        onClick={handleNextClick}
        type={'button'}
        aria-label={'Next'}
        disabled={currentPage >= totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="button last btn-primary px-2 text-black hover:text-white dark:text-white"
        onClick={() => {
          handlePageChange(totalPages);
          setIntputVal(totalPages.toString());
        }}
        type={'button'}
        aria-label={'Last'}
        disabled={currentPage >= totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};
