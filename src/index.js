import React from 'react';
import ReactDOM from 'react-dom';
import Kysely1 from './Kysely1';
import Kysely2 from './Kysely2';
import Vastaus1 from './Vastaus1';
import Vastaus2 from './Vastaus2';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import {KyselyListElement} from './KyselyTesti';

// Linkit lisätty kehityksen ajaksi helpon navigoinnin vuoksi

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Link to="/">Home "/"</Link>{' '} <br/>
      <Link to="Kysely1">Kysely 1</Link>{' '} <br/>
      <Link to="Kysely2">Kysely 2</Link>{' '} <br/>
      <Link to="KyselyTesti">Kyselytesti</Link>{' '} <br/>
      <br/>

      <Routes>
        <Route index path="Kysely1" element={<Kysely1  />} />
        <Route index path="Kysely2" element={<Kysely2  />} />
        <Route path="Vastaus1" element={<Vastaus1 />} />
        <Route path="Vastaus2" element={<Vastaus2 />} />
        <Route path="KyselyTesti" element={<KyselyListElement />} />
      </Routes>

      {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}

    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
