export const Ribbon = ({
  marked = false,
}: {
  marked?: boolean;
}): JSX.Element => {
  return (
    <div className="ribbon group absolute top-0.5 right-0">
      {marked ? (
        <div className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-12 w-12 fill-primary group-hover:fill-primary-hover transition-colors duration-200`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              stroke="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-2 right-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-12 w-12 fill-primary group-hover:fill-primary-hover transition-colors duration-200`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      )}
    </div>
  );
};
