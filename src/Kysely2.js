import React, { useState } from "react";
import "./index.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import { Button } from "@mui/material";

// import { useNavigate } from "react-router-dom";


export default function Kysely2() {

  document.title = "Kysely 2";

  const [kysymys1, setKysymys1] = React.useState({ question: '1) Mikä seuraavista on paras ohjelmointikieli:', option: '', answer: '', input: '' });
  const [kysymys2, setKysymys2] = React.useState({ question: '2) Mikä seuraavista on paras koodieditori:', option: '', answer: '', input: '' });
  const [kysely, setKysely] = React.useState([]);

  const handleChange1 = (event) => {
    setKysymys1({ ...kysymys1, option: event.target.value, answer: event.target.name, input: '' });
  };

  const k1Input = (event) => {
    setKysymys1({ ...kysymys1, option: event.target.name, answer: event.target.value, input: event.target.value });
  };

  const handleChange2 = (event) => {
    setKysymys2({ ...kysymys2, option: event.target.value, answer: event.target.name, input: '' });
  };

  const k2Input = (event) => {
    setKysymys2({ ...kysymys2, option: event.target.name, answer: event.target.value, input: event.target.value });
  };

  // let navigate = useNavigate();

  const submit = () => {
    if (kysymys1.option !== '' && kysymys2.option !== '') {
      setKysely([{ kysymys1, kysymys2 }, ...kysely])
      console.log('########################## SUBMIT')
      setKysymys1({ question: '1) Mikä seuraavista on paras ohjelmointikieli:', option: '', answer: '', input: '' })
      setKysymys2({ question: '2) Mikä seuraavista on paras koodieditori:', option: '', answer: '', input: '' })
      /* navigate('/Vastaus2', { replace : true})
      window.scrollTo(0, 0); */
      setVastaukset(true)
    } else {
      alert('Answer to all questions before submitting')
    }
  }
  const [vastaukset, setVastaukset] = useState(false)

  if (!vastaukset) {
    return (
      <div class="form-container">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{kysymys1.question}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
            value={kysymys1.option}
            onChange={handleChange1}
          >
            <FormControlLabel name="Java" value="1a" control={<Radio />} label="Java" />
            <FormControlLabel name="Python" value="1b" control={<Radio />} label="Python" />
            <FormControlLabel name="JavaScript" value="1c" control={<Radio />} label="JavaScript" />
            <FormControlLabel name="C#" value="1d" control={<Radio />} label="C#" />
            <FormControlLabel name="" value="1e" control={<Radio />} label={
              <Input placeholder="Jokin muu, mikä?" name="1e" value={kysymys1.input} onClick={k1Input} onChange={k1Input} />}
            />
          </RadioGroup>

          <br></br>

          <FormLabel id="demo-radio-buttons-group-label">{kysymys2.question}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
            value={kysymys2.option}
            onChange={handleChange2}
          >
            <FormControlLabel name="Eclipse" value="2a" control={<Radio />} label="Eclipse" />
            <FormControlLabel name="Visual Studio Code" value="2b" control={<Radio />} label="Visual Studio Code" />
            <FormControlLabel name="NotePad++" value="2c" control={<Radio />} label="NotePad++" />
            <FormControlLabel name="" value="2d" control={<Radio />} label={
              <Input placeholder="Jokin muu, mikä?" name="2d" value={kysymys2.input} onClick={k2Input} onChange={k2Input} />}
            />
          </RadioGroup>
          <Button onClick={submit}>Lähetä vastaukset ja tutki tuloksia</Button>
        </FormControl>
      </div>
    )
  }
  else {
    return (
      <div class="form-container">
        <Button class="form-button" onClick={()=>{setVastaukset(false)}} >Täytä uusi kysely</Button>
        {kysely.map((sessio, index) => {
            return (
              <div key={index}>
                <br></br>
                
                <h1>Vastaajan {index + 1} vastaukset</h1>
                <h2>{sessio.kysymys1.question}</h2>
                <p>{sessio.kysymys1.answer}</p>
                
                <h2>{sessio.kysymys2.question}</h2>
                <p>{sessio.kysymys2.answer}</p>

                <br></br>
              </div>
              
            );
          })
          }
      </div>
    );
  }
}