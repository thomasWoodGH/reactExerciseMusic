import React from 'react'
import { useState } from 'react'

export default function SubmissionForm({ onFormSubmit }){
    const [nameInput, setNameInput] = useState("")
    const [releaseDateInput, setReleaseDateInput] = useState("")
    const [coverArtUrlInput, setCoverArtUrlInput] = useState("")
    const handleNameInput = (e) => {
        setNameInput(e.target.value)
    }
    const handleReleaseDateInput = (e) => {
        setReleaseDateInput(e.target.value)
    }
    const handleCoverArtUrlInput = (e) => {
        setCoverArtUrlInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({
            name: nameInput,
            releaseDate: releaseDateInput,
            coverArtUrl: coverArtUrlInput
        });
        setNameInput("")
        setReleaseDateInput("")
        setCoverArtUrlInput("")
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input value={nameInput} onChange={handleNameInput} type="text" placeholder="Name" required/>
            <input value={releaseDateInput} onChange={handleReleaseDateInput} type="text" placeholder="Release Date" required/>
            <input value={coverArtUrlInput} onChange={handleCoverArtUrlInput} type="text" placeholder="Cover Art URL" required/>
            <button type="submit">Add</button>
        </form>
        </>
    )
}