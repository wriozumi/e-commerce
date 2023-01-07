import React from 'react'

const Rating = ({ value, text, color }) => {
    const ratingClass = (rating, n) => {
        if (rating >= n) return 'fas fa-star';
        else if (rating >= n - 0.5) return 'fas fa-star-half-alt';
        return 'far fa-star';
    }

  return (
    <div className='rating'>
      <span>
        <i style={{ color }} className={ratingClass(value, 1)}></i>
      </span>
      <span>
        <i style={{ color }} className={ratingClass(value, 2)}></i>
      </span>
      <span>
        <i style={{ color }} className={ratingClass(value, 3)}></i>
      </span>
      <span>
        <i style={{ color }} className={ratingClass(value, 4)}></i>
      </span>
      <span>
        <i style={{ color }} className={ratingClass(value, 5)}></i>
      </span>
      <span>{ text && text }</span>
    </div>
  )
}

export default Rating
