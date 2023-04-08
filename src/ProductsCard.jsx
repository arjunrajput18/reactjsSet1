export const ProductsCard = ({ products }) => {
  return (
    <>
      {products.map(({ name, sales }) => (
        <li>{name}</li>
      ))}
    </>
  );
};


-----------


export const ProductData=()=>{
  const products = [
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Coke', quantity: 18, sales: 50 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: '5Star', quantity: 7, sales: 9 },
  ]

 
 const sortedData=[...products].sort((a,b)=>a.sales-b.sales)
 console.log(sortedData)
 return (<ul>
{products.map(({name},i)=><li key={i}>{name}</li>)}
  </ul>)
}
