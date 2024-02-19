import React from 'react'
import Introduction from './Introduction'
import SongList from './SongList'
import SubmissionForm from './SubmissionForm'

export default function Portfolio(){
    return(
        <>
        <h1>Artist Portfolio</h1>
        <Introduction name="Heathers the Musical" musicType="Musical"/>
        <p>This is a musical first performed in 2010 about a girl who gets popular and her whole life goes to shit because of it.</p>
        <SongList/>
        </>
    )
}