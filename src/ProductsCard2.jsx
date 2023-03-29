export const ProductsCard2 = ({ products }) => {
  const arr = products.filter(({ quantity, sales }) => quantity < sales);

  return (
    <div>
      {arr.map(({ name, quantity, sales }) => (
        <li>
          name: {name},quantity: {quantity},sales: {sales}
        </li>
      ))}
    </div>
  );
};
