import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {this.props.pet.name}{' '}
          {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {/*'♀' OR '♂' */}
            PET NAME
          </a>
          <div className="meta">
            <span className="date">Pet Name: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Pet Age: {this.props.pet.age}</p>
            <p>Pet Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
