import React from 'react'
import './PREVIEW.css'

export default function PREVIEW () {
return (
    <>
        <section className='addPhotoContainer'>
            <h4>Add Photo</h4>
            <input type="file" />
        </section>
        <section className='photoContainer'></section>
    </>
)
}