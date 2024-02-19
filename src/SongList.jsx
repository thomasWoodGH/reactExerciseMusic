import React, { useState } from 'react';
import Song from './Song';
import SubmissionForm from './SubmissionForm';

export default function SongList() {
    const [songs, setSongs] = useState([
        { name: "Beautiful", releaseDate: "13/09/2010", coverArtUrl: "../assets/heathers_cover_final.jpg" },
        { name: "Big Fun", releaseDate: "13/09/2010", coverArtUrl: "../assets/heathers_cover_final.jpg" }
    ]);

    const addSong = (newSong) => {
        setSongs([...songs, newSong]);
    };

    return (
        <>
            <div className="song-container">
                <ul className="song-list">
                    {songs.map((song, index) => (
                        <Song key={index} name={song.name} releaseDate={song.releaseDate} coverArtUrl={song.coverArtUrl} />
                    ))}
                </ul>
            </div>
            <SubmissionForm onFormSubmit={addSong} />
        </>
    );
}