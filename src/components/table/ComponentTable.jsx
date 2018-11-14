import React from 'react';
import { connect } from 'react-redux';
import { filterDataPlayers } from '../../redux/table/reselect';
import './Style.css';

const ComponentResult = (props) => {
  return <table className="result">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Team</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {props.listPlayer.map((player, index) => {
        return <tr key={index}>
          <td>{player.name}</td>
          <td>{player.position}</td>
          <td>{player.team}</td>
          <td>{player.age}</td>
        </tr>
      })}
    </tbody>
  </table>
}

const mapStateToProps = (state) => {
  return {
    listPlayer: filterDataPlayers(state)
  }
}

export const ComponentTable = connect(mapStateToProps)(ComponentResult);