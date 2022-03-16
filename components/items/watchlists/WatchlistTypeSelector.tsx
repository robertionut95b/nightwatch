import { useState } from 'react';

const WatchlistTypeSelector = (): {
  selectedSection: 'movies' | 'series' | 'episodes' | string;
  WatchlistSelector: () => JSX.Element;
} => {
  const [selectedSection, setSelectedSection] = useState<string>('movies');

  const WatchlistSelector = () => (
    <div className="selector">
      <select
        className="appearance-none rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-black focus:outline-none focus:ring dark:bg-backgroundSecondary dark:text-gray-500"
        placeholder="Select a section"
        value={selectedSection}
        onChange={(e) => setSelectedSection(e.target.value)}
      >
        <option value="movies">Movies</option>
        <option value="series">Series</option>
        <option value="episodes">Episodes</option>
      </select>
    </div>
  );

  return {
    selectedSection,
    WatchlistSelector,
  };
};

export default WatchlistTypeSelector;
