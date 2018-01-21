import React, {Component} from 'react';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term : "",
    }
  }
  onTermChange(term) {
    this.setState({term})
    this.props.onSearchTerm(term);
  }
  render() {
    return (
      <div className="search-section">
          <div className="search-bar-wrapper">
            <label htmlFor="searchText">
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
            </label>
            <input type="text" name="searchText"
            className="search-bar"
            onChange={(event) => this.onTermChange(event.target.value)} />
          </div>
      </div>
    );
  }
}
