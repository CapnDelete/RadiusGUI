import React from 'react';
import { Container } from 'react-bootstrap'
import Things from './presentational/things/Things'

//** Components */
import Navigation from './presentational/navbar/Navigation';

//** CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Thing from './presentational/things/Thing';

const baseUrl = 'http://localhost:5001/api/'
const thingApiUrl = baseUrl + 'Thing'

function App() {
  return (
    <div>
      <Navigation />
      <div className="app">
        <Container>
          <Things apiUrl={thingApiUrl}/>
        </Container>
      </div>
    </div>
  );
} 

export default App;
