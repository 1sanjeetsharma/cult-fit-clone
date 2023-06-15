import { Component } from "react";
class Add extends Component {
  state = { fn: "", sn: "", res: "" };
  handlechange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  handleclick = () => {
    // console.log("add clicked, sum is : ", this.state.fn + this.state.sn);
    console.log(this.state);
    // this.setState({ ...this.state, res: this.state.fn + this.state.sn });
  };
  render() {
    // console.log(this.state);
    return (
      <>
        <h1>Adding Two Numbers</h1>
        First No:
        <input
          type="number"
          value={this.state.fn}
          name="fn"
          onChange={(e) => this.handlechange(e)}
        />
        <br />
        Second No:
        <input
          type="number"
          value={this.state.sn}
          name="sn"
          onChange={(e) => this.handlechange(e)}
        />
        <br />
        <input type="button" value="ADD" onClick={this.handleclick} />
        <hr />
        Result : {this.state.res}
      </>
    );
  }
}
export default Add;
