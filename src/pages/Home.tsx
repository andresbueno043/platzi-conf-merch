import ProductsLayout from '@/components/ProductsLayout';

function Home() {
  const products: Product[] = [];

  return <ProductsLayout products={products} />;
}

export default Home;
