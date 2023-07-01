import Header from "./header/Header";
import Footer from "./footer/Footer";
const Body = (props) => {
  return (
    <>
      <Header />
      {/* <h1>body component</h1> */}
      {props.roll}
      {props.children}
    </>
  );
};
export default Body;
