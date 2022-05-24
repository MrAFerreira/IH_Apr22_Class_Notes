import React from 'react';

//const list = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];

const students = ['Ana', 'Keven', 'João', 'Anna'];
const studentsId = [
  { name: 'Ana', id: 'dfghj76' },
  { name: 'Keven', id: 'rtyh' },
  { name: 'Marina', id: '56783' },
  { name: 'João', id: 'rtyyy' },
];

function SimpleList() {
  return (
    <div>
      <h2>Simple List</h2>
      <ul>
        {/* {students.map((name, index) => (
          <li key={index}>{name}</li>
        ))} */}
        {studentsId.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <ol>
        <li>Bananas</li>
        <li>Orange</li>
        <li>Apples</li>
      </ol>
    </div>
  );
}

export default SimpleList;
