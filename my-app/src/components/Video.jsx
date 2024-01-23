import React from 'react'
import "./Video.css"

export default function Video({title,discription}) {
   let link="https://loremflickr.com/400/300/"+title;
  return (
    <div className="container">
    <div className="card">
      <div className="container-card bg-green-box">
         <img src={link} alt="img" className="cardimg" /> 
        <p className="card-title">{title}</p>
        <p className="card-description">
         {discription}
        </p>
      </div>
    </div>
   
    
</div>

  )
  
}
