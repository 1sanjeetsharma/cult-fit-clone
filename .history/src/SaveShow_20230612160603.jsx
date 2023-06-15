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
  handleDel = (i) => {
    const rcds = [...this.state.arr];
    console.log("rcds before splice :", rcds);
    rcds.splice(1, i);
    console.log("rcds after splice :", rcds);
    this.setState({ ...this.state, arr: [...rcds] });
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
          value={this.state.name}
        />
        <br />
        Email:{" "}
        <input
          type="text"
          name="email"
          onChange={(e) => {
            this.handlechange(e);
          }}
          value={this.state.email}
        />
        <br />
        <input type="button" value="save" onClick={this.handleClick} />
        <hr />
        {this.state.arr.map((row, i) => {
          return (
            <div className="box" key={i}>
              Name: {row.name}
              <br />
              Email: {row.email}
              <br />
              <input
                type="button"
                value="Delete"
                onClick={(i) => {
                  this.handleDel(i);
                }}
              />
            </div>
          );
        })}
      </>
    );
  };
}
export default SaveShow;
