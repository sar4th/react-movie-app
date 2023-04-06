import React from 'react'
import Youtube from "react-youtube"
import { useEffect, useState } from "react"
import "./RowPost.css"
import axios from "../../axios"
import { APY_KEY, imageUrl } from '../../constents/constents'
import { ORGINALS } from '../../urls'
function RowPost(props) {
  const [url,setUrl]=useState("")
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results)
    }).catch(err => {
      console.log("error is" + err)

    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
const handleMovie=(id)=>{
axios.get(`movie/${id}/videos?api_key=${APY_KEY}&language=en-US`).then((response)=>{
if(response.data.results.length!==0){
  setUrl(response.data.results[0])
}else{
  console.log("No trailer avilable");
}
})
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='poster'>
        {movies.map((obj) =>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?"smallPoster" :'posters'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        )}

      </div>
          {url && <Youtube opts={opts} videoId={url.key}/>}

    </div>
  )
}

export default RowPost