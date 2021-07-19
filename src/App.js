import { Component, useState } from "react";
import "./App.css";
import User from "./User";
import User2 from "./User2";
import Student from "./Student";
import Studentc from "./Studentc";
import Profile from "./Profile";

function App() {
  const [data, setData] = useState(0);
  const [data2, setData2] = useState("the arjunartistic");
  const [data3, setData3] = useState();
  const [print, setPrint] = useState(false);
  const [status, setstatus] = useState(false);
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }

  function getdata(val) {
    setData3(val.target.value);
    setPrint(false);
  }
  function clickme() {
    setData(data + 1);
  }

  function update() {
    setData2("mahesh garkhwal");
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={clickme}>click me</button>
      <button onClick={() => alert("hello world with ar function")}>
        click me2
      </button>
      {/* function based component */}
      <User />
      {/* class based component */}
      <User2 />
      {/* passing props to functional component*/}
      <Student name={"mahesh garkhwal"} email={"mahesh.garkhwal@gmail.com"} />
      {/* passing props to class based componenet*/}
      <Studentc name={data2} />
      <button onClick={() => update()}> update</button>
      {/* onchanage input type */}
      <h1>{data3}</h1>
      <input type="text" onChange={getdata} />
      {/* onclick print */}
      {print ? <h1>{data3}</h1> : null}
      <button onClick={() => setPrint(true)}>print data</button>

      <div className="App1">
        {/* hide and show element */}
        {status ? <h1>hello</h1> : null}
        <button onClick={() => setstatus(true)}>show</button>
        <button onClick={() => setstatus(false)}>hide</button>
        {/* hide and show with single button */}
        <button onClick={() => setstatus(!status)}>toggle</button>
        {/* basic form */}
        <form onSubmit={getFormData}>
          <h1>handle form in react</h1>
          <input
            type="text"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br></br>
          <select onChange={(e) => setInterest(e.target.value)}>
            <option>select option</option>
            <option>marvel</option>
            <option>DC</option>
          </select>{" "}
          <br></br>
          <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
          <span>Accept terms and conditions</span>
          <br></br>
          <button type="submit">Submit</button>
          {/* conditional rendering */}
          <Profile />
          {/* pass function  with props */}
          
        </form>
      </div>
    </div>
  );
}

export default App;
/* 
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "mahesh garkhwal",
    };
  }

  Update() {
    this.setState({ data: "arjunartistic" });
  }
  render() {
    return (
      <div className="app" style={{ margin: 100 }}>
        <h1>{this.state.data}</h1>
        <User />
        <User2 />
        <Student name={this.state.data} email={"mahesh.garkhwal@gmail.com"} />
        <Student name={"cristiano rolando"} email={"cr7@gmail.com"} />

        <button onClick={() => this.Update()}>update</button>
      </div>
    );
  }
}

 */
