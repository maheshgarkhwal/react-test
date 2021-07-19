import React from "react";

//props with class
export default class Studentc extends React.Component {
  render() {
    console.log("2", this.props);
    return <div>student with class {this.props.name}</div>;
  }
}
