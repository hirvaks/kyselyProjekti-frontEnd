import React from "react";
import "./index.css";
// import { useNavigate } from "react-router-dom";







export class KyselyListElement extends React.Component {

  constructor(props){
    super(props);
    document.title = "Kysely 1";
    

  }

  

  

  
  render() {
    /* let navigate= useNavigate();
    let handleSubmit = (e) => {
      e.preventDefault();
      navigate('/Vastaus1', { replace : true})
      window.scrollTo(0, 0);
      
    };
    */
    let kyselyList = [{question: "apples or bananas?", name:"a"}, 
                      {question:"mangos or pineapples?", name:"b"},
                      {question: "dragonfruit or kiwis?", name:"c"},
                      { question: "pears or cherries?", name:"d"}
                    ];
    let listElements = kyselyList.map((elem) => {
      return [ 
        (<h2 class="form-titleh2 text-color">{elem.question}</h2>),
        (<input class="form-field text-color" type="text" placeholder="Kirjoita vastauksesi tähän" name={elem.name}/>)
      ];
    });
    return (
      <div class="form-container">
        <h1 class="form-titleh1 text-color">Kysely 1: "Minusta kaikista parasta on..."</h1>
        <form class="register-form"  /* onSubmit={handleSubmit}*/ > 
        {listElements}

        <button class="form-button" type="submit">
          Lähetä
        </button>

        <label class="form-checkbox-label text-color">
  <input class="form-checkbox" type="checkbox" name="checkbox" />
  Berries
</label>

<label class="form-checkbox-label text-color">
  <input class="form-checkbox" type="checkbox" name="checkbox-checked" checked />
  Cherries
</label>

<label class="form-checkbox-label text-color">
  <input class="form-checkbox" type="checkbox" name="checkbox" />
  Muu, Mikä?<div >
  <input class="form-field text-color" type="text" placeholder="Kirjoita vastauksesi tähän"/>
</div>
</label>



<label class="container text-color">One
  <input type="radio" checked="checked" name="radio"/> 
  <span class="checkmark"></span>
</label>

<label class="container text-color">Two
  <input type="radio"  checked="checked" name="radio"/> 
  <span class="checkmark"></span>
</label>

<label class="container">Three
  <input type="radio" name="radio" checked="checked"/>
  <span class="checkmark"></span>
</label>


      

        </form>


        </div>  
      
    );
    
  }

 

}




