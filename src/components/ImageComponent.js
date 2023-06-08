import axios from "axios"
import { useEffect, useState } from "react"
import PhotoCard from "./ImgCard"
import { api_key } from "../api/config"

const SearchPhotosComponent = ({ searchText }) => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${searchText}&per_page=100&format=json&nojsoncallback=1`)
                setPhotos(response.data.photos.photo)
            
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [searchText])
    
    return (
        <div>
            <div>
                <PhotoCard data = {photos}/>
            </div>
        </div>
    )
}

export default SearchPhotosComponent