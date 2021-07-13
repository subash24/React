import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const FetchData = () => {

    const [data, setdata] = useState([])
    useEffect(()=>{
            fetchResponse(); 
        },[]
    )
const fetchResponse = async()=>{
    const res= await axios.get('https://jsonplaceholder.typicode.com/albums')
    setdata(res.data);
    console.log(res.data);
}
    return (
        <div>
            {
                data.map(value=>(
                    <ul>
                        <Link to={`/Photos/${value.id}`}><li>{value.title}</li></Link></ul>
                ))
            }
        </div>
    )
}

export default FetchData
