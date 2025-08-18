import React, { useEffect, useState } from 'react'
import './Title.css'
import cards_data from '../../assets/Images/cards/Cards_data'
import { Link } from 'react-router-dom'


const Title = ({title,category}) => {

  const [apiData,setApiData]=useState([])
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU0OGYyZmUwNTVjYjIxYzYxNDcyNGE2MjhlYzZmNCIsIm5iZiI6MTc1MzgwODk0NS4xNCwic3ViIjoiNjg4OTAwMzFjNDg5YzYxMTA3YTdkMGQyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.i0uPBt9EUh-XfJRNhtrCWH7DToymHOTqmmJoMUNstTE'
  }
};
  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  }, [])
  console.log(apiData);
  
  
  return (
    <div className='TitleCards'>
     <h2>{title}</h2>
     <div className="card-list">
      {apiData.map((card,index)=>{
      return <Link to={`/player/${card.id}`} className='card'key={index} >
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
        <p>{card.original_title}</p>
      </Link>
     })}
     </div>
    </div>
  )
}

export default Title