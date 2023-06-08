import React from "react"
import './style/ImgCard.css'

const PhotoCard = (props) => {
    const photos = props.data
    return (
        <div className="container">
            <div className="row">
                {photos.map((photo) => (
                    <div className="pictureBox col-lg-3 col-md-4 col-sm-6" key={photo.id}>
                        <img className="picture rounded" src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotoCard