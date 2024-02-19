import React from 'react'

export default function Introduction({ name, musicType, children }) {
    return(
        <>
        <h1>{name}</h1>
        <p>Genre: {musicType}</p>
        </>
    )
}