import React, { useContext } from 'react'
import ImageContext from '../context/ImageProvider'

const useImage = () => {
    return useContext(ImageContext)
}

export default useImage;