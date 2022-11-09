import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardProduct from "./productPage/CardProductPage";
import CardProductHome from "./productHome/CardProductHome"

export type resultProps = {
  id: number,
  name: string,
  image: string,
  oldPrice: number,
  price: number,
  description: string,
};

function returnData() {
  const [products, setProducts] = useState<resultProps[]>([]);
  const [nextPage, setNextPage] = useState<string>('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1');

  const Data = async () => {
    const data = await fetch(nextPage);
    const jsonData = await data.json();
    setProducts([...products, ...jsonData.products]);
    return setNextPage('https://' + jsonData.nextPage), console.log(jsonData.products)
  };

  useEffect(() => {
    Data();
  }, []);

  const currentUrl = useLocation().pathname

  if (currentUrl == '/') {
    return (
      <>
        <div className="container">
          <div className="col-12">
            <div className="row">
              {products.map((product: resultProps) =>
                <CardProductHome
                  key={product?.id}
                  name={product?.name}
                  image={product.image}
                  oldPrice={product.oldPrice}
                  price={product.price}
                  description={product.description} />
              )}
            </div>
          </div>
          <button className="cards__card__more" onClick={() => Data()}>Mais produtos</button>
        </div>
      </>
    );
  } else if (currentUrl == '/produtos') {
    return (
      <>
        {console.log(nextPage, products)}
        <div className="container">
          <div className="col-12">
            <div className="row">
              {products.map((product: resultProps) =>
                <CardProduct
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  oldPrice={product.oldPrice}
                  price={product.price}
                  description={product.description}
                />
              )}
            </div>
          </div>
          <button className="cards__card__more" onClick={() => Data()}>Mais produtos</button>
        </div>
      </>
    );
  }
};

export default returnData;