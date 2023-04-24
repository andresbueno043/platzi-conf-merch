import ProductsLayout from '@/components/ProductsLayout';
import products from '@/constants/products';

function Home() {
  const productState: Product[] = products.products;

  return <ProductsLayout products={productState} />;
}

export default Home;
