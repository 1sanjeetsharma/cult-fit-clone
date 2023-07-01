import Header from "./header/Header";
import Footer from "./footer/Footer";
const Body = (props) => {
  return (
    <>
      <nav>top nav</nav>
      {/* <h1>body component</h1> */}
      {props.roll}
      {props.children}
      <nav>footer nav</nav>
    </>
  );
};
export default Body;
