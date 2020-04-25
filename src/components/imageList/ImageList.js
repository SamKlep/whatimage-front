import React, { Component } from 'react';
import Image from './Image'
import axios from 'axios';
import { Button } from 'react-bootstrap';

class ImageList extends Component {
  state = {
      images: [],
      visible: 2,
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

  handleVisible = () => {
      const visible = this.state.visible
      const new_visible = visible + 2
      this.setState({visible:new_visible})
  }

  render() {
      const images = this.state.images.slice(0,this.state.visible).map(img=>{
          return <Image key={img.id} pic={img.picture} name={img.classfield} />
      })
    return <div><h1>Image List here</h1>
            {images}
            <Button variant='primary' size='lg' onClick={this.handleVisible}>Load more</Button>
            </div>
  }
}

export default ImageList;
