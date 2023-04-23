import React from 'react';

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div>
      {product.id}
      {product.image}
      {product.name}
      {product.description}
    </div>
  );
}

export default ProductCard;
