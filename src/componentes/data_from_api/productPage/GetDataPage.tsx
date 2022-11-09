// import CardProduct from './CardProductPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import returnData from '../Data';
// import { useEffect } from 'react';

// type resultProps = {
//   id: number,
//   name: string,
//   image: string,
//   oldPrice: number,
//   price: number,
//   description: string,
//   data: Function
// };

// export default function GetData(props: resultProps) {

//   useEffect(() => {
//     returnData(props)
//   }, [])

//   return (
//     <>
//       <div className="container">
//         <div className="col-12">
//           <div className="row">
//             <CardProduct
//               key={props.id}
//               name={props.name}
//               image={props.image}
//               oldPrice={props.oldPrice} 
//               price={props.price} 
//               description={props.description}
//             />
//           </div>
//         </div>
//         <button className="cards__card__more" onClick={() => props.data}>Mais produtos</button>
//       </div>
//     </>
//   );
// }
























import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardProduct from './CardProductPage';

type resultProps = {
  id: number,
  name: string,
  image: string,
  oldPrice: number,
  price: number,
  description: string
};

export default function GetData() {

  const [products, setProducts] = useState<resultProps[]>([]);
  const [nextPage, setNextPage] = useState<string>('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1');

  const Data = async () => {
    const data = await fetch(nextPage);
    const jsonData = await data.json();
    setProducts([...products,...jsonData.products]);
    return setNextPage('https://' + jsonData.nextPage), console.log(jsonData.products)
  };

  useEffect(() => {
    Data();
  }, []);

  return (
    <>
      {console.log(nextPage, products, useLocation().pathname)}
      <div className="container">
        <div className="col-12">
          <div className="row">
            {products.map((product: resultProps) =>
                <CardProduct key={product?.id} name={product.name} image={product.image} oldPrice={product.oldPrice} price={product.price} description={product.description} />
              )
            }
          </div>
        </div>
        <button className="cards__card__more" onClick={() => Data()}>Mais produtos</button>
      </div>
    </>
  );
}
