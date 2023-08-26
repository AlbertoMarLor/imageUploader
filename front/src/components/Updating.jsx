import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Updating = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/done")
        }, 3000)
    })

    return (
        <div className='card uploading-card'>
            <h2>Uploading...</h2>
            <div className="bar">
                <div></div>
            </div>

        </div>
    )
}
