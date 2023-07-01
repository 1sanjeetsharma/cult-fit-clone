import Header from "./header/Header";
import Footer from "./footer/Footer";
const Body = (props) => {
  return (
    <>
      <Header />

      {props.children}

      <Footer />
    </>
  );
};
export default Body;
