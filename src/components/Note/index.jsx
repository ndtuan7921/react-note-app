import React from 'react'

export default function Note({ ...props }) {
    return (
        <div className='note'>
            <span>{props.text}</span>
            <div className="note-footer">
                <small>{props.date}</small>
                <box-icon className="delete-icon" type='solid' name='trash-alt'></box-icon>
            </div>
        </div>
    )
}
