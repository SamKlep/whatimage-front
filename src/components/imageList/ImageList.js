import React, { Component } from 'react';
import Image from './Image'
import axios from 'axios';

class ImageList extends Component {
  state = {
      images: [],
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios
      .get('http://localhost:8000/api/images/', {
        headers: {
          'accept': 'application/json'
        }
      })
      .then(resp => {
          this.setState({ images: resp.data })
        console.log(resp);
      });
  };

  render() {
      const images = this.state.images.map(img=>{
          return <Image key={img.id} pic={img.picture} name={img.classfield} />
      })
    return <div><h1>Image List here</h1>
            {images}
            </div>
  }
}

export default ImageList;
