import React from 'react';

type Props = {
  products: Product[];
};

function ProductsLayout({ products }: Props) {
  return (
    <div className="w-full flex">
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-12 grid-flow-row">
        <div className="col-span-1 h-60 w-full bg-black" />
      </div>
    </div>
  );
}

export default ProductsLayout;
