import React from "react"
import LightboxReact from 'react-image-lightbox';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'react-image-lightbox/style.css';

const Lightbox = ({
    image,
    handleClose,
    handlePrevRequest,
    handleNextRequest,
    imageTitle,
    imageCaption
}) => {
    const gatsbyImage = getImage(image)
    const mainSrc = gatsbyImage?.images?.fallback?.src
    return (
        <LightboxReact
            enableZoom={true}
            clickOutsideToClose={true}
            mainSrc={mainSrc || ''}
            nextSrc={''}
            prevSrc={''}
            imageTitle={imageTitle || ''}
            imageCaption={imageCaption || ''}
            onCloseRequest={handleClose}
            onMovePrevRequest={handlePrevRequest()}
            onMoveNextRequest={handleNextRequest()}
        />
    )
}

export default Lightbox