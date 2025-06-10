import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-amber-600 text-white p-4 rounded-2xl"
        onClick={() => setIsOpen(true)}
      >
        Open modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded ">
            <h2 className="text-xl">Modal</h2>
            <p>Content of modal</p>
            <button onClick={() => setIsOpen(false)} className="mt-4 btn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
