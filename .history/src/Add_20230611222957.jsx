import { Component } from "react";
class Add extends Component {
  state = { fn: "", sn: "", res: "" };
  handlechange(evt) {
    this.setState({ ...this.state });
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
          onChange={this.handlechange(e)}
        />
        <br />
      </>
    );
  }
}
export default Add;
