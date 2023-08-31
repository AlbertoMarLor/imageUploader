import React, { useRef, useState } from 'react'
import "./Home.css"
import mountain from '../assets/mountain.png'
import { useNavigate } from 'react-router-dom'
import { Global } from "../helpers/Global"
import useImage from "../hooks/useImage"


export const Home = () => {

    const { setImage } = useImage();
    const [extension, setExtension] = useState(false);

    const navigate = useNavigate();

    const handleFile = async (files) => {

        const formData = new FormData();
        formData.append('file0', files[0]);

        const uploadRequest = await fetch(Global.url + "image/upload", {
            method: "POST",
            body: formData
        })

        const data = await uploadRequest.json();
        if (data.status === "error") {
            return setExtension(true);
        }

        setImage(data.image.image);


        navigate("/uploading");
    }


    const [dragActive, setDragActive] = useState(false);

    const inputRef = useRef(null);


    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    }

    const handleChange = e => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files);
        }
    }

    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <>
            <div className='card'>
                <form id='form-file-upload' onDragEnter={handleDrag} onSubmit={(e) => {
                    e.preventDefault()
                }} >
                    <input ref={inputRef} type="file" id='file' name='file0' onChange={handleChange} />
                    <label id='label-file-upload' htmlFor="file" className={dragActive ? "drag-active" : ""}>
                        <div className='upload'>
                            {extension ? <h2 className='wrong' >Wrong file extension!</h2> : <h2>Upload your image</h2>}
                            <span>File should be Jpeg, Png...</span>
                        </div>
                        <div className='drop' >
                            <div className="insideDrop">
                                <img src={mountain} />
                                <p>Drag & Drop your image here</p>
                            </div>

                        </div>
                        <div className='button'>
                            <p>Or</p>
                            <button onClick={onButtonClick}>Choose a file</button>
                        </div>
                    </label>
                    {dragActive && <div id='drag-file-element' onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} >
                    </div>}
                </form>
            </div>
            <footer>
                <p>Made with React - Alberto Martín Lorencés - </p>
                <a href='https://albmarlor-web.onrender.com/' target='_blank' className='portfolio' > Portfolio</a>
            </footer>
        </>
    )
}
