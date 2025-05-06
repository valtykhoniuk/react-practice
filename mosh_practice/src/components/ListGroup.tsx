const ListGroup = () => {
  let items = ["NewYork", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <h1>No item found</h1> : null} */}
      {items.length === 0 && <h1>no item found</h1>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
