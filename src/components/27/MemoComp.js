// Pure components do a shallow comparison check on the previous state and props and only then it updates/re-renders the page.Thus giving performance improvement.

// PureComponents though only works with Class Basd components. it would be nice if we achieve the same with functional components.

// And that is where we use the REACT.MEMO

// WHAT PURECOMPONENTS IS TO CLASS BASED COMPONENTS,
// MEMO IS TO FUNCTIONAL COMPONENTS

import React from 'react';

function MemoComp({ name }) {
  console.log('rendering Memo comp');
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
