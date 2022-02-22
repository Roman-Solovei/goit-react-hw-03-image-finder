import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ imageUrl, tags }) { 
    return (
        <li className={s.ImageGalleryItem}>
            <img className={s.ImageGalleryItemImage} src={imageUrl} alt={ tags } />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}