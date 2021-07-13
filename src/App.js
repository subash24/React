import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import ArrayProgram from './ArrayProgram';
import Random from './Random'
import FetchData from './FetchData';
import Photos from './Photos'
import VowelCount from './VowelCount';
function App() {
  return (
    <div className="App">
     <h1>Hello Earth</h1>
     <ArrayProgram/>
     <Random/>
     <VowelCount/>
     <BrowserRouter>
     <Switch>
      <Route path='/' exact component={FetchData}/>
      <Route path='/Photos/:id' component={Photos}></Route>
     </Switch>
    
     </BrowserRouter>
     
    </div>
  );
}

export default App;
