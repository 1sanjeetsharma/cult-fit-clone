import Body from "./components/body/body";
function App() {
  return (
    <>
      <Body roll="11">
        <h2>this is going to be children of body</h2>
        <p>some text goes here.</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Body>
      <h1>Hello from app</h1>
    </>
  );
}

export default App;
