import { Component } from "react";
import "./saveshow.css";
class SaveShow extends Component {
  state = { arr: [], name: "", email: "" };
  handlechange = (evt) => {
    this.setState({ ...this.state, [evt.target.name]: evt.target.value });
  };
  handleClick = () => {
    const rcds = [...this.state.arr];
    rcds.push({ name: this.state.name, email: this.state.email });
    this.setState({ ...this.state, arr: [...rcds], email: "", name: "" });
  };
  render = () => {
    return (
      <>
        <h2>hello from saveShow Component</h2>
        Name:{" "}
        <input
          type="text"
          name="name"
          onChange={(e) => {
            this.handlechange(e);
          }}
        />
        <br />
        Email:{" "}
        <input
          type="text"
          name="email"
          onChange={(e) => {
            this.handlechange(e);
          }}
        />
        <br />
        <input type="button" value="save" onClick={this.handleClick} />
        <hr />
        {this.state.arr.map((row, i) => {
          return <div className="box" key={i}></div>;
        })}
      </>
    );
  };
}
export default SaveShow;
