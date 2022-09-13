import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentname: 'Parent',
    };
    this.greetParent = this.greetParent.bind(this);
  }
  // greetParent() {
  //   alert(`Hello ${this.state.parentname}`);
  // }
  greetParent(childName) {
    alert(`Hello ${this.state.parentname} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
