import React from "react";
import "./index.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function Kysely2() {

  document.title = "Kysely 2";

  const [kysymys1, setKysymys1] = React.useState('');
  const [kysymys2, setKysymys2] = React.useState('');

  const handleChange = (event) => {
    setKysymys1(event.target.value);
  };

  const handleChange2 = (event) => {
    setKysymys2(event.target.value);
  };

  return (
    <div class="form-container">
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">1. Valitse vastaus</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                value={kysymys1}
                onChange={handleChange}
            >
                <FormControlLabel value="1a" control={<Radio />} label="a" />
                <FormControlLabel value="1b" control={<Radio />} label="b" />
                <FormControlLabel value="1c" control={<Radio />} label="c" />
            </RadioGroup>

            <FormLabel id="demo-radio-buttons-group-label">2. Valitse toinen vastaus</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                value={kysymys2}
                onChange={handleChange2}
            >
                <FormControlLabel value="2a" control={<Radio />} label="a" />
                <FormControlLabel value="2b" control={<Radio />} label="b" />
                <FormControlLabel value="2c" control={<Radio />} label="c" />
            </RadioGroup>
        </FormControl>
    </div>
  )

}