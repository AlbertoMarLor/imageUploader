import React, { useEffect, useState } from 'react'
import greenTick from '../assets/greenTick.png'
import { Global } from "../helpers/Global"
import useImage from "../hooks/useImage"

export const UploadComplete = () => {

    const { image } = useImage();

    const [copied, setCopied] = useState(false)

    const clipboard = () => {
        navigator.clipboard.writeText("http://localhost:3900/api/image/show/" + image)

        setCopied(true)
    }

    return (
        <div className='card'>
            <div className="success">
                <img src={greenTick} alt="Success" />

                {copied ? <h2 className='success'>Copied to clipboard!</h2> : <h2>Uploaded Successfully!</h2>}
            </div>
            <div className="image">
                <img className="response" src={Global.url + 'image/show/' + image} alt="Image uploaded" />
            </div>
            <div className="link">
                <input type="text" value={"http://localhost:3900/api/image/show/" + image} />
                <button className='uploadButton' onClick={clipboard}>Copy Link</button>
            </div>
        </div>
    )
}
