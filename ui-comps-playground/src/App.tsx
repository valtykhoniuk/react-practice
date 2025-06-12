import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import FormValidation from "./components/FormValidation";
import Modal from "./components/Modal";
import SearchList from "./components/SearchList";
import Slider from "./components/Slider";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="m-4">
      <h1 className="text-2xl">Components Playground</h1>
      <h1 className="mt-6 mb-2 text-xl font-bold">Modal</h1>
      <Modal />
      <h1 className="mt-6 mb-2 text-xl font-bold">Tabs</h1>
      <Tabs />
      <h1 className="mt-6 mb-2 text-xl font-bold">Accordion</h1>
      <Accordion />
      <h1 className="mt-6 mb-2 text-xl font-bold">Slider</h1>
      <Slider />
      <h1 className="mt-6 mb-2 text-xl font-bold">Form Validation</h1>
      <FormValidation />
      <h1 className="mt-6 mb-2 text-xl font-bold">Search List</h1>
      <SearchList />
      <h1 className="mt-6 mb-2 text-xl font-bold">Dropdown</h1>
      <Dropdown />
    </div>
  );
}

export default App;
