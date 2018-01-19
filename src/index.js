import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {API_KEY} from 'babel-dotenv';
import YTSearch from 'youtube-api-search';

import Search from './components/search_bar';
import VideoList from './components/video_list';

const API_Key = API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    }

    YTSearch( {key: API_Key, term: 'movie 2018'}, (videos) => {
      this.setState({videos})
    })
  }
  render() {
    return (
      <div className="container">
      <Search />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
