import React from 'react';

function StudentList(props) {
  console.log(props.children);
  return (
    <div style={{ border: '1px solid black', backgroundColor: 'teal', display: 'flex' }}>
      <h2>Student List:</h2>
      {props.children}
    </div>
  );
}

export default StudentList;
