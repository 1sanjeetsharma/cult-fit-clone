import { Component } from "react";
class Add extends Component {
  state = { fn: "", sn: "", res: "" };
  handlechange(evt) {
    // this.setState({ ...this.state });
    console.log(evt.target.value);
  }
  handleclick() {
    console.log("add clicked");
  }
  render() {
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
      </>
    );
  }
}
export default Add;
