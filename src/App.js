import React, { useState } from "react"
import "./index.css"
import kyselyData from "./component/data/radio-test.json"
import Text from "./component/Text"


function App() {

    const [kyselytData] = useState([kyselyData.kyselyt])

    const [kysleyId, setKysleyId] = useState('')

    const [haluttuKysley, setHaluttuKysley] = useState('')

    const inputChanged = (event) => {
        setKysleyId(event.target.value)
    }

    const [tulostaKysely, setTulostaKysely] = useState(false)

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

    if (tulostaKysely === false) {
        return (
            <div>
                <p>Saatavilla olevien kyselyiden määrä: {kyselytData[0].length}</p>
                <p>Valitse kysely syöttämällä kyselyn ID/numero</p>
                <form onSubmit={haeKysely}>
                    Kyselyn ID: <input type="number" name="kyselyId" defaultValue={kysleyId} onChange={inputChanged} min="0" max={kyselytData[0].length - 1} /><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setTulostaKysely(false)}>Valitse toinen kysely</button>
                <Text kysely={haluttuKysley} />
            </div>
        )
    }
}
export default App