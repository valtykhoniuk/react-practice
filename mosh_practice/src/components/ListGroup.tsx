import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

const ListGroup = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {/* {items.length === 0 ? <h1>No item found</h1> : null} */}
      {props.items.length === 0 && <h1>no item found</h1>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
