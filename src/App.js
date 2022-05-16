import React, { useState } from "react"
import "./index.css"
import kyselyData from "./component/data/radio-test.json"
import Text from "./component/Text"
import KaikkiKyselyt from "./component/KaikkiKyselyt"

//import  useHistory  from "react-router-dom";

// usehistory current error

function App() {

    const [kyselytData] = useState([kyselyData.kyselyt])

    const [kysleyId, setKysleyId] = useState('')

    const [haluttuKysley, setHaluttuKysley] = useState('')

    const inputChanged = (event) => {
        setKysleyId(event.target.value-1)
    }

    const [tulostaKysely, setTulostaKysely] = useState(false)
    const [tulostaKaikkiKyselyt, setTulostaKaikkiKyselyt] = useState(false)

    const haeKysely = (event) => {
        event.preventDefault();
        setTulostaKaikkiKyselyt(false)
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
            <div class="form-container">
                <h1 class="form-titleh1 text-color">Kysely Sovellus</h1>
                <p class="form-titleh2 text-color">Saatavilla olevien kyselyiden määrä: {kyselytData[0].length}</p>
                <p class="form-titleh2 text-color">Valitse kysely syöttämällä kyselyn ID/numero</p>
                <form class="form-titleh2 text-color form-field " onSubmit={haeKysely}>
                    Kyselyn ID: < input type="number" name="kyselyId" defaultValue={kysleyId} onChange={inputChanged} min="1" max={kyselytData[0].length} /><br></br>
                    <input type="submit" value="Submit" />
                </form>
                <button class="" onClick={haeKaikkiKyselyt}>Katso kaikki kyselyt</button>
            </div>
        )
    } else if ((tulostaKysely === true) && (tulostaKaikkiKyselyt === true)) {
        return (
            <div class = "form-container">
                <button onClick={() => setTulostaKysely(false)}>Takaisin</button>
                <KaikkiKyselyt kyselyt={kyselytData[0]} />
            </div>
        )
    } else {
        return (
            <div class = "form-container">
                <button onClick={() => setTulostaKysely(false)}>Valitse toinen kysely</button>
                <Text kysely={haluttuKysley} />
            </div>
        )
    }
}
export default App