import React, { Component } from 'react';
import Header from '../Header';
import Popup from '../Popup';
import './Post.css';

class Post extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: 'Nasa',
          image:
            'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Microsoft',
          image:
            'https://images.unsplash.com/photo-1584106967414-ebdb3ed3b051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Phillips',
          image:
            'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Fox',
          image:
            'https://images.unsplash.com/photo-1584109409244-cc0ba316ee1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Sony',
          image:
            'https://images.unsplash.com/photo-1572287411358-4ee2d925c31a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'IBM',
          image:
            'https://images.unsplash.com/photo-1584104988089-2320488b4e99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Toshiba',
          image:
            'https://images.unsplash.com/photo-1541187714594-731deadcd16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Volvo',
          image:
            'https://images.unsplash.com/photo-1584099452902-494df86e93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
      ],
      showPopup: false
    };
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  uploadSingleFile(e) {
    this.setState({
      data: [
        ...this.state.data,
        { name: 'upload file', image: URL.createObjectURL(e.target.files[0]) }
      ]
    });
  }

  upload(e) {
    e.preventDefault();
    console.log(this.state.data);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  toggle() {}
  render() {
    return (
      <div>
        <form>
          <div>
            {this.state.data.map(e => {
              return (
                <div>
                  {this.state.showPopup ? (
                    <Popup
                      text='Click "Close Button" to hide popup'
                      imagesrc={e.image}
                      closePopup={this.togglePopup.bind(this)}
                    />
                  ) : null}
                  <img
                    src={e.image}
                    class="center rounded mx-auto d-block"
                    alt={e.name}
                    onClick={this.togglePopup.bind(this)}
                  />
                </div>
              );
            })}
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control"
              onChange={this.uploadSingleFile}
              multiple
            />
          </div>
          <button
            type="button"
            className="btn btn-danger btn-block"
            onClick={this.upload}
          >
            Upload
          </button>
        </form>
      </div>
    );
  }
}
export default Post;
