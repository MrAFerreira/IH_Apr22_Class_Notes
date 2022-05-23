import React from 'react';

function StudentCard(props) {
  const { firstName, info, week } = props;
  return (
    <div>
      <p>
        <b>Name:</b> {firstName}
      </p>
      <p>
        <b>Cohort:</b> {info.cohort}
      </p>
      <p>
        <b>City:</b> {info.city}
      </p>
      <p>
        <b>Current Week:</b> {week}
      </p>
    </div>
  );
}

export default StudentCard;
