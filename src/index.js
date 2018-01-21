import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {API_KEY} from 'babel-dotenv';
import _ from 'lodash';
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

    this.onSearchTerm('movie 2018')

  }
  onSearchTerm(term) {
    YTSearch( {key: API_Key, term: term}, (videos) => {
      this.setState({videos});
      this.setState({videoSelect: videos[0]});
    })

  }
  render() {
    const videoSearchTerm = _.debounce((term) => {this.onSearchTerm(term)}, 500);
    return (
      <div>
        <Search onSearchTerm={videoSearchTerm}/>
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
