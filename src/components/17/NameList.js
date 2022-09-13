import React from 'react';

function NameList() {
  const names = ['Aashish', 'Neha', 'Preeti', 'Mummy', 'Pappa'];
  return (
    <div>
      {names.map((name) => (
        <h4>{name}</h4>
      ))}
    </div>
  );
}

export default NameList;
