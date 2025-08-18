import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/Images/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id}=useParams();
  const navigate= useNavigate();
  const [videoAPI,setvideoAPI]=useState({
    name:"",
    key:"",
    published_at: "",
    type:""
  })
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU0OGYyZmUwNTVjYjIxYzYxNDcyNGE2MjhlYzZmNCIsIm5iZiI6MTc1MzgwODk0NS4xNCwic3ViIjoiNjg4OTAwMzFjNDg5YzYxMTA3YTdkMGQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.i0uPBt9EUh-XfJRNhtrCWH7DToymHOTqmmJoMUNstTE'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res =>  setvideoAPI(res.results[0]))
    .catch(err => console.error(err));
}, [])

  return (
    <div className='Player'>
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${videoAPI.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="play-info">
        <p>{videoAPI.published_at.slice(0,10)} </p>
         <p>{videoAPI.name}</p>
        <p>{videoAPI.type}</p>
       
      </div>
      </div>
      )
}

export default Player