import type { MouseEvent } from "react";

const ListGroup = () => {
  let items = ["NewYork", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <h1>No item found</h1> : null} */}
      {items.length === 0 && <h1>no item found</h1>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
