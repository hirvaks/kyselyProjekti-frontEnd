import React from 'react';
import ReactDOM from 'react-dom';
import Kysely1 from './Kysely1';
import Vastaus1 from './Vastaus1';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {KyselyListElement} from './KyselyTesti';





ReactDOM.render(
  <React.StrictMode>
    

    <BrowserRouter>
    <Routes>
        <Route path="/">
          
          <Route index path="Kysely1" element={<Kysely1  />} />
          <Route path="Vastaus1" element={<Vastaus1 />} />
          <Route path="KyselyTesti" element={<KyselyListElement />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          
        </Route>
      </Routes>

    </BrowserRouter>

    
    
  </React.StrictMode>,
  
  
  document.getElementById('root')
);
