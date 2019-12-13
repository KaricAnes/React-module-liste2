import React, { Component } from 'react';

import Verson from './Person/Person';

import './App.css';

import Par from './Person/Paragraf';


class App extends Component {


//@@@@@@@@@@@@@@@@@@@@@@@@@
state = {

  igraci: [
  
  {id: 'klm1', name: 'Dzeko', age: '1.85', },
  {id: 'klm2', name : "Ronaldo", age: "1.90"},
  {id: 'klm3', name : "Messi", age: "1.75"}
  
  ],
  
  otherState2: 'someValue',
  
  showPersons2: true,

  persons: [

    {id: 'abc1', name: 'Maxx', age: '28', },
    {id: 'abc2', name : "Anes", age: "23"},
    {id: 'abc3', name : "Safet", age: "21"}
    
    ],
    
    otherState: 'someValue',
    //Ovo smo namjerno settali na false
    showPersons: true
    }

  
//@@@@@@@@@@@@@@@@@@@@@@@@@






//state pocetni ----------------------------------------------------------------------------------







//Funkcija promijenjenoIme ------------------------------------------------------------###########


promijenjenoIme = (event, id) =>  {



const IndexOsobe = this.state.persons.findIndex(i => {

 
return i.id === id;


});



const roki = {
  ...this.state.persons[IndexOsobe]

};

roki.name = event.target.value;


const licnosti = [...this.state.persons];
licnosti[IndexOsobe] = roki;




//novi kod za two way binding-------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






  this.setState({ persons:licnosti })
   
  
}

//Funkcija promijenjenoIme ------------------------------------------------------------








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//Funkcija promijenjenoIme ------------------------------------------------------------###########


promijenjenoIme2 = (event, id2) =>  {



  const IndexOsobe2 = this.state.igraci.findIndex(j => {
  
   
  return j.id === id2;
  
  
  });
  
  
  
  const roki2 = {
    ...this.state.igraci[IndexOsobe2]
  
  };
  
  roki2.name = event.target.value;
  
  
  const licnosti2 = [...this.state.igraci];
  licnosti2[IndexOsobe2] = roki2;
  
  
  
  
  //novi kod za two way binding-------------------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  
  
  
  
  
  
    this.setState({ igraci:licnosti2 })
     
    
  }
  
  //Funkcija promijenjenoIme ------------------------------------------------------------


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

















//Funkcija togglePersonsHandler ------------------------------------------#######################

togglePersonsHandler = () => {

const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});


}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

togglePersonsHandler2 = () => {

  const doesShow2 = this.state.showPersons2;
  this.setState({showPersons2: !doesShow2});
  
  
  
  }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//Funkcija togglePersonsHandler ---------------------------------------------#################
//Zelimo da uklonimo objeakt iz naseg arraya kada kliknemo na paragraf


deletePersonHandler = (personIndex) => {

const narod = [...this.state.persons];
narod.splice(personIndex, 1);

this.setState({persons: narod});

}

//-----------------------------------------------------------------------------------



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
deletePersonHandler2 = (personIndex2) => {

  const narod2 = [...this.state.igraci];
  narod2.splice(personIndex2, 1);
  
  this.setState({igraci: narod2});
  
  }



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







  render(){




let osobe = null;



if (this.state.showPersons){

  osobe = (

    <div>  

      {this.state.persons.map((x, index) => {

      return <Verson
              click = {() => this.deletePersonHandler(index)}
              changed = {(event) => this.promijenjenoIme(event, x.id)}
              name = {x.name}
              age = {x.age}
              key = {x.id}
              
              
              />

       })}

   </div>

  );
}



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let osobe2 = null;

if (this.state.showPersons2){

  osobe2 = (

    <div>  



      {this.state.igraci.map((y, index2) => {

      return <Par
              click2 = {() => this.deletePersonHandler2(index2)}
              changed2 = {(event2) => this.promijenjenoIme2(event2, y.id)}
              name = {y.name}
              age = {y.age}
              key = {y.id}
              
              
              />

       })}

   </div>

  );
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







//Inline styling ---------------------##########

const style = {

backgroundColor: 'white',
font: 'inherit',
border: '1px solid blue',
padding: '8px',
cursor: 'pointer'



};
//Inline styling ---------------------


  return (










    <div className="App">
    



<button style = {style} onClick = {this.togglePersonsHandler}>Toggle Persons</button>

<button style = {style} onClick = {this.togglePersonsHandler2}>IgranjeIgracima</button>
    


{osobe}
{osobe2}


 
  
 </div> 
  );
  
  }
}



export default App;
