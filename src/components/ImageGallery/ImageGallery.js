import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem"

export default function ImageGallery({ images }) { 
    return (
        <ul className={s.ImageGallery}>
            {
                images.map(image => { 
                    // console.log(image)
                    return (
                        <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} tags={ image.tags }/>
                    )
                })
            }    
        </ul>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.array,
}
