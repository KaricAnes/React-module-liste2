import React from 'react';
import './Person.css';



const person = (props) => {



return(

<div className = "Person">



<p onClick = {props.click}>I am {props.name}</p>

 <h3 onClick = {props.click}>My age is: {props.age} years</h3>

  <h5>{props.children}</h5>

   <input type = "text" onChange = {props.changed} value = {props.name} />


   

</div>


);
}







 export default person;