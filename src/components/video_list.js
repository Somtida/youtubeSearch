import React, {Component} from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
  construtor(props) {
    suprer(props);

  }
  render() {
    const mylist = this.props.videos.map(video => {
      return <VideoListItem
                key={video.etag}
                video={video}
                onVideoSelect={this.props.onVideoSelect}/>
    })
    return (
      <ul className="col-md-4 list-group">
        {mylist}
      </ul>
    );
  }
}
