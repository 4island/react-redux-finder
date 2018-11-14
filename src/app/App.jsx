import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllData } from '../redux/table/action';

import { ComponentTable } from '../components/table/ComponentTable';
import  ComponentFilter  from '../components/filter/ComponentFilter';

import './Style.css';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchAllData();
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Football Player Finder</h1>
        <ComponentFilter/>
        <ComponentTable />
      </div>
    );
  }
}

export default connect(null, { fetchAllData })(App);
