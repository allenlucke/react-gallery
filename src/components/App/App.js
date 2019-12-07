import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../galleryList/galleryList';
//import GalleryItem from '../galleryItem/galleryItem'

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
  putLikes= ({id}) => { 
  console.log(id)   
  axios({
    method: 'PUT',
    url: '/gallery/likes/'+id,  
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
      <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList list= {this.state.galleryList} putLikes= {this.putLikes}/>
      </div>
      </div>
    );
  }
}

export default App;
