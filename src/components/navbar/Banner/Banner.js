import React, { useEffect,useState} from 'react'
import "./Banner.css"
import axios from '../../../axios'
import {APY_KEY,imageUrl} from "../../../constents/constents"
function Banner() {
    const [movie,setMovie] = useState([])
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${APY_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            const randomIndex = Math.floor(Math.random() *20) + 1;
            setMovie(response.data.results[randomIndex])
        })
   
    }, [])
    
    
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}} className='banner'>
            <div className='content'>
                <h1 className='titile'>{movie ? movie.title:""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview :""}</h1>

            </div>
            <div className="shadow">
                
            </div>

        </div>
    )
}

export default Banner