import React, { createContext, useState } from 'react';
import { initialSearch } from '../Controllers/Controller';

// predefined context
export const AppContext = createContext(
  {
    isLoading: false,
    error: false,
    search: (searchInfo) => {},
    tally: (searchInfo) => [{}],
    clearError: () => {},
    parseByYear: (arrayOfDates) => {},
  },
);

// main context class that contains all data
function AppContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [tally, setTally] = useState([]);
  const [error, setError] = useState(false);

  const parseByYear = (songObject, songName) => {
    const fixedSongName = songName.replace('%20', ' ');
    const arrayOfDates = songObject[fixedSongName];
    const songTally = {};
    songTally[fixedSongName] = {};
    arrayOfDates.forEach((date) => {
      const year = getYear(date);
      const yearInTally = Object.keys(songTally[fixedSongName]).includes(year);
      if (yearInTally) {
        songTally[fixedSongName][year] += 1;
      } else {
        songTally[fixedSongName][year] = 1;
      }
    });
    setTally([songTally]);
  };

  const search = async (searchInfo) => {
    setIsLoading(true);
    const datesWhenSongIsPlayed = await initialSearch(searchInfo);
    if (Object.keys(datesWhenSongIsPlayed)[0] !== '__error__') parseByYear(datesWhenSongIsPlayed, searchInfo.song);
    else setError(true);
    setIsLoading(false);
  };

  const clearError = () => {
    setError(false);
  };

  const getYear = (date) => date.split('-')[2];

  return (
    <AppContext.Provider value={{
      tally,
      search,
      isLoading,
      error,
      clearError,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
