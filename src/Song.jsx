import React from 'react'
import { useState } from 'react'

export default function Song({name, releaseDate, coverArtUrl}){
    const [likedState, setLikedState] = useState(false)

    const handleLike = () => {
        setLikedState(prevState => !prevState)
    }

    return(
        <>
        <li>
            <img src={coverArtUrl} alt={coverArtUrl}/>
            <p>{name}</p>
            <p>{releaseDate}</p>
            <p>{likedState ? 'Liked' : 'Not liked'}</p>
            <button onClick={handleLike}>Like</button>
        </li>
        </>
    )
}