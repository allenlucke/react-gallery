import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../galleryList/galleryList';
//import GalleryItem from '../galleryItem/galleryItem'

class App extends Component {

  state = {
    galleryList: [],
    newGalleryItem: {
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

  //POST call
  postGalleryItem() {
    axios({
      method: 'POST',
      url: '/gallery',
      data: this.state.newGalleryItem
    })
    .then((response) => {
      console.log(response);
      this.getGalleryList();
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

  //DELETE Call
  deleteGalleryItem = ({id}) => {
    console.log(id)
    axios({
      method: 'DELETE',
      url: '/gallery/'+id,
    })
    .then((response) => {
      console.log(response);
      this.getGalleryList();
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  //EVENT HANDLERS
  //Tracks change in input fields
  onChangeInputData = (event, inputKey) => {
    console.log(event, inputKey);
    this.setState({
      newGalleryItem: {
        ...this.state.newGalleryItem,
        [inputKey]: event.target.value
      }
    });
  }
  //Triggers POST of current input values
  onAddGalleryItem = (event) => {
    this.postGalleryItem();
  }

  render() {
      
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <div>
          <h2>Add a Memory to the Gallery</h2>
          <div>
            <input
              type="text"
              placeholder="Title"
              onChange={(event) => this.onChangeInputData(event, 'title')}
            />
            <input
              type="text"
              placeholder="Path/Url"
              onChange={(event) => this.onChangeInputData(event, 'path')}
            />
            <input
              type="text"
              placeholder="Description"
              onChange={(event) => this.onChangeInputData(event, 'description')}
            />
          </div>
          <button class="clickable" onClick={this.onAddGalleryItem}>Add Memory</button>
        </div>
        <br/>
        <GalleryList list= {this.state.galleryList} putLikes= {this.putLikes} deleteGalleryItem= {this.deleteGalleryItem}/>
      </div>
      </div>
    );
  }
}

export default App;
