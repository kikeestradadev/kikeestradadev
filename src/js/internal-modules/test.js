/**
 * Codility — Music Player (React Context)
 * Copiar/pegar en la plataforma. No está conectado al bundle del resume.
 * Ajustar imports si el stub usa otros nombres (BottomBar vs ButtonBar, PlayList vs Playlist).
 */
import React, { useState } from 'react';
import {
  BarSongTitle,
  BottomBar,
  PlayList,
  Song,
  SongTitle,
  Button,
} from './styles.js';
import { songList } from './constants.js';

const MODES = ['Not replaying', 'Replaying all', 'Replaying one'];

const PlayerContext = React.createContext(null);

const PlayerProvider = ({ children }) => {
  const [currentSongId, setCurrentSongId] = useState(null);
  const [modeIndex, setModeIndex] = useState(0);
  const currentMode = MODES[modeIndex];

  const getSongIndex = (songId) => songList.findIndex((song) => song.id === songId);

  const selectSong = (songId) => {
    setCurrentSongId(songId);
  };

  const handleNext = () => {
    if (currentSongId === null) return;

    const currentIndex = getSongIndex(currentSongId);
    if (currentIndex === -1) return;

    const lastIndex = songList.length - 1;

    if (currentIndex === lastIndex) {
      if (currentMode === 'Replaying all') {
        setCurrentSongId(songList[0].id);
      } else if (currentMode === 'Not replaying') {
        setCurrentSongId(null);
      }
      // Replaying one: keep current song
      return;
    }

    setCurrentSongId(songList[currentIndex + 1].id);
  };

  const handlePrevious = () => {
    if (currentSongId === null) return;

    const currentIndex = getSongIndex(currentSongId);
    if (currentIndex === -1) return;

    if (currentIndex === 0) {
      if (currentMode === 'Replaying all') {
        setCurrentSongId(songList[songList.length - 1].id);
      }
      // Not replaying & Replaying one: keep current song
      return;
    }

    setCurrentSongId(songList[currentIndex - 1].id);
  };

  const handleModeChange = () => {
    setModeIndex((prev) => (prev + 1) % MODES.length);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSongId,
        currentMode,
        selectSong,
        handleNext,
        handlePrevious,
        handleModeChange,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

const usePlayerContext = () => {
  const context = React.useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayerContext must be used within a PlayerProvider');
  }
  return context;
};

const ControlBar = () => {
  const {
    currentSongId,
    currentMode,
    handleNext,
    handlePrevious,
    handleModeChange,
  } = usePlayerContext();

  const currentSong = songList.find((song) => song.id === currentSongId);
  const displayTitle = currentSong
    ? `${currentSong.author} - ${currentSong.title}`
    : '';

  return (
    <BottomBar>
      <BarSongTitle data-testid="barTitle">{displayTitle}</BarSongTitle>
      <div>
        <Button data-testid="previousButton" onClick={handlePrevious}>
          Previous
        </Button>
        <Button data-testid="nextButton" onClick={handleNext}>
          Next
        </Button>
        <Button data-testid="currentModeButton" onClick={handleModeChange}>
          {currentMode}
        </Button>
      </div>
    </BottomBar>
  );
};

const Songs = () => {
  const { currentSongId, selectSong } = usePlayerContext();

  return (
    <PlayList>
      {songList.map(({ title, author, id }) => (
        <Song key={id}>
          <SongTitle
            data-testid={id}
            active={id === currentSongId}
            onClick={() => selectSong(id)}
          >
            {title}
          </SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </PlayList>
  );
};

export { PlayerProvider, Songs, ControlBar, usePlayerContext };
