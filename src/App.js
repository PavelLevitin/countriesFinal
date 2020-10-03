import React ,{Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/search-box.component';
import {Heading} from './components/projectHeading/heading.component';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      allStates:[],
      searchfield :''

    }
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response =>response.json())
    .then(allCountries=>this.setState({allStates :allCountries}))

  }
  render(){
    const {allStates , searchfield} = this.state;
    const filteredCountries = allStates.filter(oneState =>
      oneState.name.toLowerCase().includes(searchfield.toLowerCase()))
     
   return (
   
        <div className="App">
          <Heading/>
          <SearchBox
           placeholder  = "Search countries"
           handlechange = {e=>this.setState({searchfield:e.target.value})}
          />
           <Cardlist states={filteredCountries}/> 
        </div>
   )
  }


}

export default App;
