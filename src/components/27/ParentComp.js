import React, { Component } from 'react';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Aashish',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Aashish',
      });
    }, 2000);
  }
  render() {
    console.log('********Parent Component Render*********');
    return (
      <div>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
