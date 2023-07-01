const Body = (props) => {
  return (
    <>
      <nav>home</nav>
      {/* <h1>body component</h1> */}
      {props.roll}
      {props.children}
      <nav>footer nav</nav>
    </>
  );
};
export default Body;
