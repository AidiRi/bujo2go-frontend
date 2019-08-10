import React from 'react';

const allItems = () => {

  const getAllItems = () => {
    fetch(`http://localhost:3001/users/1`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    {getAllItems}
  )

};

export default allItems;
