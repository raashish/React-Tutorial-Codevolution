import React, { Component } from 'react';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('LifeCycle A constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifecYcle A componentDidMount');
  }
  render() {
    console.log('LifeCycle A render');
    return <div>LifeCycleA</div>;
  }
}

export default LifeCycleA;
