export const StationnaryItems = ({ header, items }) => {
  return (
    <>
      <h1>{header}</h1>
      <ul>
        {items.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
    </>
  );
};
