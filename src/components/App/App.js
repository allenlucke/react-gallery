import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
    const galleryListData = this.state.galleryList.map((item, index) => {
      return (
      <img src={item.path} key={index} alt="not again"/>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <div>{galleryListData}</div>
        <img src="images/goat_small.jpg" alt="not again"/>
        <img src="images/img1.jpg" alt="not again"/>
      </div>
    );
  }
}

export default App;
