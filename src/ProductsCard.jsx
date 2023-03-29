export const ProductsCard = ({ products }) => {
  return (
    <>
      {products.map(({ name, sales }) => (
        <li>{name}</li>
      ))}
    </>
  );
};
