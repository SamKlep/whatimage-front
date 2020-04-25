import React, { Component } from 'react';
import Image from './Image';
import axios from 'axios';
import { Button, Spinner } from 'react-bootstrap';

class ImageList extends Component {
  state = {
    images: [],
    visible: 2,
    isLoading: true,
    newLoaded: false
  };

  componentDidMount() {
    setTimeout(this.getImages, 1500);
  }

  getImages = () => {
    axios
      .get('http://localhost:8000/api/images/', {
        headers: {
          accept: 'application/json'
        }
      })
      .then(resp => {
        this.setState({ images: resp.data });
        console.log(resp);
      });
    this.setState({ isLoading: false });
  };

  handleVisible = () => {
    const visible = this.state.visible;
    const new_visible = visible + 2;
    this.setState({ newLoaded: true });
    setTimeout(() => {
      this.setState({
        visible: new_visible,
        newLoaded: false
      });
    }, 300);
  };

  render() {
    const images = this.state.images.slice(0, this.state.visible).map(img => {
      return <Image key={img.id} pic={img.picture} name={img.classfield} />;
    });
    return (
      <div>
        <h1>Image List here</h1>
        {this.state.isLoading ? (
          <Spinner animation='border' role='status'></Spinner>
        ) : (
          <React.Fragment>
            {images}
            {this.state.newLoaded && (
              <Spinner animation='border' role='status'></Spinner>
            )}
            <br />
            <Button variant='primary' size='lg' onClick={this.handleVisible}>
              Load more
            </Button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ImageList;
