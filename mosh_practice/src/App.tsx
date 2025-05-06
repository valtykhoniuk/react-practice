import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  let items = ["NewYork", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      {/* <Message></Message> */}
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
