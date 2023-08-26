import React, { createContext, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {


    const [image, setImage] = useState("");

    return (
        <ImageContext.Provider
            value={{
                image,
                setImage
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContext;