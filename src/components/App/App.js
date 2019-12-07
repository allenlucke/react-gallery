import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../galleryList/galleryList';

class App extends Component {

  state = {
    galleryList: [],
    enteredData: {
      id: '',
      title: '',
      path: '',
      description: '',
      likes: '',
    }
  }

  componentDidMount() {
    this.getGalleryList();
  }
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
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList list= {this.state.galleryList}/>
        
      </div>
    );
  }
}

export default App;
