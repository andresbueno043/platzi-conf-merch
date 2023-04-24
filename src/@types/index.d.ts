interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProductState {
  cart: Product[];
  products: Product[];
}
