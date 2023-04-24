import React from 'react';
import ProductCard from '@/components/ProductCard';

type Props = {
  products: Product[];
};

function ProductsLayout({ products }: Props) {
  return (
    <div className="w-full flex my-10">
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-12 grid-flow-row">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsLayout;
