import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/filter/Action';
import './Style.css';


class ComponentFilter extends Component {

  state =  {
    namePlayer: '',
    positionPlayer: '',
    agePlayer: ''
  };
  
  search = () => {
    const { namePlayer: name, positionPlayer: position, agePlayer: age } = this.state;
    this.props.changeFilter({ name, position, age });
  };

  nameChange = e => {
    this.setState({ namePlayer: e.target.value.replace(/[^a-zA-Z-0-9]/g, '') });
  };

  ageChange = e => {
    const years = e.target.value;
    const age = years ?
                years >= 40 ? 40 : (years <= 18 ? 18 : years)
                : '';

    this.setState({ agePlayer: age.toString() });
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    const { namePlayer, positionPlayer, agePlayer }= this.state;
    return (
      <div className="Filter" >

        <input type="text" name="namePlayer" value={namePlayer} onChange={this.nameChange} 
          placeholder="Name" />

        <select name="positionPlayer" onChange={this.change} value={positionPlayer}>
          <option value="">Position</option>
          {positions.map(p => <option key={p} value={p}>{p}</option>)}
        </select>

        <input name="agePlayer" type="number" min={18} max={40} value={agePlayer}
          className="AgeInput"
          onChange={this.ageChange}
          placeholder="Age" />

        <button name="search" onClick={this.search}>Search</button>

      </div>
    );
  }
}

const positions = [
  'Attacking Midfield',
  'Central Midfield',
  'Centre-Back',
  'Centre-Forward',
  'Defensive Midfield',
  'Keeper',
  'Left Midfield',
  'Left Wing',
  'Left-Back',
  'Right-Back'
];


export default connect(null, { changeFilter })(ComponentFilter);