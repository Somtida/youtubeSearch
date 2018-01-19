import React, {Component} from 'react';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term : "",
    }
  }
  render() {
    return (
      <div>
        <label htmlFor="searchText">Search: </label>
        <input type="text" name="searchText" onChange={(event) => this.setState({term: event.target.value})}/>
      </div>
    );
  }
}
