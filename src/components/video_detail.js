import React, {Component} from 'react';

export default class VideoDetail extends Component {
  render() {
    if(!this.props.video) {
      return <div>Loading...</div>;
    }

    let videoid = this.props.video.id.videoId;
    let url = `https://www.youtube.com/embed/${videoid}`;
    return(
      <div className="col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} allow="autoplay; encrypted-media"></iframe>
        </div>
        <div className="video-detail">
          <h2>{this.props.video.snippet.title}</h2>
          <p>{this.props.video.snippet.description}</p>
        </div>

      </div>
    );
  }
}
