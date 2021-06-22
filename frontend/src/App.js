import React, { Component } from 'react';

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
  }

  render(){
    return(
      <div>
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
              className="w3-input w3-border w3-round w3-margin-bottom"
            />
            <textarea
              name="content"
              value={this.state.info.content}
              placeholder="Enter content for the image"
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
              accept="image/jpeg, image/png"
              className="w3-hide"
            />
            <button
              type="button"
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