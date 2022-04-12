import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";



export default function Kysely1() {

  document.title = "Kysely 1";

  let navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/Vastaus1', { replace : true})
    window.scrollTo(0, 0);
    
  };
  return (
    <div class="form-container">
      <h1 class="form-titleh1 text-color">Kysely 1: "Minusta kaikista parasta on..."</h1>
      <form class="register-form"  onSubmit={handleSubmit}>
      <input
          id="last-name"
          class="form-field-nimi text-color"
          type="text"
          placeholder="Syötä nimesi"
          name="lastName"
        />
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <h2 class="form-titleh2 text-color">Mikä on paras yhtye?</h2>
        <input
          id="first-name"
          class="form-field text-color"
          type="text"
          placeholder="Kirjoita vastauksesi tähän"
          name="Vastaus"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <h2 class="form-titleh2 text-color">Mikä on paras musiikkikappale?</h2>
        <input
          id="first-name"
          class="form-field text-color"
          type="text"
          placeholder="Kirjoita vastauksesi tähän"
          name="Vastaus"
        />
        <h2 class="form-titleh2 text-color">Mikä on paras elokuva?</h2>
        <input
          id="first-name"
          class="form-field text-color"
          type="text"
          placeholder="Kirjoita vastauksesi tähän"
          name="Vastaus"
        />
        <h2 class="form-titleh2 text-color">Mikä on paras ruoka?</h2>
        <input
          id="first-name"
          class="form-field text-color"
          type="text"
          placeholder="Kirjoita vastauksesi tähän"
          name="Vastaus"
        />
        <h2 class="form-titleh2 text-color">Mikä on paras urheilulaji?</h2>
        <input
          id="first-name"
          class="form-field text-color"
          type="text"
          placeholder="Kirjoita vastauksesi tähän"
          name="Vastaus"
        />

    

        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}

        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        
        <button class="form-button" type="submit">
          Lähetä
        </button>
      </form>

    </div>
  );
}
