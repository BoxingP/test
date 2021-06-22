import React, { Component } from 'react';

import axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      info: {
        title: "",
        content: "",
        image: null
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleChange(e){
    const data = this.state.info;
    data[e.target.name] = e.target.value;
    this.setState({ info: data });
  }

  handleImageChange(e){
    const data = this.state.info;
    data.image = e.target.files[0];
    this.setState({ info: data });
  }

  handleSubmit = () => {
    let form_data = new FormData();

    form_data.append('image', this.state.info.image, this.state.info.image.name);
    form_data.append('title', this.state.info.title);
    form_data.append('content', this.state.info.content);

    axios.post('http://localhost:8000/api/posts/', form_data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => console.log("Uploaded"))
    .catch(err => console.log(err));
  };

  render(){
    return(
      <div>
        <nav
          className="w3-bar w3-blue w3-margin-bottom"
        >
          <button
            type="button"
            className="w3-button w3-bar-item"
          >
            Upload
          </button>
        </nav>
        <div
          className="w3-card-4 w3-round"
          style={{ maxWidth: "500px", width: "70%", padding: "20px", margin: "0 auto" }}
        >
          <h2
            className="w3-center"
          >
            Upload Image
          </h2>
          <form>
            <input
              type="text"
              name="title"
              value={this.state.info.title}
              placeholder="Enter image title"
              onChange={this.handleChange}
              className="w3-input w3-border w3-round w3-margin-bottom"
            />
            <textarea
              name="content"
              value={this.state.info.content}
              placeholder="Enter content for the image"
              onChange={this.handleChange}
              className="w3-input w3-border w3-round w3-margin-bottom"
              style={{ resize: "none" }}
            />
            <label
              htmlFor="imgholder"
              className="w3-button w3-green w3-block w3-round w3-margin-bottom w3-card"
            >
              Add Image
            </label>
            <input
              id="imgholder"
              type="file"
              onChange={this.handleImageChange}
              accept="image/jpeg, image/png"
              className="w3-hide"
            />
            <button
              type="button"
              onClick={this.handleSubmit}
              className="w3-button w3-blue w3-round w3-card"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;