import React from 'react';
import './card.style.css'

export const Card=(props)=>(
 
  <div className="card-container">
     
    
    <h3 id={props.state.alpha2Code} key={props.state.alpha2Code}>{props.state.name}</h3>
<img alt="ops"src={props.state.flag}  /> 
<span className="infoContry">Capital    : {props.state.capital}</span>
<span className="infoContry">Population : {props.state.population}</span>
{/* <span className="infoContry">Timezones : {props.state.timezones}</span> */}
  </div>
)



  
  

