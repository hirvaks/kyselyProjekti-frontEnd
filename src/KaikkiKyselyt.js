import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from "@mui/material";
import kyselyData from "./component/data/radio-test.json"
import "./index.css"
import App from "./App";
import Text from "./component/Text";
import ReactList from 'react-list';
import ReactDOM from 'react-dom';

/*
Tarvittava importti tekstikenttään radio vaihtoehdossa:
import Input from '@mui/material/Input';

Pelkistetty esimerkki:
<FormControlLabel label={<Input placeholder="Jokin muu, mikä?"/>}/>
*/

function KaikkiKyselyt(props) {


  const [kyselytData] = useState([kyselyData.kyselyt])
  const [kysleyId, setKysleyId] = useState('')
  const [haluttuKysley, setHaluttuKysley] = useState('')

  const submit = () => {
    alert('Tulosten näyttäminen vaiheessa')
  }

  const inputChanged = (event) => {
    setKysleyId(event.target.value)
  }

  const [tulostaKysely, setTulostaKysely] = useState(false)



  const haeKysely = (event) => {

    event.preventDefault();

    setTulostaKysely(false)

    if (kysleyId !== "") {

      setHaluttuKysley(kyselytData.[0].[kysleyId])

      setTulostaKysely(true)
    } else {
      
      
    }
  }





  const Idt = [0, 1, 2, 3];


  const listIdt = Idt.map((id) =>


 <div>
    <p> 
      
      <button name="kyselyId" defaultValue={kysleyId}   onClick={haeKysely}> Kysely {id} </button> 
      
      </p>
      </div>

  )



  if (tulostaKysely === false) {
    return (

      <div>

        <h1>Kaikki Kyselyt</h1>

        <p> <ul> {listIdt} </ul> </p>

      </div>

    )
  }


  else {
    return (
      <div>
        <button onClick={() => setTulostaKysely(false)}>Valitse toinen kysely</button>
        <Text kysely={haluttuKysley} />
      </div>
    )
  }




}
export default KaikkiKyselyt