import React from 'react';
import './Person.css';



const paragraf = (props) => {



return(


    
<div className = "Person">



<p onClick = {props.click2}>Ime fudbalera: {props.name}</p>

 <h3 onClick = {props.click2}>Visina fudbalera {props.age} years</h3>

  <h5>{props.children}</h5>

   <input type = "text" onChange = {props.changed2} value = {props.name} />


   

</div>


);
}







 export default paragraf;