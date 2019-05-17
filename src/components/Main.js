require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import { render } from 'react-dom';
import faker from 'faker';
import CommentDeatil from './CommentDetail';
import ApprovalCard from './ApprovalCard';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = { lat : null , errorMessage : '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat : position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage : err.message });
      }
    );
  }

  render() {

    return (
    <div>
      <div>
        Latitude: {this.state.lat}
      </div>

      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />

          <div className="ui container comments demo">
            <ApprovalCard>
            <CommentDeatil author="Sam" time="Today at 6:00PM" content="Nice bolg posts!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDeatil author="Alex" time="Today at 8:00PM" content="I like the subject" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDeatil author="Jane" time="Yesterday at 11:44PM" content="I like the writing" avatar={faker.image.avatar()} />
            </ApprovalCard>
          </div>

        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
