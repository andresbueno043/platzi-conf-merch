import React from 'react';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div
      key={product.id}
      className="col-span-1 bg-white w-full h-72 flex flex-col rounded-lg"
    >
      <div className="w-full h-32 flex items-center justify-center">
        <img src={product.image} className="h-24" alt="" />
      </div>
      <div className="bg-gray-800 h-1" />
      <div>
        <h3 className="text-xl ml-5 font-bold mt-2">{product.title}</h3>
      </div>
      <p className="text-base font-normal ml-4">{product.description}</p>
      <button
        type="button"
        className="mt-4 bg-gray-800 mx-auto py-2 px-8 rounded-3xl text-white"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
