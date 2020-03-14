import React from 'react';
import './style.css';

class Popup extends React.Component {
  render() {
    return (
      <div id="myModal" class="modal">
        <span class="close" onClick={this.props.closePopup}>
          &times;
        </span>
        <img
          src={this.props.imagesrc}
          class="modal-content"
          id="img01"
          alt="name"
        />
        <div id="caption">{this.props.text}</div>
      </div>
    );
  }
}

export default Popup;
