import React, { useState } from "react"
import "./index.css"
import kyselyData from "./component/data/radio-test.json"
import Text from "./component/Text"

import KaikkiKyselyt from "./KaikkiKyselyt";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



//import  useHistory  from "react-router-dom";



// usehistory current error

function App() {



    const [kyselytData] = useState([kyselyData.kyselyt])

    const [kysleyId, setKysleyId] = useState('')

    const [haluttuKysley, setHaluttuKysley] = useState('')

    const inputChanged = (event) => {
        setKysleyId(event.target.value)
    }

    const [tulostaKysely, setTulostaKysely] = useState(false)
    const [tulostaKaikkiKyselyt, setTulostaKaikkiKyselyt] = useState(false)
  

    const haeKysely = (event) => {

        event.preventDefault();

        setTulostaKysely(false)

        if (kysleyId !== "") {

            setHaluttuKysley(kyselytData[0][kysleyId])

            setTulostaKysely(true)
        } else {
            alert("Syötä ID!")
        }
    }
   
 

    const haeKaikkiKyselyt = (event) => {

        

        event.preventDefault();

        setTulostaKysely(true);
        setTulostaKaikkiKyselyt(true);
  


        



      

    }













if (tulostaKysely === false) {
    return (
        <div>


            <p>Saatavilla olevien kyselyiden määrä: {kyselytData[0].length}</p>
            <p>Valitse kysely syöttämällä kyselyn ID/numero</p>
            <form onSubmit={haeKysely}>
                Kyselyn ID: <input type="number" name="kyselyId" defaultValue={kysleyId} onChange={inputChanged} min="0" max={kyselytData[0].length - 1} /><br></br>
                <input type="submit" value="Submit" />
            </form>
            <button onClick={haeKaikkiKyselyt}>Katso kaikki kyselyt</button>
            
        </div>

    )
} else if ((tulostaKysely === true) && (tulostaKaikkiKyselyt === true)){

    return (
        <div>
            <button onClick={() => setTulostaKysely(false)}>Takaisin</button>
            <KaikkiKyselyt />
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
export default App