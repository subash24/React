import { useEffect,useState } from "react"
import axios from "axios"

const Photos = (Match) => {
    const [photos, setphotos] = useState([{}]);
    useEffect(()=>{
    fetchPhotos();
    },[])
    const fetchPhotos=async()=>{
            const res= await axios.get('https://jsonplaceholder.typicode.com/photos');
            let id = Number(Match.match.params.id);
            const data=res.data.filter(album=>(album.albumId === id))
            console.log(data)
            setphotos(data);
    }
    return (
        <div>
           {
               photos.map((photo)=>(
               <img key={photo.id} src={photo.url} alt={photo.title} width="150"/>
               ))
           }
        </div>
    )
}

export default Photos
