//Always need to import a local image and give it a name
import hoverCat from '../../assets/download.jpeg';

let student = { firstName: 'karina', lastName: 'freitas' };

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const h1Id = 'myID';

function MyComponent() {
  return (
    <div>
      <img src={hoverCat} alt="Fast cat" />
      <img src="https://img-9gag-fun.9cache.com/photo/aXAObX9_460s.jpg" alt="Fast cat" />
      <h1 id={h1Id}>
        Hello {student.firstName} {student.lastName}
      </h1>
      <h1 className="bg-primary ">
        Hello {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
      </h1>
      <label htmlFor="username">
        <input type="text" name="username" />
      </label>
      <button></button>
      <h1>
        Hello {capitalize(student.firstName)} {capitalize(student.lastName)}
      </h1>
      {/*  <h1>Hello {`${student.firstName} ${student.lastName}`}</h1>
      <h1>Hello {student.firstName + ' ' + student.lastName}</h1> */}
    </div>
  );
}

export default MyComponent;
