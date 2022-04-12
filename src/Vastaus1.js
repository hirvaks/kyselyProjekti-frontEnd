import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Vastaus1() {

  document.title = "Kiitos vastauksestasi!";

  let navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/Kysely1', { replace : true})
    window.scrollTo(0, 0);
    
  };

  return (
    <div class="form-container">
        <p class="success-message">Kiitos vastauksestasi! <br></br>Tallennetut vastaukset näkyvät alta.</p>
      <h1 class="form-titleh1">Kysely 1: "Minusta kaikista parasta on..."</h1>
      <form class="register-form" onSubmit={handleSubmit}>
      <input
          id="last-name"
          class="form-field-nimi"
          type="text"
          placeholder="Anni"
          name="lastName"
        />
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <h2 class="form-titleh2">Mikä on paras yhtye?</h2>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Hevisaurus"
          name="Vastaus"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <h2 class="form-titleh2">Mikä on paras musiikkikappale?</h2>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Hevisaurus - Räyh!"
          name="Vastaus"
        />
        <h2 class="form-titleh2">Mikä on paras elokuva?</h2>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Muumipeikko ja Pyrstötähti"
          name="Vastaus"
        />
        <h2 class="form-titleh2">Mikä on paras ruoka?</h2>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Makaronilaatikko"
          name="Vastaus"
        />
        <h2 class="form-titleh2">Mikä on paras urheilulaji?</h2>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Jääkiekko"
          name="Vastaus"
        />

        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}

        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        
        <button class="form-button" type="submit">
          Takaisin
        </button>
      </form>
    </div>
  );
}
