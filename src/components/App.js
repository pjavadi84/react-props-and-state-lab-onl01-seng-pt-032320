import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // We need to pass a target as an object pointing to the onChangeType callback function JSX event. 
  // We pass a target object because we want to target the element which may contain group of other nested 
  // element inside to produce same behavior, to be selected. We want to say when this "target" being 
  // selected we want to update the filter state. "..." implies that anything that is inside this "filter"
  // state MUST stay out, and only the type should be selected and passed as a second argument, to be 
  // THE VALUE that being seleced by the user inside the DOM. 
  onChangeType = ({target: value}) => {
    // 
    
    this.setState({
      filters: {...this.state.filters, type: value}
    })
  }

  fetchPets = () => {
    this.endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      this.endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(this.endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  }

  onAdoptPet = petId=>{
    const pets = this.state.pets.map(p => {
      if(p.id === petId){
        return {...p, isAdopted: true}
      }else{
        return p
      }
      
    })

    this.setState({pets: pets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
