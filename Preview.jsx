import React, { useState, useRef } from 'react'
import './Preview.css'
import sign from '../../assets/Images/plusSign.png'

export default function Preview() {
const [addData, setAddData] = useState({
    addFile: null,
    preview: null,
})

const handleFileChange = (e) =>{
    const tray = e.target.files;
    const file = tray[0];
    if (file){
    const url = URL.createObjectURL(file);
    setAddData(prev=>({
        ...prev,
        addFile: file,
        preview: url,
    }))
    }
}

const handleRemove = () =>{
    setAddData(prev=>({
        ...prev,
        addFile: null,
        preview: null,
    }))
    if(inputRef.current){
        inputRef.current.value = ""
    }
}

const inputRef = useRef(null)
const hasFile = addData.addFile;

return (
    <>
        <section className='addFileWrapper'>
            <section className="addFile">
                <input type="file"
                ref={inputRef} title='add image'
                onChange={handleFileChange}
                className={`addFileTitle ${hasFile ? 'active' : ''}`}
                />
            </section>

            <section>
                <button onClick={handleRemove} title='close image'
                    className={`closeBtn ${hasFile ? 'active': ''}`}>
                    <img src={sign} alt="Close Button"/>
                </button>
            </section>

            <section className="previewWrapper">
                {addData.preview && 
                    (<img src={addData.preview}
                        className='imgPreview'/>)}
            </section>
        </section>
    </>
)}