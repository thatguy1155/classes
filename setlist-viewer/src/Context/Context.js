import React, { createContext, useState } from 'react';
import { initialSearch } from '../Controllers/Controller';

// predefined context
export const AppContext = createContext(
  {
    isLoading: false,
    search: (searchInfo) => {},
    tally: (searchInfo) => {},
    parseByYear: (arrayOfDates) => {},
  },
);

// main context class that contains all data
function AppContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [tally, setTally] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('');

  const parseByYear = (arrayOfDates, song) => {
    const songTally = {};
    songTally[song] = {};
    arrayOfDates.forEach((date) => {
      const splitDate = date.split('-');
      const yearInTally = Object.keys(songTally.song).includes(splitDate[2]);
      if (yearInTally) {
        songTally.song[splitDate[2]] += 1;
      } else {
        songTally.song[splitDate[2]] = 1;
      }
    });
    console.log(songTally);
    setTally([...songTally]);
  };
  const search = async (searchInfo) => {
    setIsLoading(true);
    const datesWhenSongIsPlayed = initialSearch(searchInfo);
    // console.log(await possibleArtistMatches);
    parseByYear(datesWhenSongIsPlayed);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider value={{
      parseByYear,
      search,
      isLoading,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
