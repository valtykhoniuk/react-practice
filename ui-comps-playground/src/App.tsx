import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Components Playground</h1>
      <Modal />
      <Tabs />
      <Accordion />
    </div>
  );
}

export default App;
