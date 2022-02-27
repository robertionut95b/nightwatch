import router, { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function SearchBar(): JSX.Element {
  const { query } = useRouter();
  const [searchQuery, setSearchQuery] = React.useState<string | string[]>(
    query?.q || '',
  );

  const hitSearch = (searchText: string) => {
    if (searchText) {
      router.push(`/search?q=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div className="nav-search-screenings relative">
      <form
        action="/search"
        encType="application/x-www-form-urlencoded"
        onSubmit={() => hitSearch(searchQuery as string)}
      >
        <input
          id="search-input-title"
          name="q"
          className={
            'dark:bg-background w-full dark:shadow-md bg-clip-padding bg-opacity-60 px-4 py-1 backdrop-filter backdrop-blur-sm rounded-md text-sm font-semibold border dark:border-gray-800 border-primary'
          }
          type="text"
          placeholder="Search movies ..."
          required
          defaultValue={searchQuery || ''}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1.5 right-2 h-4 w-4 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => hitSearch(searchQuery as string)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
}
