import React, { Component } from 'react';

export default class Navigation extends Component {
  constructor(props) {
        super(props);
  }

  render() {
    return (
	<div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
	  <button type="button" className="btn btn-secondary">1</button>
	  <button type="button" className="btn btn-secondary">2</button>
	</div>

    );
  }
}

