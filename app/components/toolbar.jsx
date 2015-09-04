import React, {Component} from 'react';

export default class Toolbar extends Component {
  render() {
    return (
      <div id="toolbar">
        {this.props.hasPreviousSlide
         ? (
           <button onClick={e => this.props.onPreviousSlide()}>
             Previous Slide
           </button>
         ) : null}
        {this.props.hasNextSlide
         ? (
           <button onClick={e => this.props.onNextSlide()}>
             Next slide
           </button>
         ) : null}
      </div>
    );
  }
}
