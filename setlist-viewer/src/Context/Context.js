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

  const parseByYear = (songObject, song) => {
    const fixedSong = song.replace('%20', ' ');
    const arrayOfDates = songObject[fixedSong];
    const songTally = {};
    songTally[fixedSong] = {};
    arrayOfDates.forEach((date) => {
      const splitDate = date.split('-');
      const yearInTally = Object.keys(songTally[fixedSong]).includes(splitDate[2]);
      if (yearInTally) {
        songTally[fixedSong][splitDate[2]] += 1;
      } else {
        songTally[fixedSong][splitDate[2]] = 1;
      }
    });
    console.log(songTally);
    setTally([songTally]);
    console.log(tally);
  };
  const search = async (searchInfo) => {
    setIsLoading(true);
    const datesWhenSongIsPlayed = await initialSearch(searchInfo);
    parseByYear(datesWhenSongIsPlayed, searchInfo.song);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider value={{
      tally,
      search,
      isLoading,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
