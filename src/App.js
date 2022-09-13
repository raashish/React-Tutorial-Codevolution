import React from 'react';
import './style.css';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/14/EventBind';
import ParentComponent from './components/15/ParentComponent';

export default function App() {
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}
