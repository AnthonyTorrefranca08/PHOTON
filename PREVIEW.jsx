import React, { useState, useRef } from 'react'
import './PREVIEW.css'
import sign from '../../assets/Images/plusSign.png'

export default function PREVIEW() {
    const [addFile, setAddFile] = useState({
        addFile: null,
        preview: null,
    })

    const inputRef = useRef(null);

    
    const handleFileChange = (e) =>{
        const tray = e.target.files;
        const file = tray[0];
        if (file){
        const url = URL.createObjectURL(file);
        setAddFile(prev=>({
            ...prev,
            addFile: file,
            preview: url,
        }))
        }
    }

    const handleRemove = () =>{
        console.log("test");
        setAddFile(prev=>({
            ...prev,
            addFile: null,
            preview: null,
        }))

            console.log(inputRef.current.value);

        if(inputRef.current){
            inputRef.current.value = null;            
        }
    }

    const fileAdded = addFile.addFile;

    return (
    <>
        <section className='addFileWrapper'>
            <section className="addFile">
                <input type="file"
                onChange={handleFileChange}
                ref={inputRef}
                className={`addFileTitle ${fileAdded ? 'active' : ''}`}
                />
            </section>

            <section>
                <img src={sign} alt="Close Button"
                    onClick={handleRemove} 
                    className={`closeBtn ${fileAdded ? 'active': ''}`}
                    />
            </section>

            <section className="adjustmentWrapper">
                {addFile.preview && 
                    (<img src={addFile.preview}
                        className='imgPreview'/>)}
            </section>
        </section>
    </>
    )
}