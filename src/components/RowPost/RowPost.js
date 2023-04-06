import React from 'react'
import { useEffect, useState } from "react"
import "./RowPost.css"
import axios from "../../axios"
import { APY_KEY, imageUrl } from '../../constents/constents'
import { ORGINALS } from '../../urls'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results)
    }).catch(err => {
      console.log("error is" + err)

    })
  }, [])


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='poster'>
        {movies.map((obj) =>
          <img className={props.isSmall ?"smallPoster" :'posters'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        )}

      </div>
    </div>
  )
}

export default RowPost