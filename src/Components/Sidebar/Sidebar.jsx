import React from 'react'
import { useState } from 'react'
import './Sidebar.css'
import delete1 from '../../assets/Icons/deleteicon.svg'

function Sidebar({ notes, ondelete, onaddnotes, showmodel,CreateNotes,activenote,setactivenote }) {





    const Mymodel = () => {
        return (
            <>
                <div className='model-wraper' onClick={onaddnotes}></div>
                <div className='model-container'>
                    <h1>Create New Notes Group</h1>
                    <span>Group Name &nbsp;</span>
                    <input type='text' placeholder='Enter Group Name' onChange={(e)=>{}} /> <br />
                    <div>
                        <span style={{fontWeight:'700'}}>Choose Color &nbsp;</span>
                        <div className='cir-color'>
                            <div className='cir-pink'></div>
                            <div className='cir-sky'></div>
                            <div className='cir-skin'></div>
                            <div className='cir-blue'></div>
                            <div className='cir-purple'></div>
                            <div className='cir-lblue'></div>
                        </div>
                    </div>
                    <button onClick={CreateNotes}>Create</button>
                </div>
            </>


        )


    }


    const handlechange = (index) => {
        setactivenote(index)

    }

    return (
        <>

            <div className='sidebar-notes'>
                <h1>Pocket Notes</h1>
                <button onClick={onaddnotes}> <span className='plus'>+</span>  Create Notes group</button>
                
                {showmodel && <Mymodel />}
            </div>

            <div className='sidebar-notes-below'>
                {notes.map((note, index) => {
                    return (<div
                        className={`sidebar-realnotes ${activenote === note.id ? 'selected' : ''}`}
                        key={index}
                        onClick={() => handlechange(note.id)}
                    >
                        <div className='round-name-logo'>

                        </div>

                        <p>title</p>

                        <button><img onClick={() => ondelete(note.id)} src={delete1} alt='delete' /></button>

                    </div>)
                })}












            </div>

        </>
    )
}

export default Sidebar