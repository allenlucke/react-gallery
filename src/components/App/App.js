import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../galleryList/galleryList';
//import GalleryItem from '../galleryItem/galleryitem'

class App extends Component {

  state = {
    galleryList: [],
  }

  componentDidMount() {
    this.getGalleryList();
  }
  //GET call
  getGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      this.setState({
        galleryList: response.data
      }, () => {
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  //PUT Call
  putLikes = (event) => {
  console.log('Hi"')    
  axios({
    method: 'PUT',
    url: '/gallery/likes/' + 1,  
  })
  .then((response) => {
    console.log('PUT complete');
    this.getGalleryList();
  })
  .catch((err) => {
    console.warn(err);
  })
  }


  render() {
      
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList list= {this.state.galleryList} putLikes={this.putLikes}/>
      </div>
    );
  }
}

export default App;
