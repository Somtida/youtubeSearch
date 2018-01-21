import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {API_KEY} from 'babel-dotenv';
import YTSearch from 'youtube-api-search';

import Search from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_Key = API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      videoSelect: null,
    }

    YTSearch( {key: API_Key, term: 'movie 2018'}, (videos) => {
      this.setState({videos});
      this.setState({videoSelect: videos[0]});
    })
  }
  render() {
    let showDetail
    return (
      <div className="container">
      <Search />
      <VideoDetail video={this.state.videoSelect} />
      <VideoList
        onVideoSelect={(videoSelect) => this.setState({videoSelect})}
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
