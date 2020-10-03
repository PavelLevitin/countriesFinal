import React from 'react';
import './card-list.style.css'
import  {Card} from '../card/card.component'

export const Cardlist =(props)=>{
   
return (
     <div className='card-list'>
          
        
         {props.states.map(state=>(
            <Card key={state.alpha2Code} state={state}/>
          ))}
        
      </div>

       )
       
}