//props with function
function Student(props) {
  console.log(props.name);
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1>hello {props.name}</h1>
      <h1>email: {props.email}</h1>
    </div>
  );
}

export default Student;
