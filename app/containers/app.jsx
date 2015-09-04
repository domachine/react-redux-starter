import React, {Component} from 'react';
import {connect} from 'react-redux';

import Toolbar from '../components/toolbar.jsx';
import Slide from '../components/slide.jsx';
import {
  nextSlide,
  previousSlide
} from '../actions';

class App extends Component {
  render() {
    var hasNextSlide = this.props.availableSlides > (this.props.currentSlide + 1);
    var hasPreviousSlide = this.props.currentSlide > 0

    return (
      <div id="main-container">
        <Toolbar onNextSlide={this.props.onNextSlide}
                 hasPreviousSlide={hasPreviousSlide}
                 hasNextSlide={hasNextSlide}
                 onPreviousSlide={this.props.onPreviousSlide}/>
        <Slide index={this.props.currentSlide}/>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    onNextSlide() {
      dispatch(nextSlide());
    },

    onPreviousSlide() {
      dispatch(previousSlide());
    }
  };
}

export default connect(mapState, mapDispatch)(App);
