import { Component } from "react";

import youtube from "./apis/youtube";

import SearchBar from "./Componenets/SearchBar/SearchBar";
import VideoList from "./Componenets/VideoList/VideoList";
import VideoDetail from "./Componenets/VideoDetail/VideoDetail";
import logo from "./logo.png";
import "./App.css";

export class App extends Component {
  state = { videos: [], selectedVideo: null };

  // componentDidMount() {
  //   this.onSearchSubmitHanlder("Reactjs");
  // }

  onSearchSubmitHanlder = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelectHandler = (videoSelected) => {
    this.setState({ selectedVideo: videoSelected });
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearchSubmit={this.onSearchSubmitHanlder}></SearchBar>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelectHandler}
                videos={this.state.videos}
              ></VideoList>
            </div>
          </div>
        </div>
        <div className='footer-logo'>
          <img className='logo' src={logo} alt='logo'></img>
        </div>
      </div>
    );
  }
}

export default App;
