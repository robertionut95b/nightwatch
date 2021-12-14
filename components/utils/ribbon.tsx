export const Ribbon = () => {
  return (
        <div className="ribbon group">
            <svg
                className='absolute top-0 right-3.5'
                width="24px"
                height="34px"
                viewBox="0 0 24 34"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation">
                <polygon fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                <polygon points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                <polygon points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
            </svg>
            <svg className='absolute top-0 right-3.5 group-hover:text-primary-hover transition-colors ease-in duration-100'
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation">
                <path fill="none" d="M0 0h24v24H0V0z">
                </path>
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z">
                </path>
            </svg>
        </div>
  );
};