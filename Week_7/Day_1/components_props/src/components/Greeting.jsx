// Props

function Greeting(props) {
  console.log(props);
  const { firstName } = props;

  return (
    <div>
      <h1>Hello {firstName} </h1>
    </div>
  );
}

export default Greeting;
